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
  subTitle: {
    type: String,
    default: null,
    required: true,
    unique: true
  },
  category: {
    type: String,
    default: null,
    required: true,
    unique: true
  },
  snippet: {
    type: String,
    default: null
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

  static async getByCategories(id) {
    try {
      return await this.find({category: id})
      .exec()
    } catch (err) {
      return err;
    }
  }  
  
  static async getItem(id) {
    console.log(id)
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