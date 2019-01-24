const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/plain'
    });
    res.write('salvatore write')
    res.end();
}).listen(3000);