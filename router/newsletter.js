const express = require("express");
const NewsletterConstroller = require("../controllers/newsletter");
const md_auth = require("../middlewares/authenticated");

const api = express.Router();

api.post("/newsletter", NewsletterConstroller.suscribeEmail);
api.get("/newsletter", [md_auth.asureAuth], NewsletterConstroller.getEmails)
api.delete("/newsletter/:id", [md_auth.asureAuth], NewsletterConstroller.deleteEmail);

module.exports = api;