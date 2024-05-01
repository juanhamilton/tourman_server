const Tournament = require('../models/tournament');


async function createTournament(req, res){
    const tournament = new Tournament(req.body)

    tournament.save((error, tournamentStored) => {
        if(error){
            res.status(400).send({msg: "Error al crear menu"});
        } else {
            res.status(200).send(tournamentStored);
        }
    });
}


module.exports = {
    createTournament,
};