#!/usr/bin/env node
const program = require('commander');

program
  .action((numberOne, numberTwo) => {
    const sum = parseInt(numberOne) + parseInt(numberTwo);
    console.log(sum);
  })
  .parse(process.argv)