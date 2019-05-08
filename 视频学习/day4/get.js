const http = require('http')
http.createServer((req, res) => {
    console.log(req.url)
    if (req.url.indexOf('?')) {
        let url = req.url.split('?')[0]
        let GET = {}
        req.url.split('?')[1].split('&').forEach(item => {
            GET[item.split('=')[0]] = item.split('=')[1]
        })
        console.log(url, GET)
    }
}).listen(2222)