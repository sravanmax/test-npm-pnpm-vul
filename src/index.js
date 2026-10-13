const axios = require('axios');
const _ = require('lodash');
const minimist = require('minimist');

// Vulnerable method 1: Axios Proxy Bypass (CVE-2021-41773)
function makeRequestWithAxios(userUrl, userProxy) {
  const config = {
    url: userUrl,
    proxy: userProxy
  };
  return axios.request(config);
}

// Vulnerable method 2: Lodash prototype pollution (CVE-2021-23337)
function mergeConfig(baseConfig, userConfig) {
  return _.defaultsDeep(baseConfig, userConfig);
}

// Vulnerable method 3: minimist prototype pollution (CVE-2021-44906)
function parseArgs(args) {
  return minimist(args);
}

module.exports = {
  makeRequestWithAxios,
  mergeConfig,
  parseArgs
};
