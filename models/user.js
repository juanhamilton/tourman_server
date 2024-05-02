const mongoose = require('mongoose');

const UserSchema = mongoose.Schema ({
    firstname: String,
    lastname: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    avatar: String,
    role: String
})

module.exports = mongoose.model("User", UserSchema);