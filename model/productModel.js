const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

  Name: {
    type: String,
  },
  Status: {
    type: String,
  }
});

module.exports = mongoose.model("Product", productSchema);