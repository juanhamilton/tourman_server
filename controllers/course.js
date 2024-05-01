const Course = require("../models/course");
const image = require("../utils/image");


async function createCourse(req, res){
    const course = new Course(req.body)

    course.save((error, courseStored) =>{
        if(error){
            res.status(400),send({msg: "Error al Crear curso"})
        } else {
            res.status(201).send(courseStored);
        }
    })
}

async function getCourses(req, res) {
    const { page = 1, limit = 10} = req.query;
    const options = {
        page: parseInt(page),
        limit: parseInt(limit)
    }

    Course.paginate({}, options, (error, courses) => {
        if(error){
            res.status(400).send({msg: "Error al obtener Cursos"});
        } else {
            res.status(200).send(courses)
        }
    })    
}

function updateCourse(req, res) {
    const { id } = req.params;
    const courseData = req.body;

    if(req.files.miniature){
        const imagePath = image.getFilePath(req.files.miniature);
        courseData.miniature = imagePath;
    }

    Course.findByIdAndUpdate({_id: id}, courseData, (error) =>{
        if(error){
            res.status(400).send({msg: "Error al actualizar el curso"})
        } else {
            res.status(200).send({msg: "Actualizacion Correcta"})
        }
    })
}

function deleteCourse(req, res){
    const { id } = req.params
    Course.findByIdAndDelete({_id: id}, (error) =>{
        if(error){
            res.status(400).send({msg: "Error al Eliminar Curso"})
        } else {
            res.status(200).send({msg: "Curso Eliminado"})
        }
    })
}

module.exports = {
    createCourse,
    getCourses,
    updateCourse,
    deleteCourse
};