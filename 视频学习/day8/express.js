const express = require('express')
const expressStatic = require('express-static')
const bodyParser = require('body-parser')

let userObj = {}
let server = express()

server.use(bodyParser.urlencoded({
  limit:2*1024*1024, // 限制再2M
  extended:false // 扩展
})) // 中间键body-parser 的使用

server.get('/login', (req, res) => {
  let GET = req.query
  if (!userObj[GET.user]) {
    res.send({success:false,msg:'不存在该用户'})
  } else if (userObj[GET.user] !== GET.pass) {
    res.send({success:false,msg:'密码错误'})
  } else {
    res.send({success:true,msg:'登陆成功'})
  }
})

server.post('/reg', (req, res) => {
  let POST = req.body
  if(userObj[POST.user]){
    res.send({success:false,msg:'该用户名已存在'})
  }else{
    userObj[POST.user] = POST.pass
    res.send({success:true,msg:'注册成功'})
  }
  res.end()
})

server.listen(1111)

server.use(expressStatic('./www')) // 中间键的使用,请求静态文件