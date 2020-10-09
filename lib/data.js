const { white, gray, magenta, magentaBright, red, blue } = require('chalk');
const copy = require('./copy');

module.exports = {
  name: magentaBright.bold(copy.name),
  title: white(copy.title),
  twitter: gray(copy.twitter) + blue(copy.handle),
  gitHub: gray(copy.gitHub) + blue(copy.handle),
  linkedIn: gray(copy.linkedIn) + blue(copy.handle),
  website: magenta(copy.website),
  repo: magenta(copy.repo),
  npm: red(`npx ${white(copy.handle)}`),
  npmLink: copy.npmLink,

  labelTitle: white.bold(copy.labelTitle),
  labelTwitter: white.bold(copy.labelTwitter),
  labelGitHub: white.bold(copy.labelGitHub),
  labelLinkedIn: white.bold(copy.labelLinkedIn),
  labelWeb: white.bold(copy.labelWeb),
  labelNpm: white.bold(copy.labelNpm),
};
