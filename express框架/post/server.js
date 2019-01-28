const express = require('express');
const bodyParser = require('body-parser');
app = express();
// 创建 application/x-www-form-urlencoded 编码解析
let urlencodedParser = bodyParser.urlencoded({
    extended: false
})

app.use(express.static('public'));
app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/' + 'index.html');
});
app.post('/post_send', urlencodedParser, (req, res) => {
    let response = {
        "name": req.body.name,
        "pwd": req.body.pwd
    };
    console.log(response);
    res.end(JSON.stringify(response));
})
app.listen(1234)