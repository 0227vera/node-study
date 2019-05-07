const http = require('http');

let server = http.createServer((req, res) => {
    // 解决书写到页面上面乱码的问题
    res.writeHead(200, { 'Content-type': 'text/html;charset=utf-8'});
    switch (req.url) {
        case '/1.html' :
            res.write('1.html的内容');
            break
        case '/2.html' : 
            res.write('2.html的内容');  
            break
        case '/3.html' : 
            res.write('3.html的内容');  
            break
        default:
            res.write('404页面')
            break
    }
    res.write('启动服务并且返回成功');
    res.end();
}).listen(1111)