// contactModel.js
var mongoose = require('mongoose');

// Setup schema
var messageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        default:'Ahmet'
    },
    message: {
        type: String,
        required: true
    },
   
    location:{
        type : "String",
    coordinates : [Number]

    }

});
// Export Contact model
var message = module.exports = mongoose.model('message', messageSchema);
module.exports.get = function (callback, limit) {
    Message.find(callback).limit(limit);
}