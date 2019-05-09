const http = require('http')
const fs = require('fs')
const querystring = require('querystring')
const urlLib = require('url')
let user = {}


http.createServer((req, res) => {
    // 通过req先拿到相关数据
    // url 地址
    const url = urlLib.parse(req.url, true).pathname
    // GET 数据
    const GET = urlLib.parse(req.url, true).query
    // POST 数据
    let POST = {}
    let str = ''
    req.on('data', data => { str += data })
    req.on('end', () => {
        POST = querystring.parse(str)
    })
    console.log('-------->', GET, url)
    let file_name = './www' + url
    if (url === '/user') {
        // 接口类型的请求
        // 登陆
        if (GET.type === 'login') {
            if (!user[GET.user]) {
                res.write('{"data":false,"msg":"没有该用户"}')
            } else if (user[GET.user] !== GET.pass) {
                res.write('{"data":false,"msg":"密码错误"}')
            } else {
                res.write('{"data":true,"msg":"登陆成功"}')
            }
            // 注册
        } else if (GET.type === 'reg') {
            if (user[GET.user]) {
                res.write('{"data":false,"msg":"该用户名已被占用"}')
            } else {
                user[GET.user] = GET.pass
                res.write('{"data":true,"msg":"注册成功"}')
            }
        }
        res.end()
    } else {
        // 文件类型的请求
        fs.readFile(file_name, (err,data) => {
            if (err) {
                res.write('404')
            } else {
                res.write(data)
            }
            res.end()
        })

    }



}).listen(1111)