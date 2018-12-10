const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortId = require('shortid');

const ProductSchema = Schema({
  date: {
    type: Date,
    default: Date.now()
  },
  title: {
    type: String,
    required: true
  }
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  id: false,
  collection: 'products' 
});


class Product {

  static async getItems() {
    try {
      return await this.find()
        .exec();
    } catch (err) {
      return err;
    }
  }

  static async getItem(id) {
    try {
      return await this.findOne({ _id: id })
        .exec();
    } catch (err) {
      return err;
    }
  }

  static async createItem(data) {
    try {
      return await this.create(data);
    } catch (err) {
      return err;
    }
  }
}

ProductSchema.loadClass(Product);

module.exports = mongoose.model('product', ProductSchema);