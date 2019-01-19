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