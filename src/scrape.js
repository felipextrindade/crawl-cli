var request = require('request');

var scrape = function (data) {
    return new Promise(function (resolve, reject) {
        request(data.url, function (error, response, html) {
            error ? console.log(error) : 
            console.log('statusCode:', response && response.statusCode)
            for (header in response.headers) {
                console.log(header + ': ', header)
            }
            resolve()
        })
    })
}

exports = module.exports = scrape