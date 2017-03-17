var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./server/database/database.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Controllers
var userController = require('./server/controllers/user-controller');

//Routes
app.post('/api/user/create', userController.createUser);


db.sync().then(function(){
    app.listen(3000, function(){
        console.log("Listening to port " + 3000);
    })
})