const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);

describe('Login API', () => {
  it('should return success for valid credentials', (done) => {
    chai.request(server)
      .post('/api/login')
      .send({ username: 'usuario', password: '1234' })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('success').eql(true);
        done();
      });
  });

  it('should return error for invalid credentials', (done) => {
    chai.request(server)
      .post('/api/login')
      .send({ username: 'wrongUser', password: 'wrongPass' })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('success').eql(false);
        done();
      });
  });
});

describe('Payment API', () => {
  it('should process valid payment', (done) => {
    chai.request(server)
      .post('/api/payment')
      .send({ amount: 100, description: 'Test Payment' })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('success').eql(true);
        done();
      });
  });

  it('should return error for invalid payment amount', (done) => {
    chai.request(server)
      .post('/api/payment')
      .send({ amount: -50, description: 'Invalid Payment' })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('success').eql(false);
        done();
      });
  });
});
