const Teacher = require("../models/teacher")
const Matter = require("../models/matter")
const image = require("../utils/image")

async function createTeacher(req, res){

    const teacher = new Teacher(req.body)

    if(req.files.avatar){
        const imagePath = image.getFilePath(req.files.avatar)
        teacher.avatar = imagePath
    }

    teacher.save((error, teacherStored) => {
        if(error){
            res.status(400).send({msg: "Error al crear el Profesor"});
        } else {
            res.status(201).send(teacherStored);
        }
    })
}

async function getTeacher(req, res){
    const response = await Teacher.find().sort({ order: "asc"});

    if(!response){
        res.status(400).send({msg: "No se ha encontrado ningun Profesor"});
    } else {
        res.status(200).send(response);
    }
}

async function updateTeacher(req, res){
    const { id } = req.params;
    const teacherData = req.body;


    if(req.files.avatar){
        const imagePath = image.getFilePath(req.files.avatar)
        teacherData.avatar = imagePath;
    }

    Teacher.findByIdAndUpdate({_id: id}, teacherData, (error) => {
        if(error){
            res.status(400).send({msg: "Error al actualizar el Profesor"})
        } else {
            res.status(200).send({msg: "Actualizacion Correcta"})
        }
    })
}

async function deleteTeacher(req, res) {
    const { id } = req.params;

    Teacher.findByIdAndDelete(id, (error) => {
        if(error){
            res.status(400).send({msg: "Error al eliminar el Profesor"})
        } else {
            res.status(200).send({msg: "Profesor Eliminado"})
        }
    })
}

async function addMatter(req, res){
    const { id } = req.params
    const { idMater } = req.body;
    const teacher = await Teacher.findById(id);
    const matter = await Matter.findById(idMater);

    teacher.matters.push(matter)
    
    teacher.save((error, teacherStored) => {
        if(error){
            res.status(400).send({msg: "Error al agregar materia"});
        } else {
            res.status(201).send(teacherStored);
        }
    })
}


module.exports = {
    createTeacher,
    getTeacher,
    updateTeacher,
    deleteTeacher,
    addMatter
}