const ESLintPlugin = require('eslint-webpack-plugin');
const isAnalyze = process.env.ANALYZE === 'true';

module.exports = isAnalyze
    ? require('@next/bundle-analyzer')({
          enabled: true,
      })({
          eslint: {
              // Warning: This allows production builds to successfully complete even if
              // your project has ESLint errors.
              ignoreDuringBuilds: true,
          },
          typescript: {
              // !! WARN !!
              // Dangerously allow production builds to successfully complete even if
              // your project has type errors.
              // !! WARN !!
              ignoreBuildErrors: true,
          },
      })
    : {
          reactStrictMode: true,
          webpack: (config, { dev }) => {
              if (dev) {
                  // Add this plugin only in dev mode
                  config.plugins.push(
                      new ESLintPlugin({
                          extensions: ['ts', 'tsx'], // Exclude everything in these folders
                          exclude: ['node_modules', 'dist'], // 除的文件及目录，相对于 context
                          lintDirtyModulesOnly: true, // 只对内容修改了的文件进行 lint，启动时跳过 lint 。
                      })
                  );
              }
              return config;
          },
      };
