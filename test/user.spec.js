const chai = require('chai');
const expect = chai.expect;
const users = require('../models/user');
const mongoose = require('mongoose');
const server = require('../app');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const should = chai.should();

// clean db
describe('Clean db',()=>{
  it('It should clear the schema',(done)=>{
    users.remove({}).then(()=>{
      done();
    })
    .catch((err)=>{
      console.log(err);
    });
  });
});

// add user
describe('Add user',()=>{
  it('It should add user to the db',(done)=>{
    const newuser = new users({
      username: 'rupeshiya',
      email: 'twitter@twitter.com',
      password: 'helloworld@123',
      name: 'hello'
    });
    chai.request(server)
    .post('/users/register')
    .send(newuser)
    .end((err, res)=>{
      res.status.should.equal(201);
      res.body.should.be.an('object');
      res.body.should.include.keys("success", "msg");
      res.body.should.contain({
        msg: 'User registered'
      });
        done();
    });
  });
});

//login user
describe('LOGIN USER',()=>{
  it('should login the user',(done)=>{
    const user = new users({
      username: 'helloworld',
      password: 'helloworld@123'
    });
    chai.request(server)
    .post('/users/login')
    .send(user)
    .end((err, res)=>{
      res.status.should.equal(200);
      res.body.should.include.keys(
        { "success": true}
      );
      done();
    });
  });
});


