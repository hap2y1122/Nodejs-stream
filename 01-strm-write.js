var fs = require('fs');

/* create & write stream */
var write_stream = fs.createWriteStream("./test.txt");

write_stream.on("finish",function () {
    console.log("File Created successfully!");
    write_stream.write("January \n");
    write_stream.write("February \n");
    write_stream.write("March \n");
    write_stream.write("April ");
});

console.log("Success!!")