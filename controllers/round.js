const Round = require('../models/round');

async function createRound(req, res) {
    const round = new Round(req.body)

    const response = await Round.findOne({ idTournament: round.idTournament }, {}, { sort: { 'createdAt': -1 } })

    if (!response) {
        round.round = 1;
    } else {
        round.round = response.round + 1
    }

    round.save((error, roundStored) => {
        if (error) {
            res.status(400).send({ msg: "Error al crear round 2" });
        } else {
            res.status(200).send(roundStored);
        }
    });
}

async function getLastRoundByTournament(req, res) {
    const { idTournament } = req.params
    console.log(idTournament);
    const response = await Round.findOne({ idTournament: idTournament }, {}, { sort: { 'createdAt': -1 } })
    if (!response) {
        res.status(400).send({ msg: "No se ha encontrado ninguna Ronda" });
    } else {
        res.status(200).send(response);
    }
}

async function deleteLastRound(req, res) {
    const { idTournament } = req.params
    const response = await Round.findOne({ idTournament: idTournament }, {}, { sort: { 'createdAt': -1 } })
    Round.findByIdAndDelete({ _id: response._id }, (error) => {
        if (error) {
            res.status(400).send({ msg: "Error al Eliminar Ronda" })
        } else {
            res.status(200).send({ msg: `Ronda ${response.round} Eliminada` })
        }
    })
}

module.exports = {
    createRound,
    deleteLastRound,
    getLastRoundByTournament
};