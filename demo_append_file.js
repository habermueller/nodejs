var fs = require('fs');

fs.appendFile('./text/MyTestAppendFile_File.txt', 'Hello content \n', 
        // this is the callback Function after appendFile is performed
        function (err) {
            if (err) {
                throw err ;     
            }
            console.log("File saved");
    
        }
)