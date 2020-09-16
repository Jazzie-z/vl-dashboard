const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#5c0099'},//'#bba5e1' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};