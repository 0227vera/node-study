# 整合express+模板引擎
* 因为现在不会使用模板引擎了，这个地方我就只做一些相关笔记，不写代码，主要要做的是前后端分离的东西

> consolidate 适配
```
const consolidate = require('consolidate')

// 输出什么东西
server.set('view engine', 'html')
// 文件放在哪
server.set('views', './views')
// 使用哪种引擎
server.engine('html', consolidate.ejs)

// 接收用户请求
server.get('./index', (req,res) => {
  res.render('loing.ejs',{name:'xuanliao'}) // 第一个参数是模板路径，第二参数是模板引擎中需要的一写参数

})
```

> 路由 router (Mimi版的小server) 子服务
* 目的就是为了把服务拆分
```
let routerA = express.Router()
routerA.get('/1.html',(req,res) => {
  res.send('111')
})
server.use('/A',routerA)


```