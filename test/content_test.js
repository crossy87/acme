/* globals api, expect, describe, it, req, res */

// The application should be shipped with three tests:
//
// one that verifies that requests to valid URLs return a 200 HTTP status code

// one that verifies that requests to valid URLS return a body that contains the HTML generated from the relevant index.md markdown file

// one that verifies that requests to URLs that do not match content folders return a 404 HTTP status code

require('./spec_helper');

describe('content test', () => {

  describe('GET /content/about-page', () => {
    it('should return a 200 response', done => {
      api
        .get('/content/about-page')
        .set('Accept', 'application/json')
        .expect(200, done);
    });
  });
  describe('GET /content/valves', () => {
    it('should return a 200 response', done => {
      api
        .get('/content/valves')
        .set('Accept', 'application/json')
        .expect(200, done);
    });
  });

  describe('GET /content/jobs', () => {
    it('should return a 200 response', done => {
      api
        .get('/content/jobs')
        .set('Accept', 'application/json')
        .expect(200, done);
    });
  });

});

describe('md file type', () => {

  it('should respond with correct content', done => {
    api
      .get('/content/about-page')
      .set('Accept', 'application/json')
      .end((err, res) => {
        res.text.should.match(/About/g);
        done();
      });
  });

  it('should respond with correct content', done => {
    api
      .get('/content/valves')
      .set('Accept', 'application/json')
      .end((err, res) => {
        res.text.should.match(/Valves/g);
        done();
      });
  });

  it('should respond with correct content', done => {
    api
      .get('/content/jobs')
      .set('Accept', 'application/json')
      .end((err, res) => {
        res.text.should.match(/Jobs/g);
        done();
      });
  });


});

describe('error 404', () => {
  it('wrong url', function(done) {
    api
      .get('/random')
      .expect(404)
      .end(function(err,res){
        res.status.should.equal(404);
        done();
      });
  });
});
