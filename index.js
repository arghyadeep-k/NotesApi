const express = require ("express");

const app = express();

app.get('/',function(req, res){
    console.log("Hello World");
    res.send('Hello World!');
});

app.listen(3000);


