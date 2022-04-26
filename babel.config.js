const presets = ['module:metro-react-native-babel-preset']
const plugins = [
  [
    'module-resolver',
    {
      root: ['./src'],
      extensions: ['.js', '.json'],
      alias: [
        {
          '@': './src',
        },
      ],
    },
  ],
  'babel-plugin-styled-components',
  'react-native-reanimated/plugin',
]
module.exports = {
  presets,
  plugins,
}
