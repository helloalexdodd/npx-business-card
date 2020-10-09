const terminalLink = require('terminal-link');
const chalk = require('chalk');

const anmol098 = terminalLink('anmol098', 'https://github.com/anmol098');

module.exports = [
  `Info: You can ${chalk.cyanBright.bold(
    'cmd/ctrl + click',
  )} on the links above or select an option from below:`,
  `${chalk.grey.dim(`Inspired by ${anmol098}`)}`,
  '',
].join('\n');
