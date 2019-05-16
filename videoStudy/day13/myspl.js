
const mysql = require('mysql');
// 1,连接 那台服务器，用户名，密码，库
let db = mysql.createConnection({ // 连接
  host:'localhost',
  port:'3306',
  user:'root',
  password:'root',
  database:'newtest'
});

// 2，查询 (增删改查) 非常典型的异步操作，肯定会有回调函数
db.query('SELECT * FROM `user_table`;', (err, data) => {
  if (err) {
    throw err
  } else {
    console.log('--------->', JSON.stringify(data))
  }
});

