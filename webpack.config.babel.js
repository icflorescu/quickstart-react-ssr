import webpack from 'webpack';
import path from 'path';

import { WEB_PORT, WDS_PORT } from './src/shared/config';
import { isProd } from './src/shared/util';

const proxy = {
  '**': {
    target: `http://localhost:${WEB_PORT}`,
    logLevel: 'silent',
    onError: (err, req, res) => {
      console.log('Server not ready, retrying in one second...'); // eslint-disable-line no-console
      setTimeout(() => { res.redirect(req.path); }, 1000);
    }
  }
};

const entry = {
  index: ['./src/client/polyfills', './src/client']
};

const plugins = [new webpack.optimize.OccurrenceOrderPlugin()];
let devtool = false;

if (isProd) {
  plugins.push(
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    new webpack.optimize.UglifyJsPlugin({ output: { comments: false } })
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
    path: path.resolve(__dirname, 'dist/js'),
    publicPath: '/dist/js/'
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
  }] },
  resolve: { extensions: ['.js', '.jsx'] },
  devServer: { host: '0.0.0.0', port: WDS_PORT, hot: true, proxy },
  devtool,
  plugins
};
