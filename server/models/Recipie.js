const mongoose = require('mongoose');

const recipieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This fild is required.'
    },
    description: {
        type: String,
        required: 'This fild is required.'
    },
    email: {
        type: String,
        required: 'This fild is required.'
    },
    ingredients: {
        type: Array,
        required: 'This fild is required.'
    },
    category: {
        type: String,
        enum:['Thai','American','Chinese','Mexican','Indian','Italian','Japanese','French','Greek'],
        required: 'This fild is required.'
    },
    image: {
        type: String,
        required: 'This fild is required.'
    },

});


recipieSchema.index({ name: 'text' , decription: 'text' });
module.exports = mongoose.model('recipie', recipieSchema);