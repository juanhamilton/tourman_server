const Matter = require('../models/matter');

async function createMatter(req, res){
    const matter = new Matter(req.body);
    
    matter.save((error, matterStored) =>{
        if(error){
            res.status(400).send({msg: "Error al crear la materia"});
        } else {
            res.status(201).send(matterStored);
        }
    })
}

async function getMatter(req, res){
    const response = await Matter.find().sort({ order: "asc"});

    if(!response){
        res.status(400).send({msg: "No se ha encontrado ningun Materia"});
    } else {
        res.status(200).send(response);
    }
}

async function deleteMatter(req, res){
    const { id } = req.params;

    Matter.findByIdAndDelete(id, (error)=>{
        if(error){
            res.status(400).send({msg: "Error al intentar eliminar Materia"});
        } else {
            res.status(200).send({msg: "Materia Eliminada"});
        }
    })
}

async function updateMatter(req, res){
    const { id } = req.params;
    const matterData = req.body;

    Matter.findByIdAndUpdate({ _id: id }, matterData, (error) =>{
        if(error){
            res.status(400).send({msg: "Error al Actualizar Materia"});
        } else {
            res.status(200).send({msg: "Materia actualizado Correctamente"});
        }
    });
}


module.exports = {
    createMatter,
    getMatter,
    deleteMatter,
    updateMatter
}