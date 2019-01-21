// ## 按照不同的方式对文字进行buffer；
// ### ascii码
let buf = Buffer.from('salvatore','ascii');
console.log(buf)
// ### 以什么样的形式输出 此处以hex的形式输出
console.log(buf.toString('hex'));
// ### 