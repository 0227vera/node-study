const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const multer = require('multer');
const util = require('util')

let app = express();


app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(multer({
    dest: '/tmp/'
}).array('file'));// 获取input的name值


app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/' + 'index.html');
})

app.post('/file_upload', (req, res) => {
    console.log('--------->', util.inspect(req, true, null, true));
    var des_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile(req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    msg: '文件上传成功',
                    filename: req.files[0].originalname
                };
            }
            res.end(JSON.stringify(response));
        });
    });
})
app.listen(1000)