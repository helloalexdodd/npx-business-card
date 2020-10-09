const terminalLink = require('terminal-link');
const boxen = require('boxen');
const { magentaBright } = require('chalk');
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
    `${magentaBright.italic(
      'I am a passionate developer who is always looking',
    )}`,
    `${magentaBright.italic(
      'to collaborate and meet new people. Shoot me an',
    )}`,
    `${magentaBright.italic('email or check out my work at the links above')}`,
    `${magentaBright.italic("and below. I'm always happy to chat!")}`,
  ].join('\n'),
  {
    margin: { bottom: 0, left: 2 },
    padding: 1,
    borderStyle: 'round',
    borderColor: 'magenta',
    backgroundColor: '#14191e',
  },
);
