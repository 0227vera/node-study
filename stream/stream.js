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
readableStream.on('end', () => {
    console.log('最后的结果是--------->', data)
})

// ## 当读取出现错误的时候
readableStream.on('error', err => {
    console.log('文件流存在错误---------->', err.stack);
})

console.log('文件读取流执行完成')



console.log('**********************************************************')



let writeData = "我是廖轩，i'm salvatore，你可以联系我，我的电话是12345678900";

let writeStream = fs.createWriteStream(path.resolve(__dirname, './test/output.txt'));

writeStream.write(writeData,'UTF8');

writeStream.on('finish', () => {
    console.log('文件写入完成');
});

writeStream.on('error', err => {
    console.log('写入的报错-------->', err.stack)
})
console.log('文件写入流执行完成');

console.log('**********************************************************')
// ## 管道的概念，直接对文件进行输送。pipe()

fs.createReadStream(path.resolve(__dirname,'./test/input.txt')).pipe(fs.createWriteStream(path.resolve(__dirname,'./test/pipe.txt')));
fs.createReadStream(path.resolve(__dirname,'./test/output.txt')).pipe(fs.createWriteStream(path.resolve(__dirname,'./test/pipe.txt')));