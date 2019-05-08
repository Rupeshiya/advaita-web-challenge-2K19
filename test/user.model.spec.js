const mongoose = require('mongoose');
const chai = require('chai');
const expect = chai.expect;
const server = require('../app');
const should = chai.should();
const users = require('../models/user');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

// checking user schema
describe('CHECK USER SCHEMA',()=>{
  const newUser = new users({
    username: "hello",
    name: "gitty",
    email: 'twitter@twitter.com',
    password: 'wjejqgwrjqwg'
  });
  it('should be invalid if username or name is not a string',(done)=>{
    // newUser.validate((err)=>{
    //   expect(err.errors.username).to.exist;
    //   expect(err.errors.name).to.exist;
    //   expect(newUser.email).should.contain('@');
    //   done();
    // })
    newUser.save((err, user)=>{
      expect(user.username).to.be.a('string');
      expect(user.name).to.be.a('string');
      expect(user.email).to.contain('@');
      // expect(user.password).
      done();
    });
  });
});


