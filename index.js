#!/usr/bin/env node
const clear = require('clear');
const card = require('./src/card');
const portrait = require('./src/drawing');
const info = require('./src/info');
const ask = require('./src/options');

clear();

console.log(card);
console.log(portrait);
console.log(info);

ask();
