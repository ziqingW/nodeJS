var readline = require('readline');
var fs = require('fs');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Input file: ", function(inputfile) {
    fs.readFile(inputfile, function(error, data) {
        if (error) {
            console.error(error.message);
            return;
        }
        var contents = data.toString().toUpperCase();
        rl.question("Output file: ", function(outputfile){
            fs.writeFile(outputfile,  contents, function(error){
                if (error) {
                    console.log(error.message);
                    return;
                }
                console.log(`Wrote to file ${outputfile}`);
            });
        });
    });
});