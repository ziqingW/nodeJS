var readline = require('readline');
var fs = require('fs');
var request = require('request');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("URL: ", function(url) {
    request.get(url, function(error, response, html){
       if (error) {
           console.error(error.message);
           return;
       }
       rl.question("Save to file: ", function(filename){
           fs.writeFile(filename, html, function(error){
               if(error) {
                   console.log(error.message);
                   return;
               }
               console.log(`Saved to file ${filename}`);
           });
       });
    });
})