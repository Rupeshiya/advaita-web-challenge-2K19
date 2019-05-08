const mongoose = require('mongoose');
const products = require('../models/product');
const chai = require('chai');
const server = require('../app');
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

// connect mongoose
describe('CONNECT DB', () => {
  before(()=>{
    it('should connect to mongo ', (done) => {
      mongoose.createConnection(`${process.env.mongoUri}`).then(()=>{
        console.log('mongo connected !');
      })
      .catch((err)=>{
        console.log(err);
      });
    });
  });
  after(()=>{
    mongoose.connection.close((err)=>{
      console.log('mongoose disconnected !');
    });
  });
});

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
      productName: "hello",
      productDescription: 'awesome angular',
      basePrice: 2000,
      validTill: 2,
      productOwnerEmail: "twitter@twitter.com"
    });
    newProduct.save((err, product)=>{
      console.log('product ', product);
      expect(product.productName).to.be.a('string');
      expect(product.productDescription).to.be.a('string');
      expect(product.productOwnerEmail).should.contain('@');
      expect(product.basePrice).to.be.a('number');
      expect(product.basePrice).to.be.a('number');
      expect(newProduct.productOwnerEmail).should.contain('@');
      // expect(product).to.be.an('object');
    });
      done();
  });
});

