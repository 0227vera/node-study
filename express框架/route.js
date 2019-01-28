const express = require('express');

let app = express();
app.get('/', (req, res) => {
    res.send('这是主页')
})
app.get('/new', (req, res) => {
    res.send('这是新建页')
})
app.post('/apply', (req, res) => {
    res.send('这是申请页')
})
app.get('/work', (req, res) => {
    res.send('这是办理页')
})
app.get('/detail', (req, res) => {
    res.send('这是详情页')
})
app.get('/ab*cd', function (req, res) {
    res.send('正则匹配');
})
let server = app.listen(2222, () => {
    let host = server.address().address
    let port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})