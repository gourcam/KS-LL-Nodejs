var fs = require("fs");
var data = 'Hello Node.js'; 

var writerStream = fs.createWriteStream('output.txt');

writerStream.write(data,'UTF8');

writerStream.end(); 

writerStream.on('finish', function() {
    console.log("Yazma bitti.");
});
 
writerStream.on('error', function(err){
   console.log(err.stack);
});
 
console.log("Program Bitti");