const fs = require('fs');
const child_process = require('child_process');

for (let i = 0; i < 3; i++) {
    let worker = child_process.spawn('node' + ['support.js ', i]);

    worker.stdout.on('data', data => {
        console.log('stdout:', data)
    })
    worker.stderr.on('data', data => {
        console.log('stderr:', data)
    })
    worker.on('close', code => {
        console.log('子进程已退出, 退出码:', code)
    })
};