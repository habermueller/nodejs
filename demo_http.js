var http = require('http');

//create a server object
http.createServer( function (req, resp) {

    resp.writeHead(200,'Content-Type' : 'text/html') // 200 as REturn Code and http Header as an Object
    
    resp.write('Hello World');
    resp.end();
    }
    ).listen(8080); //server object listens to port 8080