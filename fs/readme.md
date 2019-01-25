# nodeJS学习
/*
*
*/

    ## nodeJS文档学习，顺便学习一下markdown的语法

    ## 本区块是关于nodeJS里面的fs模块的学习和使用的相关方法

    ****************************

        ### copy.js

            #### fs.readdir 读取文件夹返回一个可遍历的数组
            #### fs.stat 读取文件状态 是文件夹还是文件 如果是文件直接开通管道进行传输 如果是文件夹则需要先对目标文件夹先进行判断是否存在 存在直接对该文件夹进行#### copy，没有创造一个文件夹在copy
            #### fs.mkdir 创建一个文件夹
            #### 递归的思想在这个地方用的就是很明显的了
            #### 当然nodeJS也直接用现成的方法了
           ` // 还有一种简单的方法 fs的扩展方法
            // const fse = require('fs-extra'); // 把version文件里面的所有东西复制到dist，文件夹下
            // fse.copy(path.resolve(__dirname, '../version'), path.resolve(__dirname, '../dist'), err => {
            //     if (err) return console.error(err)
            //     console.log(chalk.cyan('copy version success!\n'))
            // })`
            #### 上面的所有方法里面可以验证在nodeJS里面几乎所有的方法都是支持回调函数的

        ### delete.js
            #### 相对于copy.js delete.js就简单了很多了
            #### fs.existsSync（）判断的文件夹是否存在，如果存在进行遍历文件夹里面的文件
            #### 然后递归的思想和copy是一样的

        ### img-order-rename.js
            #### 这个对文件的重命名就比较复杂了
            #### 可能之前看着比较复杂，现在看看也没那么复杂


        ### getname.js
            #### 将文件写成一个想要的格式放入项目中去

    
    ## open 打开文件 fs.open(path, flags[, mode], callback) 
        ### 参数说明
            #### path - 文件的路径。
            #### flags - 文件打开的行为。具体值详见下文。
            
                ##### r	    以读取模式打开文件。如果文件不存在抛出异常。
                ##### r+	以读写模式打开文件。如果文件不存在抛出异常
                ##### rs	以同步的方式读取文件。
                ##### rs+	以同步的方式读取和写入文件。
                ##### w	    以写入模式打开文件，如果文件不存在则创建。
                ##### wx	类似 'w'，但是如果文件路径存在，则文件写入失败。
                ##### w+	以读写模式打开文件，如果文件不存在则创建。
                ##### wx+	类似 'w+'， 但是如果文件路径存在，则文件读写失败。
                ##### a	    以追加模式打开文件，如果文件不存在则创建。
                ##### ax	类似 'a'， 但是如果文件路径存在，则文件追加失败。
                ##### a+	以读取追加模式打开文件，如果文件不存在则创建。
                ##### ax+	类似 'a+'， 但是如果文件路径存在，则文件读取追加失败。

            #### mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
            #### callback - 回调函数，带有两个参数如：callback(err, fd)。
    
    ## stat 获取文件信息 用的比较多的时候是：是否为文件是否为文件夹的时候
    
    ## writeFile 写入文件 默认模式w模式

    ## read 读取文件 fs.read(fd, buffer, offset, length, position, callback)
        ### fd - 通过 fs.open() 方法返回的文件描述符。
        ### buffer - 数据写入的缓冲区。
        ### offset - 缓冲区写入的写入偏移量。
        ### length - 要从文件中读取的字节数。
        ### position - 文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。
        ### callback - 回调函数，有三个参数err, bytesRead, buffer，err 为错误信息， bytesRead 表示读取的字节数，buffer 为缓冲区对象。

    ## close 关闭文件

    ## ftruncate 截取文件
        ### fs.ftruncate(fd, len, callback) 
            #### fd - 通过 fs.open() 方法返回的文件描述符。
            #### len - 文件内容截取的长度。
            #### callback - 回调函数，没有参数。
    
    ## unlink 删除文件

    ## mkdir 创造文件夹（创建目录）

    ## readdir 读取目录

    ## rmdir 删除目录