const presets = ['module:metro-react-native-babel-preset']
const plugins = []

plugins.push([
  'module-resolver',
  {
    root: ['./src'],
    extensions: ['.js', '.json'],
    alias: {
      '@': './src',
    },
  },
  'react-native-reanimated/plugin',
  'babel-plugin-styled-components',
])

module.exports = {
  presets,
  plugins,
}
