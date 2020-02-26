/*
* Demo for Event Handling
* The read Strem Object Fires an open Event, when the File is opened
*/


var fs = require('fs');
var rs = fs.createReadStream('./text/demofile.txt');
rs.on('open', function () {
    console.log(rs.path)
    console.log('The file is open');
});