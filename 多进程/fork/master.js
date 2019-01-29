const fs = require('fs');
const child_process = require('child_process');

for (let i = 0; i < 3; i++) {
    let worker = child_process.fork('support.js', [i]);
    worker.on('close', code => {
        console.log('子进程已退出, 退出码:', code)
    })
};