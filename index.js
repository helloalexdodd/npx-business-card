#!/usr/bin/env node
const clear = require('clear');
const card = require('./src/card');
const draw = require('./src/drawing');
const info = require('./src/info');
const ask = require('./src/options');

clear();

const render = async () => {
  console.log(card);
  await draw();
  console.log(info);
  ask();
};

render();
