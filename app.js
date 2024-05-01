const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { API_VERSION } = require('./constants');

const app = express();

// Import Routings
const authRoutes = require('./router/auth');
const userRoutes = require('./router/user');
const menuRoutes = require('./router/menu');
const postRoutes = require('./router/post');
const tournamentRoutes = require('./router/tournament');
const typeRoutes = require('./router/type');
const formatRoutes = require('./router/format');

// Configure Bodyparse
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Configure Static Folder
app.use(express.static('uploads'));

// Configure Headers HTTP - CORS
app.use(cors());


// Configure Routings
app.use(`/api/${API_VERSION}`, authRoutes);
app.use(`/api/${API_VERSION}`, userRoutes);
app.use(`/api/${API_VERSION}`, menuRoutes);
app.use(`/api/${API_VERSION}`, postRoutes);
app.use(`/api/${API_VERSION}`, tournamentRoutes);
app.use(`/api/${API_VERSION}`, typeRoutes);
app.use(`/api/${API_VERSION}`, formatRoutes);




module.exports = app;