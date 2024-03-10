const mongoose = require("mongoose")

const userOrderSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true
    },
    mobile: {
        type: String,
        required: true
      },
      houseNo: {
        type:String,
        required: true
      },
      local: {
        type:String,
        required: true
      },
      city: {
        type:String,
        required: true
      }
  });

const userOrder = mongoose.model('userOrder', userOrderSchema);

module.exports = userOrder;