const mongoose = require('mongoose');

const RepresentativeSchema = mongoose.Schema({
    rut: String,
    fisrtName: String,
    lastName: String,
    Avatar: String
})

module.exports = mongoose.model("Representative", RepresentativeSchema);