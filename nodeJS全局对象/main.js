console.error('------------>', __filename);
console.trace()
process.on('exit', function (code) {
    // 以下代码永远不会执行
    setTimeout(function () {
        console.log("该代码不会执行");
    }, 0);

    console.log('退出码为:', code);
});
console.log("程序执行结束");
console.log('********************************************')
process.stdout.write("输出到终端:Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
});

// 获取执行路径
console.log('获取执行路径------>', process.execPath)

// 获取平台星系
console.log('获取平台信息----->', process.platform)