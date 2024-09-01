const mongoose = require('mongoose');

const exerciseSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'name cannot be blank!'],
    },
    muscle: {
        type: [String],
        required: [true, 'muscle group cannot be blank!'],
    },
    type: {
        type: String,
    },
    equipment: {
        type: String,
    },
    difficulty: {
        type: String,
    },
    instructions: {
        type: String,
    },
    rep: {
        type: String,
        required: [true, 'rep cannot be blank!'],
        enum: {
            values: ['time', 'count'],
            message: 'Invalid value'
        }
    }
})

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;