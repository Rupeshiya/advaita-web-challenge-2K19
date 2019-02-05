const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productName:{
    type: String,
    required: true
  },
  productDescription:{
    type: String,
    required: true
  },
  basePrice:{
    type: Number,
    default: 0
  },
  validTill:{
    type: Date,
    default: Date.now()
  },
  bidderEmail:{
    type: String
  },
  bidderName:{
    type: String
  },
  bidPrice:{
    type:  Number,
    default: 0
  }
});

module.exports = mongoose.model('Products',productSchema);