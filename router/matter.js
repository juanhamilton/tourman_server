const express = require("express");
const MatterConstroller = require("../controllers/matter");
const md_auth = require("../middlewares/authenticated");

const api = express.Router();

api.post("/matter", [md_auth.asureAuth], MatterConstroller.createMatter);
api.get("/matter", [md_auth.asureAuth], MatterConstroller.getMatter);
api.delete("/matter/:id", [md_auth.asureAuth], MatterConstroller.deleteMatter);
api.patch("/matter/:id", [md_auth.asureAuth], MatterConstroller.updateMatter);


module.exports = api;