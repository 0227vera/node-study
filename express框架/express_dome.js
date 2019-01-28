const express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.send("salvatore's frist express app");
})


// 可以看的出来的确是比之前的服务简单很多的
let server = app.listen(1010, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log('------------>', server.address())
    console.log(`地址解析出来的host是：${host},port是${port}`);
});