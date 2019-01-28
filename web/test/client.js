// 等server层级先启动在启动client层级

const http = require('http');

// 用于请求的选项
let option = {
    host: 'localhost',
    port: '3030',
    path: '/index.html',
};

// 处理响应的回调函数

let callback = req => {
    let body = '';
    req.on('data', data => {
        body += data;
    })
    req.on('end', () => {
        console.log('------------>', '数据接收完成')
        console.log('body--------------->', body);
    })
}

// 向服务端发送请求
let req = http.request(option, callback);
req.end();