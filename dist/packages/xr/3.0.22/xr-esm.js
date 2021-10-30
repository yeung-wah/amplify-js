// src/XR.ts
import { Amplify, ConsoleLogger as Logger3 } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";

// src/Providers/SumerianProvider.ts
import {
  ConsoleLogger as Logger2,
  Signer,
  Credentials,
  Constants
} from "http://localhost:8080/packages/core/4.3.4/core-esm.js";

// src/Providers/XRProvider.ts
import { ConsoleLogger as Logger } from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
var logger = new Logger("AbstractXRProvider");
var AbstractXRProvider = class {
  constructor(options = {}) {
    this._config = options;
  }
  configure(config = {}) {
    this._config = { ...config, ...this._config };
    logger.debug(`configure ${this.getProviderName()}`, this._config);
    return this.options;
  }
  getCategory() {
    return "XR";
  }
  get options() {
    return { ...this._config };
  }
};

// src/Errors.ts
var XRError = class extends Error {
};
var XRNoSceneConfiguredError = class extends XRError {
};
var XRSceneNotFoundError = class extends XRError {
};
var XRSceneNotLoadedError = class extends XRError {
};
var XRNoDomElement = class extends XRError {
};
var XRSceneLoadFailure = class extends XRError {
};
var XRProviderNotConfigured = class extends XRError {
};

// src/Providers/SumerianProvider.ts
var SUMERIAN_SERVICE_NAME = "sumerian";
var logger2 = new Logger2("SumerianProvider");
var SumerianProvider = class extends AbstractXRProvider {
  constructor(options = {}) {
    super(options);
  }
  getProviderName() {
    return "SumerianProvider";
  }
  async loadScript(url) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement("script");
      scriptElement.src = url;
      scriptElement.addEventListener("load", (event) => {
        resolve();
      });
      scriptElement.addEventListener("error", (event) => {
        reject(new Error(`Failed to load script: ${url}`));
      });
      document.head.appendChild(scriptElement);
    });
  }
  async loadScene(sceneName, domElementId, sceneOptions) {
    if (!sceneName) {
      const errorMsg = "No scene name passed into loadScene";
      logger2.error(errorMsg);
      throw new XRSceneLoadFailure(errorMsg);
    }
    if (!domElementId) {
      const errorMsg = "No dom element id passed into loadScene";
      logger2.error(errorMsg);
      throw new XRNoDomElement(errorMsg);
    }
    const element = document.getElementById(domElementId);
    if (!element) {
      const errorMsg = `DOM element id, ${domElementId} not found`;
      logger2.error(errorMsg);
      throw new XRNoDomElement(errorMsg);
    }
    const scene = this.getScene(sceneName);
    if (!scene.sceneConfig) {
      const errorMsg = `No scene config configured for scene: ${sceneName}`;
      logger2.error(errorMsg);
      throw new XRSceneLoadFailure(errorMsg);
    }
    const sceneUrl = scene.sceneConfig.url;
    const sceneId = scene.sceneConfig.sceneId;
    let sceneRegion;
    if (scene.sceneConfig.hasOwnProperty("region")) {
      sceneRegion = scene.sceneConfig.region;
    } else if (this.options.hasOwnProperty("region")) {
      sceneRegion = this.options.region;
    } else {
      const errorMsg = `No region configured for scene: ${sceneName}`;
      logger2.error(errorMsg);
      throw new XRSceneLoadFailure(errorMsg);
    }
    const awsSDKConfigOverride = {
      region: sceneRegion,
      customUserAgent: `${Constants.userAgent}-SumerianScene`
    };
    const fetchOptions = {
      headers: {
        "X-Amz-User-Agent": Constants.userAgent
      }
    };
    let url = sceneUrl;
    try {
      const credentials = await Credentials.get();
      awsSDKConfigOverride["credentials"] = credentials;
      const accessInfo = {
        secret_key: credentials.secretAccessKey,
        access_key: credentials.accessKeyId,
        session_token: credentials.sessionToken
      };
      const serviceInfo = {
        region: sceneRegion,
        service: SUMERIAN_SERVICE_NAME
      };
      const request = Signer.sign({ method: "GET", url: sceneUrl }, accessInfo, serviceInfo);
      fetchOptions.headers = { ...fetchOptions.headers, ...request.headers };
      url = request.url;
    } catch (e) {
      logger2.debug("No credentials available, the request will be unsigned");
    }
    const apiResponse = await fetch(url, fetchOptions);
    const apiResponseJson = await apiResponse.json();
    if (apiResponse.status === 403) {
      if (apiResponseJson.message) {
        logger2.error(`Failure to authenticate user: ${apiResponseJson.message}`);
        throw new XRSceneLoadFailure(`Failure to authenticate user: ${apiResponseJson.message}`);
      } else {
        logger2.error(`Failure to authenticate user`);
        throw new XRSceneLoadFailure(`Failure to authenticate user`);
      }
    }
    const sceneBundleData = apiResponseJson.bundleData[sceneId];
    const sceneBundle = await fetch(sceneBundleData.url, {
      headers: sceneBundleData.headers
    });
    const sceneBundleJson = await sceneBundle.json();
    try {
      await this.loadScript(sceneBundleJson[sceneId].bootstrapperUrl);
    } catch (error) {
      logger2.error(error);
      throw new XRSceneLoadFailure(error);
    }
    const progressCallback = sceneOptions.progressCallback ? sceneOptions.progressCallback : void 0;
    const publishParamOverrides = scene.publishParamOverrides ? scene.publishParamOverrides : void 0;
    const sceneLoadParams = {
      element,
      sceneId,
      sceneBundle: sceneBundleJson,
      apiResponse: apiResponseJson,
      progressCallback,
      publishParamOverrides,
      awsSDKConfigOverride
    };
    const sceneController = await window.SumerianBootstrapper.loadScene(sceneLoadParams);
    scene.sceneController = sceneController;
    scene.isLoaded = true;
    for (const warning of sceneController.sceneLoadWarnings) {
      logger2.warn(`loadScene warning: ${warning}`);
    }
  }
  isSceneLoaded(sceneName) {
    const scene = this.getScene(sceneName);
    return scene.isLoaded || false;
  }
  getScene(sceneName) {
    if (!this.options.scenes) {
      const errorMsg = "No scenes were defined in the configuration";
      logger2.error(errorMsg);
      throw new XRNoSceneConfiguredError(errorMsg);
    }
    if (!sceneName) {
      const errorMsg = "No scene name was passed";
      logger2.error(errorMsg);
      throw new XRSceneNotFoundError(errorMsg);
    }
    if (!this.options.scenes[sceneName]) {
      const errorMsg = `Scene '${sceneName}' is not configured`;
      logger2.error(errorMsg);
      throw new XRSceneNotFoundError(errorMsg);
    }
    return this.options.scenes[sceneName];
  }
  getSceneController(sceneName) {
    if (!this.options.scenes) {
      const errorMsg = "No scenes were defined in the configuration";
      logger2.error(errorMsg);
      throw new XRNoSceneConfiguredError(errorMsg);
    }
    const scene = this.options.scenes[sceneName];
    if (!scene) {
      const errorMsg = `Scene '${sceneName}' is not configured`;
      logger2.error(errorMsg);
      throw new XRSceneNotFoundError(errorMsg);
    }
    const sceneController = scene.sceneController;
    if (!sceneController) {
      const errorMsg = `Scene controller for '${sceneName}' has not been loaded`;
      logger2.error(errorMsg);
      throw new XRSceneNotLoadedError(errorMsg);
    }
    return sceneController;
  }
  isVRCapable(sceneName) {
    const sceneController = this.getSceneController(sceneName);
    return sceneController.vrCapable;
  }
  isVRPresentationActive(sceneName) {
    const sceneController = this.getSceneController(sceneName);
    return sceneController.vrPresentationActive;
  }
  start(sceneName) {
    const sceneController = this.getSceneController(sceneName);
    sceneController.start();
  }
  enterVR(sceneName) {
    const sceneController = this.getSceneController(sceneName);
    sceneController.enterVR();
  }
  exitVR(sceneName) {
    const sceneController = this.getSceneController(sceneName);
    sceneController.exitVR();
  }
  isMuted(sceneName) {
    const sceneController = this.getSceneController(sceneName);
    return sceneController.muted;
  }
  setMuted(sceneName, muted) {
    const sceneController = this.getSceneController(sceneName);
    sceneController.muted = muted;
  }
  onSceneEvent(sceneName, eventName, eventHandler) {
    const sceneController = this.getSceneController(sceneName);
    sceneController.on(eventName, eventHandler);
  }
  enableAudio(sceneName) {
    const sceneController = this.getSceneController(sceneName);
    sceneController.enableAudio();
  }
};

// src/XR.ts
var logger3 = new Logger3("XR");
var DEFAULT_PROVIDER_NAME = "SumerianProvider";
var XRClass = class {
  constructor(options) {
    this._options = options;
    logger3.debug("XR Options", this._options);
    this._defaultProvider = DEFAULT_PROVIDER_NAME;
    this._pluggables = {};
    this.addPluggable(new SumerianProvider());
  }
  configure(options) {
    const opt = options ? options.XR || options : {};
    logger3.debug("configure XR", { opt });
    this._options = Object.assign({}, this._options, opt);
    Object.entries(this._pluggables).map(([name, provider]) => {
      if (name === this._defaultProvider && !opt[this._defaultProvider]) {
        provider.configure(this._options);
      } else {
        provider.configure(this._options[name]);
      }
    });
    return this._options;
  }
  async addPluggable(pluggable) {
    if (pluggable && pluggable.getCategory() === "XR") {
      this._pluggables[pluggable.getProviderName()] = pluggable;
      const config = pluggable.configure(this._options);
      return config;
    }
  }
  async loadScene(sceneName, domElementId, sceneOptions = {}, provider = this._defaultProvider) {
    if (!this._pluggables[provider])
      throw new XRProviderNotConfigured(`Provider '${provider}' not configured`);
    return await this._pluggables[provider].loadScene(sceneName, domElementId, sceneOptions);
  }
  isSceneLoaded(sceneName, provider = this._defaultProvider) {
    if (!this._pluggables[provider])
      throw new XRProviderNotConfigured(`Provider '${provider}' not configured`);
    return this._pluggables[provider].isSceneLoaded(sceneName);
  }
  getSceneController(sceneName, provider = this._defaultProvider) {
    if (!this._pluggables[provider])
      throw new XRProviderNotConfigured(`Provider '${provider}' not configured`);
    return this._pluggables[provider].getSceneController(sceneName);
  }
  isVRCapable(sceneName, provider = this._defaultProvider) {
    if (!this._pluggables[provider])
      throw new XRProviderNotConfigured(`Provider '${provider}' not configured`);
    return this._pluggables[provider].isVRCapable(sceneName);
  }
  isVRPresentationActive(sceneName, provider = this._defaultProvider) {
    if (!this._pluggables[provider])
      throw new XRProviderNotConfigured(`Provider '${provider}' not configured`);
    return this._pluggables[provider].isVRPresentationActive(sceneName);
  }
  start(sceneName, provider = this._defaultProvider) {
    if (!this._pluggables[provider])
      throw new XRProviderNotConfigured(`Provider '${provider}' not configured`);
    return this._pluggables[provider].start(sceneName);
  }
  enterVR(sceneName, provider = this._defaultProvider) {
    if (!this._pluggables[provider])
      throw new XRProviderNotConfigured(`Provider '${provider}' not configured`);
    return this._pluggables[provider].enterVR(sceneName);
  }
  exitVR(sceneName, provider = this._defaultProvider) {
    if (!this._pluggables[provider])
      throw new XRProviderNotConfigured(`Provider '${provider}' not configured`);
    return this._pluggables[provider].exitVR(sceneName);
  }
  isMuted(sceneName, provider = this._defaultProvider) {
    if (!this._pluggables[provider])
      throw new XRProviderNotConfigured(`Provider '${provider}' not configured`);
    return this._pluggables[provider].isMuted(sceneName);
  }
  setMuted(sceneName, muted, provider = this._defaultProvider) {
    if (!this._pluggables[provider])
      throw new XRProviderNotConfigured(`Provider '${provider}' not configured`);
    return this._pluggables[provider].setMuted(sceneName, muted);
  }
  onSceneEvent(sceneName, eventName, eventHandler, provider = this._defaultProvider) {
    if (!this._pluggables[provider])
      throw new XRProviderNotConfigured(`Provider '${provider}' not configured`);
    return this._pluggables[provider].onSceneEvent(sceneName, eventName, eventHandler);
  }
  enableAudio(sceneName, provider = this._defaultProvider) {
    if (!this._pluggables[provider])
      throw new XRProviderNotConfigured(`Provider '${provider}' not configured`);
    return this._pluggables[provider].enableAudio(sceneName);
  }
};
var XR = new XRClass(null);
Amplify.register(XR);

// src/index.ts
var src_default = XR;
export {
  SumerianProvider,
  XR,
  XRError,
  XRNoDomElement,
  XRNoSceneConfiguredError,
  XRProviderNotConfigured,
  XRSceneLoadFailure,
  XRSceneNotFoundError,
  XRSceneNotLoadedError,
  src_default as default
};
