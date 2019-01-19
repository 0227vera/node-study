// 肯定还是要用递归的思想的，哼唧
const fs = require('fs');

// 复制方法
function copy(copyPath, targetPath) {
    //读取目录
    fs.readdir(copyPath, (err, paths) => {
        if (err) {
            throw err;
        }
        paths.forEach(Sonpath => {
            let currentCopyPath = copyPath + '/' + Sonpath;
            let currentTargetPath = targetPath + '/' + Sonpath;
            let readable;
            let writable;
            fs.stat(currentCopyPath, (err, currentStatus) => {
                if (err) {
                    throw err;
                }
                // 如果是文件夹继续向下寻找文件，如果是文件直接形成文件流
                if (currentStatus.isDirectory()) {
                    exists(currentCopyPath, currentTargetPath, copy);
                } else {
                    // 管道输送文件
                    fs.createReadStream(currentCopyPath).pipe(fs.createWriteStream(currentTargetPath));
                }
            });
        });
    });
}
// 判断目标文件夹是否存在
function exists(copyPath, targetPath, callback) {
    //判断文件是否存在
    fs.exists(targetPath, existsFlag => {
        if (existsFlag) { //存在直接进行copy
            callback(copyPath, targetPath);
        } else { //不存在创建这个文件夹再copy
            fs.mkdir(targetPath, () => { //创建目录
                callback(copyPath, targetPath)
            })
        }
    })
}
exists('version', 'dist', copy)









// 还有一种简单的方法 fs的扩展方法

// const fse = require('fs-extra')

// fse.copy(path.resolve(__dirname, '../version'), path.resolve(__dirname, '../dist'), err => {
//     if (err) return console.error(err)
//     console.log(chalk.cyan('copy version success!\n'))
// })