const mongoose = require('mongoose');
const chai = require('chai');
const expect = chai.expect;
const server = require('../app');
const should = chai.should;
const users = require('../models/user');

// checking user schema
describe('CHECK USER SCHEMA',()=>{
  const newUser = new user({
    username: 123,
    name: 12343,
    email: 'twitter@twitter.com',
    password: 'wjejqgwrjqwg'
  });
  it('should be invalid if username or name is not a string',(done)=>{
    newUser.validate((err)=>{
      expect(err.errors.username).to.exist;
      expect(err.errors.name).to.exist;
      expect(newUser.email).should.contain('@');
      done();
    });
  });
});


