const defaultSettings = require('./src/settings.js')
const name = defaultSettings.title || 'Sample Todo' // page title SI_META
module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  configureWebpack: {
    output: {
      filename: "sampletodov1.js"
    },
    name: name
  }
}
