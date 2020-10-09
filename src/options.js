const { createPromptModule } = require('inquirer');
const open = require('open');
const { yellow, blue } = require('chalk');
const { repo, website, email } = require('../lib/copy');

const prompt = createPromptModule();

let options;
let count = 0;

const ask = () => {
  prompt(options).then((answer) => answer.action());
  count += 1;
};

options = [
  {
    type: 'list',
    name: 'action',
    message: () =>
      count > 0
        ? 'What would you like to do next?'
        : 'What would you like to do?',
    choices: [
      {
        name: '📩  Send me an email?',
        loop: true,
        value: () => {
          open(`mailto:${email}`);
          ask();
        },
        short: `\n\n${yellow('  Send me an email!')} \n\n${blue(
          "Thanks for reaching out. I'm Looking forward to reading your email!",
        )}\n`,
      },
      {
        name: '🎨  Visit my portfolio?',
        loop: true,
        value: () => {
          open(website);
          ask();
        },
        short: `\n\n${yellow('  Visit my portfolio!')} \n\n${blue(
          "🤙🏻  Hey what's up?",
        )}\n`,
      },
      {
        name: '💅🏻  See how I did it?',
        loop: true,
        value: () => {
          open(repo);
          ask();
        },
        short: `\n\n${yellow('  See how I did it!')} \n\n${blue(
          '🚂  Here we go!',
        )}\n`,
      },
      {
        name: '👋🏻  Wave goodbye!',
        value: () => {},
        short: `\n\n${blue('👋🏻  Bye bye!')}\n`,
      },
    ],
  },
];

module.exports = ask;
