let fs = require('fs');
const path = require('path')
let name = [];
fs.readdir(path.resolve(__dirname, './icon-lzx'), (err, data) => {
    data.forEach((item) => {
        name.push({ name: './img/icon-lzx/' + item });
    });
    fs.writeFileSync(path.resolve(__dirname, './newName.json'), JSON.stringify(name));
});