const copy = require('./copy');
const { white, gray, magenta, magentaBright, red, blue } = require('chalk');

module.exports = {
  name: magentaBright.bold(copy.name),
  title: white(copy.title),
  twitter: gray(copy.twitter) + blue(copy.handle),
  gitHub: gray(copy.gitHub) + blue(copy.handle),
  linkedIn: gray(copy.linkedIn) + blue(copy.handle),
  website: magenta(copy.website),
  npx: red(copy.npx.split(' ')[0]) + ' ' + white(copy.npx.split(' ')[1]),
  repo: magenta(copy.repo),

  labelTitle: white.bold(copy.labelTitle),
  labelTwitter: white.bold(copy.labelTwitter),
  labelGitHub: white.bold(copy.labelGitHub),
  labelLinkedIn: white.bold(copy.labelLinkedIn),
  labelWeb: white.bold(copy.labelWeb),
  labelCard: white.bold(copy.labelCard),
};
