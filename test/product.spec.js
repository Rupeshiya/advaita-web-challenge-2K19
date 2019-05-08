const mongoose = require('mongoose');
const chai = require('chai');
const server = require('../app');
const products = require('../models/product');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const should = chai.should();

// clear the db
describe('clear db',()=>{
  beforeEach((done)=>{
  it('should clear the db', () => {
    products.remove({}).then(() => {
        done();
      })
      .catch((err) => {
        console.log('error in clearing db');
      });
    });
  });
});
// check if models exists or not 
// describe('CHECK EXISTENCE',()=>{
//   it('should check the existence of product.js in server folder',(done)=>{
    
//   })
// })

// add product
describe('ADD PRODUCT',()=>{
  it('should add the product to db',(done)=>{
    const newProduct = new products({
      productName: "angular",
      productDescription: "awesome angular",
      basePrice: 2000,
      validTill: 2,
      productOwnerEmail:"twitter@twitter.com" 
    });
    chai.request(server)
    .post('/products/add')
    .send(newProduct)
    .end((err, res)=>{
      res.status.should.equal(201);
      res.body.should.include.keys({
        success: true,
        msg: 'product saved !!'
      })
        done();
    });
  });
});

// get product by id 
describe('GET ALL PRODUCTS',()=>{
  it('should get all the products ',(done)=>{
    chai.request(server)
    .get('/products')
    .end((err, res)=>{
      res.status.should.equal(200);
      res.body.should.include.keys({
        success: true,
        msg: 'Successfully retrieved the products !!'
      });
    });
    done();
  });
});

// get product by id 
describe('GET PRODUCT BY ID',()=>{
  it('should include one product',(done)=>{
    chai.request(server)
    .post('/products/5cd28614d218b10f336de16b') // looking for a particular product
    .end((err,res)=>{
      res.status.should.equal(200);
      res.body.should.include.keys({
        success: true,
        msg: 'one product retrieved !!'
      });
    });
      done();
  });
});

// delete product 
describe('DELETE PRODUCT',()=>{
  it('should delete the product from db',(done)=>{
    chai.request(server)
    .delete('/products/5c593efe9240662ccc7bbc3e') // deleting a particular product
    .end((err, res)=>{
      res.status.should.equal(200);
      res.body.should.include.keys({
        success: true,
        msg: 'Successfully deleted the product !!'
      });
    });
      done();
  });
});



