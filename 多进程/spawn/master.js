const fs = require('fs');
const child_process = require('child_process');

for (let i = 0; i < 3; i++) {
    let worker = child_process.exec('node support.js ' + i, (err, stdout, stderr) => {
        if (err) {
            console.log(err)
        }
        console.log('stdout:', stdout);
        console.log('stderr:', stderr);
    });
    worker.on('exit', code => {
        console.log('子进程已退出, 退出码:', code)
    })
};