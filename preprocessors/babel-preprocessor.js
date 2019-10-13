const { createTransformer } = require('babel-jest');
const { resolve } = require('path');

const rootDir = resolve(__dirname, '../');

const babelConfig = {
  presets: ['preact', 'babel-jest'],
  transform:{

  }
};

if (process.env.PROXY_CONFIG === 'none') {
  babelConfig.plugins = [...babelConfig.plugins]
}

module.exports = createTransformer(babelConfig);
