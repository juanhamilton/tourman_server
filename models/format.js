const mongoose = require('mongoose');

const FormatSchema = mongoose.Schema({
    format: String
})


module.exports = mongoose.model("Format", FormatSchema);