var fs = require('fs');

/* create read stream */
var read_stream = fs.createReadStream("./README.md");

/* pausing read stream */
read_stream.pause();
console.log("....Read Stream Paused....3..2..1...");

/* resuming read stream */
setTimeout(() => {
    console.log("....Resuming Read Stream....");
    read_stream.resume();
}, 3000);

/* show the data chunk by chunk */
read_stream.on("data",function (chunk) {
    console.log(chunk.toString());
});

/* show the length of the chunk */
read_stream.on("data",function (chunk) {
    console.log(chunk.length);
});

/* execute if their is any error */
read_stream.on("error",function (err) {
    console.log(err.message);
});

/* if the read stream reaches end of the file */
read_stream.on("end",function(){
    console.log("***End of File***");
});