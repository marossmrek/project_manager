var express = require('express');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var cors = require('cors');

//app inicializations
var app = express();

//app middlewares
app.use(cors({origin: 'http://localhost:3000', credentials: true}));
app.use(expressValidator());
app.use(bodyParser.json());

//api routing
var project = require('./routes/project');
app.use('/project', project);

//start server
app.listen(5000, () => {
    console.log("I listen on port 5000");
});