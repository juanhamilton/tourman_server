const Tournament = require('../models/tournament');


async function createTournament(req, res){
    const tournament = new Tournament(req.body)

    const random = Math.random().toString(36).substring(2,12)
    tournament.Code = random.toUpperCase()  

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