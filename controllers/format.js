const Format = require("../models/format");

async function createFormat(req, res) {
    const format = new Format(req.body)

    format.save((error, formatStored) => {
        if (error) {
            res.status(400).send({ msg: "Error al crear Formato" });
        } else {
            res.status(200).send(formatStored);
        }
    });
}

async function getFormat(req, res) {
    let response = null;

    response = await Format.find();

    if (!response) {
        res.status(400).send({ msg: "No se ha encontrado ningun Formato" });
    } else {
        res.status(200).send(response);
    }
}

async function updateFormat(req, res) {
    const { id } = req.params;
    const formatData = req.body;

    Format.findByIdAndUpdate({ _id: id }, formatData, (error) => {
        if (error) {
            res.status(400).send({ msg: "Error al Actualizar Formato" });
        } else {
            res.status(200).send({ msg: "Formato actualizado Correctamente" });
        }
    });
}

async function deleteFormat(req, res) {
    const { id } = req.params;

    Format.findByIdAndDelete(id, (error) => {
        if (error) {
            res.status(400).send({ msg: "Error al eliminar el Formato" })
        } else {
            res.status(200).send({ msg: "Formato Eliminado" })
        }
    })

}

module.exports = {
    createFormat,
    getFormat,
    updateFormat,
    deleteFormat
};