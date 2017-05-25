#!/usr/bin/env node
var program = require('commander')
var colors = require('colors');
var prompt = require('./prompt')
var scrape = require('./scrape')

program
    .arguments('<target_site>')
    .version('0.0.1')
    .option('-t, --target <target>', 'Your target site/domain')
    .parse(process.argv)

var config = {
    url: program.target,
    title: '\r\n----------CRAWL-CLI----------'
}


var crawlInit = function () {
    config.url ?
        scrape(config).then(function () {
            process.exit()
        })
    :
    prompt('What website you want to scrape?\r\n', function (url) {
        config.url = url
        scrape(config).then(function () {
            process.exit()
        })
    })
}

var crawl = function () {
    console.log(config.title.green)
    crawlInit()
}


crawl()

exports = module.exports = crawl