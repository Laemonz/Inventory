const mongoose = require('mongoose')
const { Schema } = mongoose;

const Item = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    deleted: {
        type: Boolean
    },
    deletionComment: {
        type: String,
    }
})

module.exports = mongoose.model('Item', Item)