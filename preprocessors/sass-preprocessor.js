const icssUtils = require('icss-utils');
const sass = require('node-sass');
const path = require('path');
const postcss = require('postcss');

function addPref(url, pref) {
  return path.join(path.dirname(url), pref + path.basename(url))
}

function resolveUrl(url, from) {
  const prefixes = ['', '_'];
  const extensions = ['', '.scss', '.sass', '.css'];

  for (const pref of prefixes) {
    for (const ext of extensions) {
      try {
        return require.resolve(addPref(url + ext, pref), { paths: [from] })
      } catch (err) {
        // Ignore errors
      }
    }
  }

  return url
}

function importer(url, prev) {
  let importPath;

  if (url.startsWith('~')) {
    importPath = url.slice(1)
  } else {
    importPath = path.resolve(path.dirname(prev), url)
  }

  return { file: resolveUrl(importPath, prev) }
}

module.exports = {
  process(data, file) {
    const css = sass.renderSync({ file, data, importer }).css.toString();
    const { icssExports } = icssUtils.extractICSS(postcss.parse(css));
    return `module.exports = ${JSON.stringify(icssExports)};`
  },
};
