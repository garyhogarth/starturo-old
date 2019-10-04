/* eslint-disable semi */

const presets = ['module:metro-react-native-babel-preset']
const plugins = [
  ['@babel/plugin-transform-flow-strip-types'],
  [
    'module-resolver',
    {
      root: ['./'],
      alias: {
        '#starturo': './src',
        '#assets': './src/app/assets',
      },
    },
  ],
  ['@babel/plugin-proposal-class-properties', { loose: true }],
]

module.exports = { presets, plugins }
