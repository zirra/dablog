const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = Schema({
  title : {
      type: String,
      default: null,
      required: true,
      unique: true
  },
  created: {
      type: Date,
      default: Date.now(),
      required: true
  },
  lastUpdated: {
    type: Date,
    default: Date.now(),
    required: true
  },
  content: {
      type: String,
      default: null
  },
  author: {
      type: String,
      default: 'Avery Woodbridge'
  }
}, {collection: 'blogs'});


class Blog {
    static async load() {
        return 'it is data my friend'
    }

    static async post(data) {
        try {
            return await this.create(data);
        } catch (err) {
            return err;
        }
    }
}

BlogSchema.loadClass(Blog);

module.exports = mongoose.model('blog', BlogSchema);