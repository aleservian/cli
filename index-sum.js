#!/usr/bin/env node
const program = require('commander');

program
  .arguments('<numberOne> <numberTwo>')
  .action((numberOne, numberTwo) => {
    const sum = parseInt(numberOne) + parseInt(numberTwo);
    console.log(sum);
  })
  .parse(process.argv)