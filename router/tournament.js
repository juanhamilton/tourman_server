const express = require("express");
const TournamentController = require("../controllers/tournament");
const md_auth = require("../middlewares/authenticated");

const api = express.Router();


api.post("/tournament", [md_auth.asureAuth], TournamentController.createTournament);
api.post("/tournament/format/:id", [md_auth.asureAuth], TournamentController.addFormat);
api.post("/tournament/type/:id", [md_auth.asureAuth], TournamentController.addType);
api.post("/tournament/competitor/:code", [md_auth.asureAuth], TournamentController.addCompetitor);
api.get("/tournament", [md_auth.asureAuth], TournamentController.getTournament)
api.get("/tournament/code/:code", [md_auth.asureAuth], TournamentController.getTournamentByCode)
api.patch("/tournament/:id",  [md_auth.asureAuth], TournamentController.updateTournament)
api.delete("/tournament/:id",  [md_auth.asureAuth], TournamentController.deleteTournament)


module.exports = api;