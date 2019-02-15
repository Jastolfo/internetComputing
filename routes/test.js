console.log('test/test.js executing');

const apiRoot = 'http://localhost:3000/';

const chai = require('chai');
const expect = chai.expect;
const request = require('superagent');
const status = require('http-status');

var express = require('express');
var app = express();


describe('hello API', function(){
	var server;

	before(function(done){
		app.get( '/', function(req,res){
			res.send('Hello, World!');
		});

		var port = 3000;
		server = app.listen(port,function(){
			console.log('Listening on port ' + port);
			done();
			
		});
	});
	
	after(function(){
		server.close();
	});
	
	it('GET request returns text "Hello, World!".', function(done){
		request.get(apiRoot).end(function(err, res){
			expect(err).to.not.be.an('error');
			expect(res.statusCode).to.equal(status.OK);
			expect(res.text).to.equal('Hello, World!');
			done();
		});
	});

	it('POST request is not allowed', function(done){
		request.post(apiRoot).end(function(err,res){
			expect(err).to.be.an('error');
			expect(res.statusCode).to.equal(status.METHOD_NOT_ALLOWED);
			done();
		});
	});
});
