// server.js
// =========
var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.status(200).send('ok');
});
var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at port %s', port);
});
module.exports = server;

// -------------------------

// spec.js
var request = require('supertest');
require = require('really-need');
describe('loading express', function () {
  var server;
 /* 
 beforeEach(function () {
    delete require.cache[require.resolve('./server')];
    server = require('./server');
  });
  */
  beforeEach(function () {
    server = require('./server', { bustCache: true });
  });
  afterEach(function (done) {
    server.close(done);
  });
  it('responds to /', function testSlash(done) {
    request(server)
      .get('/')
      .expect(200, done);
  });
  it('404 everything else', function testPath(done) {
    console.log('test 404')
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});
