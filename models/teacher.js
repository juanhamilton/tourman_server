const mongoose = require('mongoose');

const TeacherSchema = mongoose.Schema ({
    rut: {
        type: String,
        unique: true
    },
    firstname: String,
    lastname: String,
    avatar: String,
    matters:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Matter",
        unique: true
    }]
})

module.exports = mongoose.model("Teacher", TeacherSchema);