const http = require('http');
const fs = require('fs')

const wwwPath = './www'

let server = http.createServer((req,res) => {
    let reqPath = `${wwwPath}${req.url}`
    fs.readFile(reqPath, (err, data) => {
        if (err) {
            res.write('404')
        } else {
            res.write(data)
        }
        res.end()
    })
})
server.listen(1111)

fs.writeFile('./www/test.txt','测试文件',(err) => {
    console.log(err)
})
