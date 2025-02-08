const packageJson = require('../../package.json');
const appVersion = process.env.REACT_APP_VERSION || packageJson.version;
export default appVersion; 
