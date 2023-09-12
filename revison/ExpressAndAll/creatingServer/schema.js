const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true, 
    castOnSet: true,
  },
  age:{
       type:Number,
  }
});

module.exports = mongoose.model("usercollection", userSchema);

