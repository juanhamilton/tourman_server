const express = require("express");
const TypeController = require("../controllers/type");
const md_auth = require("../middlewares/authenticated");

const api = express.Router();


api.post("/type", [md_auth.asureAuth], TypeController.createType);
api.get("/type", [md_auth.asureAuth], TypeController.getType)
api.patch("/type/:id", [md_auth.asureAuth], TypeController.updateType)
api.delete("/type/:id", [md_auth.asureAuth], TypeController.deleteType)


module.exports = api;