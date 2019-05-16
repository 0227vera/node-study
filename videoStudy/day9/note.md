# express

* cookie session

***

* http-无状态的
> cookie 在浏览器中保存一些数据,每次请求都会带过来  大小有限(4K)  不安全
> session 保存数据,保存在服务端  大小取决与服务器(可以认为是无限的) 安全 但是session是不可能独立存在的,没有cookie就没有session
> session是基于cookie实现的
  * cookie中会有一个session的ID,服务器利用sessionID找到session文件读取写入 
  * session劫持

***

> cookie
 * 读取-----cookie-parser(中间键)------------>
 ```
 server.use(cookieParser(req.secret)) // cookie可以访问下面目录的cookie,但不可以访问上面的 
 req.cookies        未签名的cookie
 req.signedCookies  签名的cookie
 ```
 * 写入----->
 ```
 req.secret = '$@$@$*&YSFDHKSDF#$@)($*@_' // 签名的密钥
  res.cookie('key','value',{path:'/aaa',maxAge:10*24*3600*1000,signed:true})  // 时间以ms为单位  signed签名防止篡改
```
* 删除
```
res.clearCookie('key')
```
* 加密(可以但没必要)----------->cookie-encryptry模块


* 使用  
 * 1,cookie空间非常小----省着用 --------->精打细算
 * 2,安全性非常差---------->校验cookie是否被篡改过 

***

> session
 * 读取-----cookie-session(中间键)------->
```
keys = ['aaa','bbb','ccc']
server.use(cookieParser())
server.use(cookieSession({
  name:'sess',
  keys:['aaa','bbb','ccc'],// 必选
  msxAge:2*3600*1000
}))


 req.session
```

 * 写入-----

 * 删除
```
  delete req.session
```


