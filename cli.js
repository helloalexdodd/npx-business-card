#!/usr/bin/env node
'use strict';
const chalk = require('chalk');
const { createPromptModule } = require('inquirer');
const clear = require('clear');
const card = require('./card');
const options = require('./options');
const portrait = require('./drawing');

clear();

const prompt = createPromptModule();

console.log(card);
console.log(portrait);

const tip = [
  `Tip: You can ${chalk.cyanBright.bold(
    'cmd/ctrl + click'
  )} on the links above or select an option from below:`,
  '',
].join('\n');

console.log(tip);

prompt(options).then((answer) => answer.action());
