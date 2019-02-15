const chai = require('chai');
const expect = chai.expect;
const request = require ('superagent');
const status = require ('http-status');

describe ('hello API', function(){
  /* Note that the function passed to 'it' has parameter 'done' */
  it ('GET request returns text "Hello, World!".', function(done){
    /*An asynchrous call is made */
    request.get(apiRoot)
      .end(function(err,res){
        expect(err).to.not.be.an('error');
        expect(res.statusCode).to.equal(status.OK);
        expect(res.text).to.equal('Hello, World!');
        done();
    });
  });
  it('POST request is not allowed', function(done){
    request.get(apiRoot)
      .end(function(err, res){
        expect(err).to.be.an('error');
        expect(res.statusCode).to.equal(status.METHOD_NOT-ALLOWED);
        done();
      });
  });
})
