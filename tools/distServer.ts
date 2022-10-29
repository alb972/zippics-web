import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import chalk from 'chalk';

console.log(chalk.blue('Opening production build...'));

// Run Browsersync
browserSync({
  port: 4000,
  ui: {
    port: 4001
  },
  server: {
    baseDir: 'dist'
  },

  files: [
    'src/*.html'
  ],

  middleware: [historyApiFallback()]
});