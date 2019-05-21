// 拖库（数据库）
// 数据库里面，不能存储明文密码
// “加密”之后存储（目前实际上是签名）
// MD5--签名算法
const crypro = require('crypto')
const MD5_pre = 'J:DFGEFHLSDFHELNBVNSLHUEalhgaskdjfghear93q40857q34/actions'
const MD5_suffix = 'JDK:SHFJSDagh;asdfgjhewarpiutgeqap38495-127345234tlhdafjghsdjghadfhlga'

module.exports = {
  md5(str){
    let o = crypro.createHash('md5')
    o.update(MD5_pre + str + MD5_suffix)
    return o.digest('hex')
  }
}