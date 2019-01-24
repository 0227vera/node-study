// http起服务，解析地址的数据
const http = require('http');
const url = require('url');
let start = route => {
    http.createServer((req, res) => {
        console.log(req.url)
        let pathname = url.parse(req.url).pathname;
        route(pathname);
        // 在这个地方出过一次错误，一定要发送状态码，200，标识成功
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        })
        res.write("liaoxuan's test")
        res.end();

    }).listen(3333);
    console.log('Server has started at localhost:3333');
}
exports.start = start;