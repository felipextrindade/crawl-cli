#!/usr/bin/env node
var program = require('commander')
var colors = require('colors');
var prompt = require('./prompt')
var scrape = require('./scrape')

program
    .arguments('<target_site>')
    .version('0.0.1')
    .option('-t, --target <target>', 'Your target site/domain')
    .option('-i, --info', 'Retrieve page info')
    .parse(process.argv)

var config = {
    url: program.target,
    retrieveInfo: program.info,
    title: '\r\n----------CRAWL-CLI----------'
}

var clearConfig = function () {
    config = {
        url: '',
        retrieveInfo: '',
        title: ''
    }
}

var onError = function (error) {
    clearConfig()
    console.log("\r\nERROR:" + error)
    prompt('\r\nWant to run Crawl-CLI again?(y/n)', function (again) {
        if (again === 'y' || again === 'Y') {
            crawl()
        }
        else
            process.exit()
    })
}


var crawlInit = function () {
    config.url ?
        scrape(config).then(function () {
            process.exit()
        }).catch(function (error) {
            onError(error)
        })
        :
        prompt('What website you want to scrape?\r\n', function (url) {
            config.url = url
            scrape(config).then(function () {
                process.exit()
            }).catch(function (error) {
                onError(error)
            })
        })
}

var crawl = function () {
    console.log(config.title.green)
    crawlInit()
}


crawl()

exports = module.exports = crawl