const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortId = require('shortid');

const BlogSchema = Schema({
  blogShort: {
    type: String,
    default: shortId.generate,
    unique: true,
    index: true
  },
  title: {
    type: String,
    default: null,
    required: true,
    unique: true
  },
  content: {
    type: String,
    default: null
  },
  author: {
    type: String,
    default: 'Avery Woodbridge'
  },
  tags: [{ tagShort: String }]
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  id: false,
   collection: 'blogs' 
  });

class Blog {

  static async getItem(id) {
    try {
      return await this.findOne({ _id: id })

    } catch (err) {
      return err;
    }
  }

  static async getItems() {
    try {
      return await this.find()

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

BlogSchema.loadClass(Blog);

module.exports = mongoose.model('blog', BlogSchema);