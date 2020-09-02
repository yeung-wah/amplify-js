import { Buffer } from 'buffer';
import CryptoJS from 'crypto-js/core';
import 'crypto-js/lib-typedarrays'; // necessary for crypto js
import SHA256 from 'crypto-js/sha256';
import HmacSHA256 from 'crypto-js/hmac-sha256';
import createBigInteger, { BigInteger } from 'big-integer';

const randomBytes = (nBytes: number) => {
	return Buffer.from(CryptoJS.lib.WordArray.random(nBytes).toString(), 'hex');
};

const initN =
	'FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD1' +
	'29024E088A67CC74020BBEA63B139B22514A08798E3404DD' +
	'EF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245' +
	'E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7ED' +
	'EE386BFB5A899FA5AE9F24117C4B1FE649286651ECE45B3D' +
	'C2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F' +
	'83655D23DCA3AD961C62F356208552BB9ED529077096966D' +
	'670C354E4ABC9804F1746C08CA18217C32905E462E36CE3B' +
	'E39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9' +
	'DE2BCBF6955817183995497CEA956AE515D2261898FA0510' +
	'15728E5A8AAAC42DAD33170D04507A33A85521ABDF1CBA64' +
	'ECFB850458DBEF0A8AEA71575D060C7DB3970F85A6E1E4C7' +
	'ABF5AE8CDB0933D71E8C94E04A25619DCEE3D2261AD2EE6B' +
	'F12FFA06D98A0864D87602733EC86A64521F2B18177B200C' +
	'BBE117577A615D6C770988C0BAD946E208E24FA074E5AB31' +
	'43DB5BFCE0FD108E4B82D120A93AD2CAFFFFFFFFFFFFFFFF';

const newPasswordRequiredChallengeUserAttributePrefix = 'userAttributes.';

type NodeCallback<R> = (error: Error | null, success: R | null) => void;

/** @class */
export default class AuthenticationHelper {
	N: BigInteger;
	g: BigInteger;
	k: BigInteger;
	smallAValue: BigInteger;
	largeAValue: BigInteger;
	infoBits: Buffer;
	randomPassword: string;
	SaltToHashDevices: string;
	UHexHash: string;
	UValue: BigInteger;
	verifierDevices: string;

	constructor(public poolName: string) {
		this.N = createBigInteger(initN, 16);
		this.g = createBigInteger('2', 16);
		this.k = createBigInteger(
			this.hexHash(`00${this.N.toString(16)}0${this.g.toString(16)}`),
			16
		);
		this.smallAValue = this.generateRandomSmallA();
		this.getLargeAValue(() => {});
		this.infoBits = Buffer.from('Caldera Derived Key', 'utf8');
	}

	/**
	 * @returns {BigInteger} small A, a random number
	 */
	getSmallAValue(): BigInteger {
		return this.smallAValue;
	}

	/**
	 * @param {nodeCallback<BigInteger>} callback Called with (err, largeAValue)
	 * @returns {void}
	 */
	getLargeAValue(callback: NodeCallback<BigInteger>): void {
		if (this.largeAValue) {
			callback(null, this.largeAValue);
		} else {
			this.calculateA(this.smallAValue, (err, largeAValue) => {
				if (err) {
					callback(err, null);
				}

				this.largeAValue = largeAValue;
				callback(null, this.largeAValue);
			});
		}
	}

	/**
	 * helper function to generate a random big integer
	 * @returns {BigInteger} a random value.
	 * @private
	 */
	generateRandomSmallA(): BigInteger {
		const hexRandom = randomBytes(128).toString('hex');
		const randomBigInt = createBigInteger(hexRandom, 16);
		const smallABigInt = randomBigInt.mod(this.N);
		return smallABigInt;
	}

	/**
	 * helper function to generate a random string
	 * @returns {string} a random value.
	 * @private
	 */
	generateRandomString(): string {
		return randomBytes(40).toString('base64');
	}

	/**
	 * @returns {string} Generated random value included in password hash.
	 */
	getRandomPassword(): string {
		return this.randomPassword;
	}

	/**
	 * @returns {string} Generated random value included in devices hash.
	 */
	getSaltDevices(): string {
		return this.SaltToHashDevices;
	}

	/**
	 * @returns {string} Value used to verify devices.
	 */
	getVerifierDevices(): string {
		return this.verifierDevices;
	}

	/**
	 * Generate salts and compute verifier.
	 * @param {string} deviceGroupKey Devices to generate verifier for.
	 * @param {string} username User to generate verifier for.
	 * @param {nodeCallback<null>} callback Called with (err, null)
	 * @returns {void}
	 */
	generateHashDevice(
		deviceGroupKey: string,
		username: string,
		callback: NodeCallback<any>
	): void {
		this.randomPassword = this.generateRandomString();
		const combinedString = `${deviceGroupKey}${username}:${this.randomPassword}`;
		const hashedString = this.hash(combinedString);

		const hexRandom = randomBytes(16).toString('hex');
		this.SaltToHashDevices = this.padHex(createBigInteger(hexRandom, 16));

		try {
			const verifierDevicesNotPadded = this.g.modPow(
				createBigInteger(
					this.hexHash(this.SaltToHashDevices + hashedString),
					16
				),
				this.N
			);
			this.verifierDevices = this.padHex(verifierDevicesNotPadded);
			callback(null, null);
		} catch (e) {
			callback(e, null);
		}
	}

	/**
	 * Calculate the client's public value A = g^a%N
	 * with the generated random number a
	 * @param {BigInteger} a Randomly generated small A.
	 * @param {nodeCallback<BigInteger>} callback Called with (err, largeAValue)
	 * @returns {void}
	 * @private
	 */
	calculateA(a: BigInteger, callback: NodeCallback<BigInteger>): void {
		try {
			const A = this.g.modPow(a, this.N);
			if (A.mod(this.N).equals(createBigInteger[0])) {
				callback(new Error('Illegal paramater. A mod N cannot be 0.'), null);
			}

			callback(null, A);
		} catch (e) {
			callback(e, null);
		}
	}

	/**
	 * Calculate the client's value U which is the hash of A and B
	 * @param {BigInteger} A Large A value.
	 * @param {BigInteger} B Server B value.
	 * @returns {BigInteger} Computed U value.
	 * @private
	 */
	calculateU(A: BigInteger, B: BigInteger): BigInteger {
		this.UHexHash = this.hexHash(this.padHex(A) + this.padHex(B));
		const finalU = createBigInteger(this.UHexHash, 16);
		return finalU;
	}

	/**
	 * Calculate a hash from a bitArray
	 * @param {Buffer} buf Value to hash.
	 * @returns {String} Hex-encoded hash.
	 * @private
	 */
	hash(buf: Buffer | string): string {
		const str =
			buf instanceof Buffer ? CryptoJS.lib.WordArray.create(buf) : buf;
		const hashHex = SHA256(str).toString();
		return new Array(64 - hashHex.length).join('0') + hashHex;
	}

	/**
	 * Calculate a hash from a hex string
	 * @param {String} hexStr Value to hash.
	 * @returns {String} Hex-encoded hash.
	 * @private
	 */
	hexHash(hexStr: string): string {
		return this.hash(Buffer.from(hexStr, 'hex'));
	}

	/**
	 * Standard hkdf algorithm
	 * @param {Buffer} ikm Input key material.
	 * @param {Buffer} salt Salt value.
	 * @returns {Buffer} Strong key material.
	 * @private
	 */
	computehkdf(ikm: Buffer, salt: Buffer): Buffer {
		const infoBitsWordArray = CryptoJS.lib.WordArray.create(
			Buffer.concat([
				this.infoBits,
				Buffer.from(String.fromCharCode(1), 'utf8'),
			])
		);
		const ikmWordArray =
			ikm instanceof Buffer ? CryptoJS.lib.WordArray.create(ikm) : ikm;
		const saltWordArray =
			salt instanceof Buffer ? CryptoJS.lib.WordArray.create(salt) : salt;
		const prk = HmacSHA256(ikmWordArray, saltWordArray);
		const hmac = HmacSHA256(infoBitsWordArray, prk);
		return Buffer.from(hmac.toString(), 'hex').slice(0, 16);
	}

	/**
	 * Calculates the final hkdf based on computed S value, and computed U value and the key
	 * @param {String} username Username.
	 * @param {String} password Password.
	 * @param {BigInteger} serverBValue Server B value.
	 * @param {BigInteger} salt Generated salt.
	 * @param {nodeCallback<Buffer>} callback Called with (err, hkdfValue)
	 * @returns {void}
	 */
	getPasswordAuthenticationKey(
		username: string,
		password: string,
		serverBValue: BigInteger,
		salt: BigInteger,
		callback: NodeCallback<Buffer>
	): void {
		if (serverBValue.mod(this.N).equals(createBigInteger[0])) {
			throw new Error('B cannot be zero.');
		}

		this.UValue = this.calculateU(this.largeAValue, serverBValue);

		if (this.UValue.equals(createBigInteger[0])) {
			throw new Error('U cannot be zero.');
		}

		const usernamePassword = `${this.poolName}${username}:${password}`;
		const usernamePasswordHash = this.hash(usernamePassword);

		const xValue = createBigInteger(
			this.hexHash(this.padHex(salt) + usernamePasswordHash),
			16
		);
		this.calculateS(xValue, serverBValue, (err, sValue) => {
			if (err) {
				callback(err, null);
			}

			const hkdf = this.computehkdf(
				Buffer.from(this.padHex(sValue), 'hex'),
				Buffer.from(this.padHex(this.UValue.toString(16)), 'hex')
			);

			callback(null, hkdf);
		});
	}

	/**
	 * Calculates the S value used in getPasswordAuthenticationKey
	 * @param {BigInteger} xValue Salted password hash value.
	 * @param {BigInteger} serverBValue Server B value.
	 * @param {nodeCallback<string>} callback Called on success or error.
	 * @returns {void}
	 */
	calculateS(
		xValue: BigInteger,
		serverBValue: BigInteger,
		// was previously utilized as accepting a BigInteger, not a string.
		callback: NodeCallback<BigInteger>
	): void {
		try {
			const gModPowXN = this.g.modPow(xValue, this.N);
			const intValue2 = serverBValue.subtract(this.k.multiply(gModPowXN));
			try {
				const result = intValue2.modPow(
					this.smallAValue.add(this.UValue.multiply(xValue)),
					this.N
				);
				callback(null, result.mod(this.N));
			} catch (e2) {
				callback(e2, null);
			}
		} catch (e) {
			callback(e, null);
		}
	}

	/**
	 * Return constant newPasswordRequiredChallengeUserAttributePrefix
	 * @return {newPasswordRequiredChallengeUserAttributePrefix} constant prefix value
	 */
	getNewPasswordRequiredChallengeUserAttributePrefix(): string {
		return newPasswordRequiredChallengeUserAttributePrefix;
	}

	/**
	 * Converts a BigInteger (or hex string) to hex format padded with zeroes for hashing
	 * @param {BigInteger|String} bigInt Number or string to pad.
	 * @returns {String} Padded hex string.
	 */
	padHex(bigInt: BigInteger | string): string {
		let hashStr = bigInt.toString(16);
		if (hashStr.length % 2 === 1) {
			hashStr = `0${hashStr}`;
		} else if ('89ABCDEFabcdef'.indexOf(hashStr[0]) !== -1) {
			hashStr = `00${hashStr}`;
		}
		return hashStr;
	}
}
