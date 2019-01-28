// 中间键
const express = require('express');
let app = express();
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.send('salvatore');
})
let server = app.listen(1111)

// 图片路径
// localhost:1111/img/homePage.png