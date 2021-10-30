// src/API.ts
import { Auth } from "http://localhost:8080/packages/auth/4.3.12/auth-esm.js";
import Cache from "http://localhost:8080/packages/cache/4.0.24/cache-esm.js";
import { RestAPIClass } from "http://localhost:8080/packages/api-rest/2.0.22/api-rest-esm.js";
import {
  GraphQLAPIClass
} from "http://localhost:8080/packages/api-graphql/2.2.11/api-graphql-esm.js";
import {
  Amplify,
  ConsoleLogger as Logger,
  Credentials
} from "http://localhost:8080/packages/core/4.3.4/core-esm.js";
var logger = new Logger("API");
var APIClass = class {
  constructor(options) {
    this.Auth = Auth;
    this.Cache = Cache;
    this.Credentials = Credentials;
    this._options = options;
    this._restApi = new RestAPIClass(options);
    this._graphqlApi = new GraphQLAPIClass(options);
    logger.debug("API Options", this._options);
  }
  getModuleName() {
    return "API";
  }
  configure(options) {
    this._options = Object.assign({}, this._options, options);
    this._restApi.Credentials = this.Credentials;
    this._graphqlApi.Auth = this.Auth;
    this._graphqlApi.Cache = this.Cache;
    this._graphqlApi.Credentials = this.Credentials;
    const restAPIConfig = this._restApi.configure(this._options);
    const graphQLAPIConfig = this._graphqlApi.configure(this._options);
    return { ...restAPIConfig, ...graphQLAPIConfig };
  }
  get(apiName, path, init) {
    return this._restApi.get(apiName, path, init);
  }
  post(apiName, path, init) {
    return this._restApi.post(apiName, path, init);
  }
  put(apiName, path, init) {
    return this._restApi.put(apiName, path, init);
  }
  patch(apiName, path, init) {
    return this._restApi.patch(apiName, path, init);
  }
  del(apiName, path, init) {
    return this._restApi.del(apiName, path, init);
  }
  head(apiName, path, init) {
    return this._restApi.head(apiName, path, init);
  }
  isCancel(error) {
    return this._restApi.isCancel(error);
  }
  cancel(request, message) {
    return this._restApi.cancel(request, message);
  }
  async endpoint(apiName) {
    return this._restApi.endpoint(apiName);
  }
  getGraphqlOperationType(operation) {
    return this._graphqlApi.getGraphqlOperationType(operation);
  }
  graphql(options, additionalHeaders) {
    return this._graphqlApi.graphql(options, additionalHeaders);
  }
};
var API = new APIClass(null);
Amplify.register(API);

// src/index.ts
import {
  graphqlOperation,
  GraphQLAuthError,
  GRAPHQL_AUTH_MODE
} from "http://localhost:8080/packages/api-graphql/2.2.11/api-graphql-esm.js";
var src_default = API;
export {
  API,
  APIClass,
  GRAPHQL_AUTH_MODE,
  GraphQLAuthError,
  src_default as default,
  graphqlOperation
};
