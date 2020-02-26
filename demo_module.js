var http = require("http");
var dt = require("./myfirstmodule");

http.createServer(function (req, resp){
    resp.writeHead(200, {'Content-Type': 'html'});
    resp.write('The current date and time are' + dt.MyDateTime());
    resp.end();
    }
).listen(8080);