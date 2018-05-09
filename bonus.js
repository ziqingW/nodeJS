var sharp = require('sharp');
var request = require('request');
var options = {
    url: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
    encoding: null
};
request(options, function(error, response, data) {
    if (error) {
        console.error(error.message);
        return;
    }
    sharp(data).resize(240, 240).toFile('logo.png'); 
});
