var http = require('http');

var uc = require('upper-case'); // upper case package has been installed, before run

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello World!"));
  res.end();
}).listen(8080);