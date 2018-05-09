var readline = require('readline');
var fs = require('fs');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("filename: ", function(answer){
    fs.readFile(answer, function(error, data) {
        if (error) {
            console.error(error.message);
            return;
        }
        console.log(data.toString().toUpperCase());
    });
})