import request from 'supertest';
import chai from 'chai';
import { app } from '../server';

var expect = chai.expect;

describe('Authentication Test', function() {
  var agent = request.agent(app);

  describe('Login', function() {
    it('returns a status code of 302 for redirect', function(done) {
      agent
        .post('/auth/login')
        .send({ username: 'tom', password: 'tom' })
        .end(function(err, res) {
          expect(res.statusCode).to.equal(302);
          expect(res.headers['set-cookie']).to.not.equal([]);
          expect(res.headers['set-cookie']).to.not.equal(undefined);
          done();
        });
    });

    it('get request to login returns a status code of 404', function(done) {
      agent
        .get('/auth/login')
        .end(function(err, res) {
          expect(res.statusCode).to.deep.equal(404);
          done();
        });
    });

    it('should respond to existing users with 409 status code', function(done) {
      agent
        .post('/auth/register')
        .send({ username: 'gret', password: 'kjejje' })
        .end(function(err, res) {
          expect(res.statusCode).to.equal(409);
          expect(res.text).to.equal('user exists');
          done();
        });
    });
  });
});
