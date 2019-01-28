const express = require('express');
let app = express();
app.use(express.static('public'));

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/' + 'index.html');
})

app.get('/get_send', (req, res) => {
    console.log(req)
    var response = {
        "姓名": req.query.name,
        "密码": req.query.pwd
    };
    console.log('------------>', response)
    res.end(JSON.stringify(response));
})
app.listen(1000)