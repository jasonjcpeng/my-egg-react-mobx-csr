import defaultConfig from "./config.default";
import testConfig from "./config.test";
import prodConfig from "./config.prod";
export default ((): any => {
  switch (process_env_NODE_ENV) {
    case "production":
      return Object.assign(defaultConfig, prodConfig);
    case "test":
      return Object.assign(defaultConfig, testConfig);
    default:
      return defaultConfig;
  }
})();
