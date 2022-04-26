module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'inline-dotenv',
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@api': './src/api',
            '@components': './src/components',
            '@context': './src/context',
            '@customTypes': './src/types'
          },
          extensions: ['.ts', '.tsx', '.js', '.jsx']
        }
      ]
    ]
  }
}
