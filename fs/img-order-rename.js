let path = require("path");
let fs = require("fs");
let rootPath = './icon-lzx';
renameFilesInDir(path.resolve(__dirname, rootPath));

function changeFileName(filepath, num) {
    fs.stat(filepath, function (err, stats) {
        if(err){
            console.log('changeFileName----------->', err);
            return;
        }
        if (stats.isFile()) {
            // 先确定这是一个文件

            // path.basename 返回的是path最后的部分 也就是path的文件名
            // path.dirname  返回的是path前面的部分，也就是path的目录名
            let filename = path.basename(filepath);
            let parentDir = path.dirname(filepath);
            let parentDirname = path.basename(path.dirname(filepath));
            let thisFilename = path.basename(__filename);


            //这个if就是进行更改文件名的逻辑,可以自行定义,这里定义为将文件命名为当前文件夹的名字加"-文件自身名"
            if (filename != thisFilename && filename.indexOf(parentDirname) < 0) {
                // filename没有出现在已经出现的名字中才可以按照规律命名
                let newName = 'icon' + num + '.png';
                let newPath = parentDir + "\\" + newName;
                fs.rename(filepath, newPath);
            }
        } else if (stats.isDirectory()) {
            renameFilesInDir(filepath);
        } else {
            console.log("unknow type of file");
        }

    });

}

function renameFilesInDir(dir) {
    fs.readdir(dir, function (error, files) {
        if (error) {
            console.log('renameFilesInDir---------->', error);
            return
        }
        let len = files.length;
        let file = null;
        for (let i = 0; i < len; i++) {
            file = files[i];
            changeFileName(dir + "\\" + file, i);
        }
    });

}