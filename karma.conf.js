var webpackConfig = require('./webpack.config');

// Karma configuration
// Generated on Sun Jun 17 2018 03:50:16 GMT+0300 (Turkey Standard Time)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      'specs/**/*.spec.ts'
    ],
    exclude: [],
    preprocessors: {
      'specs/**/*.spec.ts': [ 'webpack' ]
    },

    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve,
      performance: { hints: false },
      mode:'production'
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [ 'Chrome'],
    singleRun: false,
    concurrency: Infinity,
    mime: {
      'text/x-typescript': ['ts','tsx']
    }
  })
}
