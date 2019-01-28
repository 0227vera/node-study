const express = require('express');
const cookieParser = require('cookie-parser');
const util = require('util');

let app = express();
app.use(cookieParser())

app.get('/', (req, res) => {
    res.end('qingqiu')
    console.log('Cookies:' + util.inspect(req.cookies))
})
app.listen(1232)