#!/usr/bin/env node
var cheerio = require('cheerio');
var prompt = require('./prompt');
var scrape = require('./request')

var config = {
    url: "",
}

var crawl = function () {
    prompt('What website you want to scrape?\r\n', function (url) {
        config.url = url
        scrape(config).then(function() {
            process.exit();
        })
    })
}

var init = function () {
    console.log('\r\n----------NODE_CRAWLER----------')
    crawl()
}


init()

exports = module.exports = init