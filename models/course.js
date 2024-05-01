const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const CourseSchema = mongoose.Schema({
    Grade: String,
    Level: String,
    Letter: String,
    Year: Number,
    matters:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Matter",
        unique: true
    }]
})

CourseSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Course", CourseSchema);