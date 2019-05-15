const express = require('express') // 非侵入式的
const expressStatic = require('express-static') // 中间键
let server = express()

// 当请求是根目录的时候
// server.use('/', (req,res) => {
//   // res.send('首页') // 功能和write差不多，但是比write强大添加了一些数据形式
//   // res.end()
// })

let users = {
  'xuanliao':123456,
  'liaoxuan': 654321
}

server.get('/login', (req,res) => {
  let user = req.query.user // 原声上面req上面是没有query的方法的
  let pass = req.query.pass
  if (!users[user]) {
    res.send({success:false,msg:'没有此用户'})
  } else if (users[user] != pass) {
    res.send({success:false,msg:'密码错误'})
  } else {
    res.send({success:true,msg:'成功'})
  }
  res.end()
})

server.listen(1111)
// 可以理解为请求静态文件
server.use(expressStatic('./www'))

// 3钟接收用户的方法
// get
// post
// use


// express框架
// 依赖中间键
// 接收请求 get post use
// 非破坏式的
// static用法