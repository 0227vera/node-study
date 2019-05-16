const http = require('http')
const urlLib = require('url')
const qureystring = require('querystring')
http.createServer((req,res) => {
    let url = urlLib.parse(req.url, true).pathname;
    let GET = urlLib.parse(req.url, true).query;
    let POST= {}
    let str = ''
    req.on('data',(data) => {
        str +=data
    })
    req.on('end', () => {
        POST = qureystring.parse(str)
        console.log(url, GET, POST)
    })
}).listen(3333)