const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  []);

module.exports = {
  output: {
    uniqueName: "shell",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },
        // For hosts (please adjust)
        // remotes: {
        //   "dash": "http://localhost:3001/remoteEntry.js",
        // },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
          "@angular/common": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
          "@angular/common/http": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
          "@angular/router": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
          "nosbor-shared-testing": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
  ],
};
