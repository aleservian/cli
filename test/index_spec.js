const exec = require( 'child_process' ).exec;
const expect = require('chai').expect;
const cliTest = './index.js';

describe('Cli Test', ()=>{
  it('Should return version app',(done)=>{
    exec(`${cliTest} -V` ,(err, stdout, stderr)=> {
      const result = stdout.replace( '\n', '' );
      expect(result).to.eql('0.0.1');
      done(err);
    })
  })
  it('Command "sum 5 10" Should return 20',(done)=>{
    exec(`${cliTest} sum 5 15` ,(err, stdout, stderr)=> {
      const result = parseInt(stdout);
      expect(result).to.eql(20);
      done(err);
    })
  })
  it('Command "sum 5" without last argument Should return "error: missing required argument numberTwo"',(done)=>{
    exec(`${cliTest} sum 5` ,(err, stdout, stderr)=> {
      const result = stderr.replace(/\n/g, '').trim();
      expect(result).to.eql("error: missing required argument `numberTwo'");
      done();
    })
  })
})