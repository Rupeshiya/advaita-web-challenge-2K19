const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const bidInfoSchema = new Schema({
  bidderEmail:{
    type: String
  },
  bidderName:{
    type: String
  },
  bidPriceArray:[{
    
  }],
  bidProductId:{
    type: String
  }
});

module.exports = mongoose.model('BidderInfo',bidInfoSchema);