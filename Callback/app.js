const fs = require('fs');


function readFileBlocking() {
    const data = fs.readFileSync('text.txt');
    console.log(data.toString());
    console.log('read end');
}

function readFileNonBlocking(){
    fs.readFile('text.txt', function (err, data) {
        if(err) {
            console.log(err);
            return;
        }

        console.log(data.toString());
    });

    console.log("read end");
}


readFileNonBlocking();