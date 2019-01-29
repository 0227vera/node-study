const express = require('express');
const fs = require('fs');
const path = require('path');

let app = express();



let user = {
    "user4": {
        "name": "mohit",
        "password": "password4",
        "profession": "teacher",
        "id": 4
    }
}
app.get('/user_list', (req, res) => {
    fs.readFile(path.resolve(__dirname, './json/user.json'), 'utf8', (err, data) => {
        if (err) {
            res.end(404)
            // res.send(404);
        } else {
            // 注意fs读出来的都是文件流所以不要直接使用数组对象等上的方法
            // 添加数据
            let pdata = JSON.parse(data);
            pdata['user4'] = user['user4'];
            writeJson(pdata);
            // 删除数据
            res.end(JSON.stringify(pdata))
            // res.send(data)
        }
        // res.end()
    })
});

app.get('/delete/:id', (req, res) => {
    fs.readFile(path.resolve(__dirname, './json/user.json'), 'utf8', (err, data) => {
        if (err) {
            res.end(404)

        } else {
            // 注意fs读出来的都是文件流所以不要直接使用数组对象等上的方法
            // 添加数据
            let pdata = JSON.parse(data);

            if (pdata['user' + req.params.id]) {
                delete pdata['user' + req.params.id]
            }
            writeJson(pdata);
            // 删除数据
            res.end(JSON.stringify(pdata))
            // res.send(data)
        }
        // res.end()
    })
});
app.listen(2020)


// 将json写入的方法

function writeJson(pdata) {
    fs.writeFile(path.resolve(__dirname, './json/user.json'), JSON.stringify(pdata), (err) => {
        if (err) {
            console.log('--------->', '写入失败')
        } else {
            console.log('------------>', '写入成功')
        }
    })
}