const package = require('../../../package.json');

module.exports = {
  name: package.name.substr(0, 1).toUpperCase() + package.name.substr(1),
  version: package.version,
  description: package.description,
  license: package.license,
  author: package.author,
  repository: package.repository.url.replace(/\.?git\+?/g, ''),
  bug: package.bugs.url,
  features: [
    {
      name: 'Core',
      modules: []
    },
    {
      name: 'Debug',
      modules: [
        'Debug',
        'Debug utilities'
      ]
    },
    {
      name: 'Animate',
      modules: [
        'Attention seeker',
        'Back',
        'Bounce',
        'Fade',
        'Flip',
        'Rotate',
        'Slide',
        'Special',
        'Speed',
        'Zoom'
      ]
    },
    {
      name: 'Embed',
      modules: []
    },
    {
      name: 'Icon',
      modules: []
    },
    {
      name: 'Reset',
      modules: []
    },
    {
      name: 'Sizing',
      modules: []
    },
    {
      name: 'Transform',
      modules: [
        'Flip',
        'Rotate'
      ]
    }
  ],
  utils: [
    'Assert',
    'Color',
    'Number',
    'String'
  ]
};
