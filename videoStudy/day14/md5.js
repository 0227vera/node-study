// 拖库（数据库）
// 数据库里面，不能存储明文密码
// “加密”之后存储（目前实际上是签名）
// MD5--签名算法
const crypro = require('crypto')

module.exports = {
  md5(str){
    let o = crypro.createHash('md5')
    o.update(str)
    return o.digest('hex')
  }
}