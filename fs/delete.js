const fs = require('fs');

// 每次在dist下面生成的version之前先把之前的version删除，还是用必要的,为了速度用异步给它爽一下子
// 这个必须同步执行
function deleteDist(path) {
    // 如果没有dist文件夹就不给他删除了
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(sonPath => {
            var currentPath = path + "/" + sonPath;
            if (fs.statSync(currentPath).isDirectory()) {
                deleteDist(currentPath); // 给他递归一下子
            } else { // 删除文件
                fs.unlinkSync(currentPath);
            }
        });
        // 最后再把文件夹删一下子
        fs.rmdirSync(path);
    }
};

deleteDist('dist');