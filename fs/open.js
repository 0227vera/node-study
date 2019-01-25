const fs = require('fs');
const path = require('path')

console.log('准备开始打开文件');

fs.open(path.resolve(__dirname, "./icon-lzx/icon0.png"), 'r+', (err, fd) => {
    if (err) {
        console.log('-------->', err)
        return;
    }
    console.log('文件打开成功');
});
