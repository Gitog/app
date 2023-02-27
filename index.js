/*
*Primary file for the API
*/

//Dependencies 
var http = require('http');
var url = require('url');

//The server should respond to all requesta with a string
var server = http.createServer(function(re, res){

    //Get the URL and parse it
    var parsedurl = url.parse(req.url, true);

    //Get the path

    //Send the response

    //Log the request path

    res.end("Hello World\n")
})

//Start the server, and have it listen  on port 3000
server. listen(3000, function(){
    console.log("The server is listening on port 3000")
})