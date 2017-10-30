#!/usr/bin/env node
const program = require('commander');

program.version('0.0.1');

program
  .command("sum <numberOne> <numberTwo>")
  .description("sum numbers")
  .action((numberOne, numberTwo) => {
    const sum = parseInt(numberOne) + parseInt(numberTwo);
    console.log(sum);
  })
program.parse(process.argv);
  // .command("sum <numberOne> <numberTwo>","sum numbers").alias("s")
  // .parse(process.argv);