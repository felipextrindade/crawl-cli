var request = require('request');

var scrape = function (data) {
    return new Promise(function (resolve, reject) {
        request(data.url, function (error, response, html) {
            console.log('statusCode:', response && response.statusCode)
            console.log('The true functionality will be implemented soon!')
            resolve();
        })
    })
}

exports = module.exports = scrape