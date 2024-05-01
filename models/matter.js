const mongoose = require('mongoose');

const MatterSchemma = mongoose.Schema({
    matter: {
        type: String,
        unique: true
    }
})

module.exports = mongoose.model("Matter", MatterSchemma);