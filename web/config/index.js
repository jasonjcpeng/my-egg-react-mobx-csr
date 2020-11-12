import defaultConfig from './config.default';
import devConfig from './config.dev';
import prodConfig from './config.prod';
export default (() => {
  switch (window['process.env.NODE_ENV']) {
    case 'production':
      return Object.assign(defaultConfig, prodConfig);
    case 'development':
      return Object.assign(defaultConfig, devConfig);
    default:
      return defaultConfig;
  }
})();