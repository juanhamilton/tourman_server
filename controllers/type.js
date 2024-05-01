const Type = require("../models/type");

async function createType(req, res) {
    const type = new Type(req.body)

    type.save((error, typeStored) => {
        if (error) {
            res.status(400).send({ msg: "Error al crear Tipo" });
        } else {
            res.status(200).send(typeStored);
        }
    });
}

async function getType(req, res) {
    let response = null;

    response = await Type.find().sort({ order: "asc" });

    if (!response) {
        res.status(400).send({ msg: "No se ha encontrado ningun Tipo" });
    } else {
        res.status(200).send(response);
    }
}

async function updateType(req, res) {
    const { id } = req.params;
    const typeData = req.body;

    Type.findByIdAndUpdate({ _id: id }, typeData, (error) => {
        if (error) {
            res.status(400).send({ msg: "Error al Actualizar tIPO" });
        } else {
            res.status(200).send({ msg: "Tipo actualizado Correctamente" });
        }
    });
}

async function deleteType(req, res) {
    const { id } = req.params;

    Type.findByIdAndDelete(id, (error) => {
        if (error) {
            res.status(400).send({ msg: "Error al eliminar el tipo" })
        } else {
            res.status(200).send({ msg: "Tipo Eliminado" })
        }
    })

}

module.exports = {
    createType,
    getType,
    updateType,
    deleteType
};