const mongoose = require('mongoose');
const products = require('../models/product');
const chai = require('chai');
const server = require('../app');
const expect = chai.expect;
const should = chai.should;

// clearing db 
// describe('CLEARING DB',()=>{
//   beforeEach(()=>{
//     it('should clearn the db', (done) => {
//       products.remove({}).then(() => {
//           done();
//         })
//         .catch((err) => {
//           console.log('errorin clearing the db');
//         });
//     });
//   });
// });

// addinng product to db
describe('CHECK PRODUCT SCHEMA',()=>{
  it('should be invalid if product name is a number or base price is not a number',(done)=>{
    const newProduct = new products({
      productName: 1,
      productDescription: 'awesome angular',
      basePrice: "hello",
      validTill: 2,
      productOwnerEmail: "twitter@twitter.com"
    });
    newProduct.validate((err)=>{
      expect(err.errors.productName).to.exist;
      expect(err.errors.basePrice).to.exist;
      expect(newProduct.productOwnerEmail).should.contains('@');
      done();
    });
  });
});

