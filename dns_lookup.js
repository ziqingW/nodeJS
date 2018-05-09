var dns = require('dns');
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Domain name: ", function(answer){
    dns.lookup(answer, function(error, address, family){
        if (error) {
            console.log(error.message);
            return;
        }
        console.log(`IP Address: ${address}`);
    });
})