const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortId = require('shortid');

const MediaItemSchema = Schema({
  date: {
    type: Date,
    default: Date.now()
  },
  type: {
    type: String,
    default: 'general'
  },
  title: {
    type: String,
    required: true
  },
  vid: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, { collection: 'mediaitems' });


class MediaItem {

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

MediaItemSchema.loadClass(MediaItem);

module.exports = mongoose.model('mediaitem', MediaItemSchema);