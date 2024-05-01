const express = require("express");
const m = require("connect-multiparty");
const TeacherController = require("../controllers/teacher");
const md_auth = require("../middlewares/authenticated");

const md_upload = m({ uploadDir: "./uploads/avatar"});
const api = express.Router();


api.post("/teacher", [md_auth.asureAuth, md_upload],TeacherController.createTeacher);
api.get("/teacher", [md_auth.asureAuth],TeacherController.getTeacher);
api.patch("/teacher/:id", [md_auth.asureAuth, md_upload],TeacherController.updateTeacher);
api.delete("/teacher/:id", [md_auth.asureAuth],TeacherController.deleteTeacher);
api.post("/teacher/:id", [md_auth.asureAuth],TeacherController.addMatter);



module.exports = api;