const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const pythonShell = require('python-shell');
const multer = require('multer');

// Set up the express app
const app = express();

// Use MiddleWare Cors
app.use(cors());

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/*app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,x-access-token');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});*/

// Require our routes into the application.
require('./server/routes')(app);
require('./server/routes/clientRoutes')(app);

/* Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));*/

// Array for images
var myarray = [];

// Uploading image
var storage = multer.diskStorage({
   destination : (req, file, cb) => {cb(null, './uploads/');},
    filename : (req, file, cb) => {
       var datetimestamp = Date.now();
       cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
    }
});

var upload = multer({
    storage:storage
}).single('file');

/** API path that will upload the files **/
    app.post('/upload', function(req, res) {
        upload(req,res,function(err){
            console.log(req.file);
            console.log('original name', req.file.originalname);
            console.log('new name', req.file.filename);
            console.log('path', req.file.path);
            myarray.push(req.file.filename);
            console.log('ARRAY', myarray);
            if(err){
                 res.json({error_code:1,err_desc:err});
                 return;
            }
             res.json({error_code:0,err_desc:null});
        });
    });

var myscript = new pythonShell('hello.py');

var options = {
    mode: 'text',
    args: ['my First Argument', 'My Second Argument', '--option=123']
};


//Providing data from Node.js to Python
myscript.send(JSON.stringify(['path to image 1', 'path to image 2']));


myscript.on('message', function (message) {
  // received a message sent from the Python script (a simple "print" statement)
    message = "Modified by NodeJS - " + message;
  console.log(message);
});

// End the input stream and allow the process to exit
myscript.end(function (err) {
    if (err){
        throw err;
    };

    console.log('finished');
});


module.exports = app;