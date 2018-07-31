const express = require('express');
const app = express();
const fs = require('fs');
const images_path = '../sandbox/test_images/';
let port=3001;


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/', (req, res) => res.send('Hi, I am Pinocchio!'));

app.get('/images', (req, res) => {
    res.set('Content-Type', 'application/json');
    readFiles( (items) =>  res.send(items) );
});

app.get('/runtestcases', (req, res) => {
    //here is where we will asyncronously run the test
    res.set('Content-Type', 'application/json');
    readFiles( (items) =>  res.send(items) );
});

app.use(express.static(images_path));


function readFiles(next){
    fs.readdir(images_path, function(err, items) {
        let testCases = [];
        for (var i=0; i<items.length; i++) {
            testCases.push( {id:items[i]} );
        }
        next(testCases);
    });
}

app.listen(port, () => console.log('Example app listening on port '+ port +'!'))