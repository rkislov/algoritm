const mongoose = require('mongoose')

const Statistic = mongoose.model('Statistic',{
    counter_id: {
        type: String,
        trim: true,
        required:true
    },
    gvs: {
        type: Number,
        default: 0
    },
    hvs: {
        type: Number,
        default: 0
    },
    el1: {
        type: Number,
        default: 0
    },
    el2: {
        type: Number,
        default: 0
    },
    el3: {
        type: Number,
        default: 0
    },
    gk: {
        type: Number,
        default: 0
    },
    volt: {
        type: Number,
        default: 0
    },
    amper: {
        type: Number,
        default: 0
    },
    tm: {
        type: String,
        default: 0
    },
    timestamp: {
        type: Date,
        default: Date.now,
        required: true
    },
})

module.exports = Statistic