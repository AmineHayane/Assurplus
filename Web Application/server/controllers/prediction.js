const pythonShell = require('python-shell');
const pWaitFor = require('p-wait-for');

module.exports = {
    predict : ((req, res) => {
        console.log('Controller - imgName', req.body.imgName);
        let imgName = req.body.imgName;

        var myscript = new pythonShell('Prediction.py');
        var myresponse = '';
        var array = [];
        array.push(imgName);
        //Providing data from Node.js to Python
        myscript.send(JSON.stringify(array));

        myscript.on('message', function (message) {
          // received a message sent from the Python script (a simple "print" statement)
          console.log(message);
          myresponse = message;
        });

        pWaitFor(() => (myresponse != '')).then(() => {
            console.log('Controller - pythonResponse', myresponse);
            res.send({prediction : myresponse});
        });

        // End the input stream and allow the process to exit
        myscript.end(function () {
            console.log('finished');
        });

    })
};