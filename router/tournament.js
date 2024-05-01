const express = require("express");
const TournamentController = require("../controllers/tournament");
const md_auth = require("../middlewares/authenticated");

const api = express.Router();


api.post("/tournament", [md_auth.asureAuth], TournamentController.createTournament);
// api.get("/tournament", [md_auth.asureAuth], MenuController.getMenu)
// api.patch("/tournament/:id",  [md_auth.asureAuth], TournamentController.updateMenu)
// api.delete("/tournament/:id",  [md_auth.asureAuth], TournamentController.deleteMenu)


module.exports = api;