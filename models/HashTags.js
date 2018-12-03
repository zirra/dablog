const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortId = require('shortid');

const HashTagSchema = Schema({
   name : {
     type: String,
     default: null,
     required: true,
     unique: true, 
   },
   hashShort : {
    type: String,
    default: shortId.generate,
    unique: true,
    index: true
   }
}, {collection: 'hashTags'});


class HashTag {
    
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
            return await this.findOne({_id: id})
                .exec();
        } catch (err) {
            return err;
        }
    }

    static async post(data) {
        try {
            return await this.create(data);
        } catch (err) {
            return err;
        }
    }
}

HashTagSchema.loadClass(HashTag);

module.exports = mongoose.model('hashTag', HashTagSchema);