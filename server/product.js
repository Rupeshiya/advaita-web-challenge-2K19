const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Products = require('../models/product');
const Bidder = require('../models/bidderInfo');

// to add product /products/add
router.post('/add',(req,res)=>{
  const newProduct = {
    productName: req.body.productName,
    productDescription: req.body.description,
    basePrice: req.body.basePrice,
    validTill: req.body.validTill 
  };
  new Products(newProduct)
    .save()
    .then((product)=>{
      console.log('product saved !!',product);
      res.status(200).json({success: true, msg: 'product saved !!',product: product});
    })
    .catch((err)=>{
      console.log('error in the server !!',err);
      res.status(500).json({success: false, msg:'error in saving product !!',err: err});
    });
});

// to get all the products /products
router.get('/',(req,res)=>{
  Products.find({}).lean()
    .then((products)=>{
      res.status(200).json({success: true, msg:'Successfully retrieved the products !!',products: products });
    })
    .catch((err)=>{
      console.log('error in the server to retrieve products !!',err);
      res.status(500).json({success: false, msg:'error in retrieving products !!',err: err});
    });
});

// to get one product at a time /products/:id 
router.get('/:id',(req,res)=>{
  Products.findById(req.params.id)
    .then((product)=>{
      res.status(200).json({success: true, msg: 'one product retrieved !!',product: product});
    })
    .catch((err)=>{
      res.status(500).json({success: false, msg: 'error in the server !!',err});
    });
});

// for bid now submit /products/bidnow

router.post('/bidnow',(req,res)=>{
  Bidder.bidderEmail = req.body.bidderEmail;
  Bidder.bidderName = req.body.bidderName;
  Bidder.bidProductId = req.body.bidProductId;
  const price = req.body.bidPrice;
  Bidder.bidPriceArray.push(price); // error
  Bidder.save()
    .then((bidder)=>{
      res.status(200).json({success: true ,msg:'Bidder info saved !!',bidder: bidder});
    })
    .catch((err)=>{
      res.status(500).json({success: false , msg :'Error in bidder server !!',err: err});
    });
});

// // validity of auction
// router.get('/validitycheck/:id',(req,res)=>{
//   Products.findById()
// })




module.exports = router;