const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    console.log('--------->', pathname, req.url)
    fs.readFile(pathname.substr(1), (err, data) => {
        if (err) {
            res.writeHead(404, {
                'COntent-Type': 'text/html'
            })
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            res.write(data.toString())
        }
        res.end();

    });

}).listen(3030);

console.log('---------->','Server running at localhost:3030/')