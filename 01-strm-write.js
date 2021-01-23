var fs = require('fs');

/* create & write stream */
var write_stream = fs.createWriteStream("./test.txt");

/* if file is created */
write_stream.on("finish",function () {
    console.log("File Created successfully!");
});

/* write sth to file */
write_stream.write("January\n");
write_stream.write("February\n");
write_stream.write("March\n");
write_stream.write("April");

/* close the stream */
write_stream.end();