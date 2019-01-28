const http = require('http');
const url = require('url');
const util = require('util');

console.log('开始get请求')
http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    let params = url.parse(req.url, true).query;
    // params就是直接地址栏中之后的的文件给解析出来的结果形成一个对象
    res.write(`网站名：${params.name}\n`);
    res.write(`网站url${params.url}\n`);
    res.end(util.inspect(url.parse(req.url)));
    console.log('------------>', util.inspect(url.parse(req.url), true, null, true))
    console.log('接受数据完成')
}).listen(4444);