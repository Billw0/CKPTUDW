const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productCategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },

  description: {
    type: String,
    require: true
  }
});

const productCategory = mongoose.model(
  "productCategory",
  productCategorySchema
);
module.exports = productCategory;
