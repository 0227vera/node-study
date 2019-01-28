const http = require('http');
const querystring = require('querystring');
const util = require('util');


let postHTML =
    '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>'


http.createServer((req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk;
    })
    req.on('end', () => {
        body = querystring.parse(body);
        res.writeHead(200, {
            'Content-Type': 'text/plain;charset=utf8'
        });
        console.log('------------->', util.inspect(body, true, null, true));
        if (body.name && body.pws) {
            res.write(`输入的名字是========》${body.name}\n`)
            res.write(`输入的密码是========》${body.pws}\n`)
        } else {
            res.write(postHTML)
        };
        res.end()
    });
}).listen(1111);