const fs = require('fs');
const path = require('path');


// ## 申明接受的data
let data = '';

// ## 创建可读流 
let readableStream = fs.createReadStream(path.resolve(__dirname, './test/input.txt'));
// ## 设置编码
readableStream.setEncoding('UTF8');
// ## 处理流事件
readableStream.on('data', res => {
    data += res;
});

// ## 当所有的数据读取完成 ，没有更多的数据可读时
// readableStream.on('end', () => {
//     console.log('最后的结果是--------->', data)
// })

// ## 当读取出现错误的时候
readableStream.on('error', err => {
    console.log('文件流存在错误---------->', err.stack);
})

console.log('文件读取流执行完成')



console.log('**********************************************************')



let writeData = "我是廖轩，i'm salvatore，你可以联系我，我的电话是12345678900";

let writeStream = fs.createWriteStream(path.resolve(__dirname, './test/output.txt'));

writeStream.write(writeData, 'UTF8');

writeStream.on('finish', () => {
    console.log('文件写入完成');
});

writeStream.on('error', err => {
    console.log('写入的报错-------->', err.stack)
})
console.log('文件写入流执行完成');

console.log('**********************************************************')
// ## 管道的概念，直接对文件进行输送。
// ## a.pipe(b) a是从哪来的，b是去哪的

fs.createReadStream(path.resolve(__dirname, './test/input.txt')).pipe(fs.createWriteStream(path.resolve(__dirname, './test/pipe.txt')));


console.log('管道完成')
console.log('***************************************************************************************')
// ## 链式流
// ## 链式是通过连接输出流到另外一个流并创建多个流操作链的机制。链式流一般用于管道操作。
// ## 也就是说链式流是基于管道来讲的

// 用管道和链式流来压缩文件和解压文件
const zlib = require('zlib');
fs.createReadStream(path.resolve(__dirname, './test/input.txt'))
    .pipe(zlib.createGzip()) // 文件压缩
    .pipe(fs.createWriteStream(path.resolve(__dirname, './test/input.txt.gz')))

console.log('压缩完成')
console.log('*********************************************************************************')

fs.createReadStream(path.resolve(__dirname, './test/input.txt.gz'))
    .pipe(zlib.Gunzip()) // 解压
    .pipe(fs.createWriteStream(path.resolve(__dirname, './test1/input.txt')))

console.log('解压完成')
console.log('*********************************************************************************')