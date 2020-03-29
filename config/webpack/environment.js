const { environment } = require('@rails/webpacker');
const erb = require('./loaders/erb');
const webpack = require('webpack')

environment.loaders.prepend('erb', erb);

// environment.plugins.prepend('Provide',
//   new webpack.ProvidePlugin({
//     $: 'jquery/src/jquery',
//     jQuery: 'jquery/src/jquery',
//     'window.jQuery': 'jquery/src/jquery'
//   })
// );

environment.plugins.append( 'ProvidePlugin-jQuery',
  new webpack.ProvidePlugin({
    jQuery: 'jquery',
    $: 'jquery',
    'window.jQuery': 'jquery'
  })
);
environment.loaders.append('jquery',
  {
    test: require.resolve('jquery'),
    use: [{ loader: 'expose-loader', options: '$', }, { loader: 'expose-loader', options: 'jQuery', }],
  }
);
module.exports = environment;
