const open = require('open');
const { repo, website, email } = require('../lib/copy');

module.exports = [
  {
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      {
        name: '📩  Send me an email?',
        value: () => {
          open(`mailto:${email}`);
          console.log(
            '\nThanks for reaching out. Looking forward to reading your email!\n',
          );
        },
      },
      {
        name: '🗂   Visit my portfolio',
        value: () => {
          open(website);
          console.log("👋🏻  Hey what's up?!\n");
        },
      },
      {
        name: '💅🏻  See how I did it!',
        value: () => {
          open(repo);
          console.log('👋🏻  Here we go!\n');
        },
      },
      {
        name: '👋🏻  Wave goodbye!',
        value: () => {
          console.log('👋🏻  Bye bye!\n');
        },
      },
    ],
  },
];
