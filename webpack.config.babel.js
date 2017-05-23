import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { OptionsPlugin as StylusLoaderOptionsPlugin } from 'stylus-loader';
import autoprefixer from 'autoprefixer-stylus';

import { WEB_PORT, WDS_PORT } from './src/shared/config';
import { isProd } from './src/shared/util';

const proxy = {
  '**': {
    target: `http://localhost:${WEB_PORT}`,
    logLevel: 'silent',
    onError: (err, req, res) => {
      // eslint-disable-next-line no-console
      console.log('Server not ready, retrying in one second...');
      setTimeout(() => { res.redirect(req.path); }, 1000);
    }
  }
};

const entry = {
  index: ['./src/client/polyfills', './src/client']
};

const plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new StylusLoaderOptionsPlugin({ default: { use: [autoprefixer({ browsers: ['> 5%'] })] } })
];

let devtool = false;

if (isProd) {
  plugins.push(
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    new webpack.optimize.UglifyJsPlugin({ output: { comments: false } }),
    new ExtractTextPlugin('[name].css')
  );
} else {
  // Add react-hot-loader/patch after polyfills
  entry.index.splice(entry.index.length - 1, 0, 'react-hot-loader/patch');
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  );
  devtool = 'source-map';
}

export default {
  entry,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  module: { rules: [{
    test: /\.(js|jsx)$/,
    use: {
      loader: 'babel-loader',
      query: {
        babelrc: false,
        presets: [['env', { targets: 'uglify', useBuiltIns: true }], 'react'],
        plugins: ['transform-object-rest-spread']
      }
    },
    exclude: /node_modules/
  }, {
    test: /\.styl$/,
    loader: isProd
      ? ExtractTextPlugin.extract('css-loader?-url!stylus-loader')
      : 'style-loader!css-loader?-url!stylus-loader'
  }] },
  resolve: { extensions: ['.js', '.jsx'] },
  devServer: { host: '0.0.0.0', port: WDS_PORT, hot: true, proxy },
  devtool,
  plugins
};
