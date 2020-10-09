const terminalLink = require('terminal-link');
const boxen = require('boxen');
const chalk = require('chalk');
const data = require('../lib/data');

module.exports = boxen(
  [
    `${data.name}`,
    '',
    `${data.labelTitle}  ${data.title}`,
    '',
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}  ${data.gitHub}`,
    `${data.labelLinkedIn}  ${data.linkedIn}`,
    `${data.labelWeb}  ${data.website}`,
    '',

    `${data.labelNpm}  ${terminalLink(`${data.npm}`, data.npmLink)}`,
    '',
    `${chalk.italic.magentaBright(
      'I am a passionate developer who is always looking',
    )}`,
    `${chalk.italic.magentaBright(
      'to collaborate and meet new people. Shoot me an',
    )}`,
    `${chalk.italic.magentaBright(
      'email or check out my work at the links above',
    )}`,
    `${chalk.italic.magentaBright("and below. I'm always happy to chat!")}`,
  ].join('\n'),
  {
    margin: { bottom: 0, left: 2 },
    padding: 1,
    borderStyle: 'round',
    borderColor: 'magenta',
    backgroundColor: '#14191e',
  },
);
