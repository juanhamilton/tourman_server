const Tournament = require('../models/tournament');
const Format = require('../models/format');
const Type = require('../models/type');


async function createTournament(req, res) {
    const tournament = new Tournament({...req.body, active: true})

    const random = Math.random().toString(36).substring(2, 12)
    tournament.code = random.toUpperCase()

    tournament.save((error, tournamentStored) => {
        if (error) {
            console.log(error);
            res.status(400).send({ msg: "Error al crear Torneo" });
        } else {
            res.status(200).send(tournamentStored);
        }
    });
}

async function getTournament(req, res) {
    const { page = 1, limit = 10 } = req.query;
    const options = {
        page: parseInt(page),
        limit: parseInt(limit)
    }

    Tournament.paginate({}, options, (error, Tournament) => {
        if (error) {
            res.status(400).send({ msg: "Error al obtener Torneos" });
        } else {
            res.status(200).send(Tournament)
        }
    })
}

async function getTournamentByCode(req, res) {
    const { code } = req.params

    const response = await Tournament.findOne({ code: code })

    if (!response) {
        res.status(400).send({ msg: "No se ha encontrado ningun Torneo" });
    } else {
        res.status(200).send(response);
    }
}

function updateTournament(req, res) {
    const { id } = req.params;
    const tournamentData = req.body;

    Tournament.findByIdAndUpdate({_id: id}, tournamentData, (error) =>{
        if(error){
            res.status(400).send({msg: "Error al actualizar el Torneo"})
        } else {
            res.status(200).send({msg: "Actualizacion Correcta del Torneo"})
        }
    })
}

function deleteTournament(req, res){
    const { id } = req.params
    Tournament.findByIdAndDelete({_id: id}, (error) =>{
        if(error){
            res.status(400).send({msg: "Error al Eliminar Torneo"})
        } else {
            res.status(200).send({msg: "Torneo Eliminado"})
        }
    })
}

async function addFormat(req, res) {
    const { id } = req.params
    const { idFormat } = req.body;
    const tournament = await Tournament.findById(id);
    const format = await Format.findById(idFormat);

    tournament.formats.push(format)

    tournament.save((error, tournamentStored) => {
        if (error) {
            res.status(400).send({ msg: "Error al agregar Formato" });
        } else {
            res.status(201).send(tournamentStored);
        }
    })
}

async function addType(req, res) {
    const { id } = req.params
    const { idType } = req.body;
    const tournament = await Tournament.findById(id);
    const type = await Type.findById(idType);

    tournament.typeTournaments.push(type)

    tournament.save((error, tournamentStored) => {
        if (error) {
            res.status(400).send({ msg: "Error al agregar Tipo" });
        } else {
            res.status(201).send(tournamentStored);
        }
    })
}

module.exports = {
    createTournament,
    getTournament,
    getTournamentByCode,
    updateTournament,
    deleteTournament,
    addFormat,
    addType
};