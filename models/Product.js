const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = require('mongodb').ObjectID;

const ProductSchema = Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    title: {
        type: String,
        required: true
    }
}, {collection: 'products'});


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
            return await this.findOne({_id: ObjectId(id)})
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

ProductSchema.loadClass(Product);

module.exports = mongoose.model('product', ProductSchema);