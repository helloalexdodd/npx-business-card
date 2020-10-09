#!/usr/bin/env node
const { createPromptModule } = require('inquirer');
const clear = require('clear');
const card = require('./src/card');
const portrait = require('./src/drawing');
const info = require('./src/info');
const options = require('./src/options');

const prompt = createPromptModule();

clear();

console.log(card);
console.log(portrait);
console.log(info);

prompt(options).then((answer) => answer.action());
