const fs = require('fs');
const package = require('../../../package.json');

const upperCaseFirst = (str) => {
  return str.substr(0, 1).toUpperCase() + str.substr(1);
};

const loadFeatureVars = (feature) => {
  const vars = [];
  try {

    let data = fs.readFileSync(`scss/features/${feature}/_variables.scss`, 'UTF8');
    data = data.trim().replace(/[\t ]+/g, ' ');
    data = data.replace(/: \([\r\n]+/g, ': ( ');
    data = data.replace(/,[\r\n]+/g, ', ');
    data = data.replace(/[\r\n]+\);/g, ' );');

    const lines = data.split(/\r?\n\r?\n/);

    lines.forEach(line => {
      line = line.replace(/;$/, '');
      line = line.replace(/: /, '\n');
      const tokens = line.split('\n');
      vars.push({
        name: tokens[0],
        value: tokens[1],
        featureId: feature,
        featureName: upperCaseFirst(feature)
      });
    });

  }
  catch (err) {
    console.error(err);
  }
  return vars;
};

module.exports = {
  id: package.name,
  name: upperCaseFirst(package.name),
  version: package.version,
  description: package.description,
  license: package.license,
  author: package.author,
  repository: package.repository.url.replace(/\.?git\+?/g, ''),
  bug: package.bugs.url,
  features: {
    core: loadFeatureVars('core'),
    debug: loadFeatureVars('debug'),
    animate: loadFeatureVars('animate'),
    embed: loadFeatureVars('embed'),
    icon: loadFeatureVars('icon'),
    reset: loadFeatureVars('reset'),
    shape: loadFeatureVars('shape'),
    sizing: loadFeatureVars('sizing'),
    transform: loadFeatureVars('transform')
  },
  utils: [
    'Assert',
    'Color',
    'Number',
    'String'
  ]
};
