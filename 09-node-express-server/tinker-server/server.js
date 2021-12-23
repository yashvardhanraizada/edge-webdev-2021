const express = require('express');
const app = express();

function startServer(){
    console.log("Server Started: localhost:8080");
}
function homePage(req, res){
    res.send("Hello " + req.query["name"] + " Your Age: " + req.query["age"]);
}

app.get('/home', homePage);

app.listen(8080, startServer);