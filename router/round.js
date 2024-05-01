const express = require("express");
const RoundController = require("../controllers/round");
const md_auth = require("../middlewares/authenticated");

const api = express.Router();


api.post("/round", [md_auth.asureAuth], RoundController.createRound);
api.get("/round/:idTournament", [md_auth.asureAuth], RoundController.getLastRoundByTournament)
//api.patch("/round/:id",  [md_auth.asureAuth], RoundController.updateMenu)
api.delete("/round/:idTournament",  [md_auth.asureAuth], RoundController.deleteLastRound)


module.exports = api;