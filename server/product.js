const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/product');
const Products = require('../models/product');
const async = require('async');

// to add product /products/add
router.post('/add',(req,res)=>{
  const newProduct = {
    productName: req.body.productName,
    productDescription: req.body.description,
    basePrice: req.body.basePrice,
    validTill: Date.now() + (req.body.validTill * 3600000) 
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

//deleting the product
router.delete('/:id',(req,res)=>{
  Products.findByIdAndDelete(req.params.id)
    .then((product)=>{
      console.log('product deleted !!');
      res.status(200).json({success: true, msg:'Successfully deleted the product !!'});
    })
    .catch((err)=>{
      console.log('error in server !!',err);
    });
});

// for bid now submit /products/bidnow

router.post('/bidnow/:id',(req,res)=>{
  const bidPrice = req.body.bidPrice;
  Products.findByIdAndUpdate(req.params.id)
    .then((product)=>{
      const productName = product.productName;
      const basePrice = product.basePrice;
      console.log('bidder product is-',product);
      // logic to store max cost from bidder
      if(bidPrice > product.bidPrice){
        product.bidderEmail = req.body.bidderEmail,
        product.bidderName = req.body.bidderName,
        product.bidPrice = req.body.bidPrice
        product.save()
        .then((bidder)=>{
          res.status(200).json({success: true ,msg:'Bidder info saved !!',bidder: bidder});
        })
        .catch((err)=>{
          res.status(500).json({success: false , msg :'Error in bidder  !!',err: err});
        });
    } else {
      console.log(`more than ${product.bidPrice} will be accepted !!`);
      res.status(500).json({success: false, msg:`More than ${product.bidPrice} is required !!`});
    }
  })
  .catch((err)=>{
    res.status(500).json({success: false , msg :'Error in bidder server !!',err: err});
  })
});

// bid result
router.get('/bidresult/:id',(req,res)=>{
  Products.findById(req.params.id)
    .then((product)=>{
      console.log('bid product goes to -',product.bidderName);
      res.status(200).json({success: true, msg:'Bid product goes',bidWinPerson:product.bidderName})
    })
    .catch((err)=>{
      console.log('error in bidder server !!');
      res.status(500).json({success: false, msg:'error in the server!!',err: err});
    });
});


router.get('/validity/:id',(req,res)=>{
  const id = req.params.id;
  async.waterfall([
    function(done){
      Products.findById(req.params.id)
      .then((product)=>{
        console.log('product ',product);
        const productID = product._id
        done(productID);
      })
      .catch((err)=>{
        console.log('error',err);
      });
    },
    function(err,productID,done){
      // checking 
      Products.findOne({ _id: productID , validTill:{ $gt:Date.now() } },(err, product)=>{
        if(err){
            console.log('error in server finding the token !!',err);
            res.status(400).json({success: false, msg:'Server error in finding the validity !!'});
        } 
        if(!product){
            console.log('product not found !!');
            res.status(500).json({success: false, msg: 'unable to find the product !!'});
        } else {
          res.status(200).json({success:true, msg:'found the product with the validity ', validity: true});
        }
      });
    }
  ]); 
});




module.exports = router;