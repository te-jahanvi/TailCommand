const fs = require('fs');
const readLastLines = require('read-last-lines');
const express = require('express');
const bodyParser = require('body-parser');
const path= require('path');


const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/',(req,res) =>{
    try{
        res.sendFile(path.join(__dirname+'/index.html'));
    }
    catch(err){
        console.error(err.message);
    }
});

app.post('/', (req,res) =>{
    try{
        var n=10;
        var line=[];
        n= req.body.no;
        console.log(n);
        if(n == '')
        {
            n=10;
        }
        res.setHeader('Content-type','text/html')
        readLastLines.read('test.txt', n).then((lines) => res.send(lines));
    }
    catch(err){
        console.error(err.message);
    }
})

app.listen(port, () => console.log(`Listening on port ${port}!`));
