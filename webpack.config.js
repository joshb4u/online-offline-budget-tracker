const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  entry: "./public/index.js",
    output: {
    path: __dirname + "/public/dist",
    filename: "bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  plugins: [
    new WebpackPwaManifest({
        filename: 'manifest.json',
        inject: false,
        fingerprints: false,
        display: 'standalone',
        name: 'Offline-Online-Budget-Tracker',
        short_name: 'Budget',
        description: 'A budget tracker that saves online as well as offline',
        background_color: '#01579b',
        theme_color: '#ffffff',
        'theme-color': '#ffffff',
        start_url: '/',
      icons: [{
        src: path.resolve("public/icons/icon-192x192.png"),
        sizes: [96, 128, 192, 256, 384, 512],
        destination: "icons",
      }]
    })
  ]
};

module.exports = config;
