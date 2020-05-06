const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});


module.exports  = mongoose.model('post', postSchema) 
