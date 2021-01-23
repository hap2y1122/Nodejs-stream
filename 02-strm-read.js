var fs = require('fs');

var rstream = fs.createReadStream("./README.md");

/* write contents of a file on console */
rstream.pipe(process.stdout);
