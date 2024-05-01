const express = require("express");
const formatController = require("../controllers/format");
const md_auth = require("../middlewares/authenticated");

const api = express.Router();


api.post("/format", [md_auth.asureAuth], formatController.createFormat);
api.get("/format", [md_auth.asureAuth], formatController.getFormat)
api.patch("/format/:id", [md_auth.asureAuth], formatController.updateFormat)
api.delete("/format/:id", [md_auth.asureAuth], formatController.deleteFormat)


module.exports = api;