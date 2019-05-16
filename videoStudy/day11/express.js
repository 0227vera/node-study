const express = require('express')
const expressStatic = require('express-static')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const bodyparser = require('body-parser') // 只能解析数据类的post
const multer = require('multer') // 处理file文件类的数据
const fs = require('fs')
const path = require('path')
const guid = require('./guid') // 生成32-40的随机函数可能相同


let server = express()

let keys = []
// 生成keys的函数
for(let i = 0; i < 100000; i++)
  keys.push(guid())

// 获取cookie的中间键
server.use(cookieParser('@$@$#@$agsdfg23452a@hjalf&')) // cookie的唯一密钥
// 获取session的中间键
server.use(cookieSession({ name:'key_session_id', keys, maxAge:20*60*1000 }))
// 对post请求的中间键
server.use(bodyparser.urlencoded({ extended:false})) // 只能处理urluncoded数据
server.use(multer({dest:'./www/upload'}).any()) // 处理file文件类的数据

server.use('/test',(req,res) => {
  console.log('---------->', req.query, req.body, req.cookies, req.session)
})
server.use('/file', (req,res) => {
  console.log('file--->', req.files) // 不知道为什么十分的慢
  req.files.forEach(item => {
    fs.rename(item.path, item.path+path.parse(item.originalname).ext, (err) => {
      if(err) {
        res.send({success:true,data:`${item.originalname}失败`})
      } else {
        res.send({success:true,data:'上传成功'})
      }
    })
  })
})

server.listen(1111)
// 访问静态文件的中间键
server.use(expressStatic('./www'))