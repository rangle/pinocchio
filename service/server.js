const express = require('express');
const app = express();
const fs = require('fs');
const images_path = '../sandbox/test_images/';

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/images', (req, res) => {
   readFiles( (items) =>  res.send(items) );
});

app.use(express.static(images_path));


function readFiles(next){
    fs.readdir(images_path, function(err, items) {
        console.log(items);
        for (var i=0; i<items.length; i++) {
            console.log(items[i]);
        }
        next(items);
    });
}

app.listen(3000, () => console.log('Example app listening on port 3000!'))