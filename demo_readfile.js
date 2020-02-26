/* 
    Demo for Reading a (HtML) File within nodejs and returnint it as a result

*/    

var http = require('http'); //Module for acting as http server
var fs = require('fs');     // Module necessary for file access

http.createServer(function (req, res) {

    fs.readFile('./html/demofile1.html', function(err, data) { // reads the file and passes the data to the function defined in second parameter
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    // if something went wrong return the error
    if (err != null) 
    {
      res.write(err.toString()); 
      res.end();
      return;
    }

    res.write(data); // Write content of the data into result
    res.end();
  }
  );
}).listen(8080);

