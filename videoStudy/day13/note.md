# 数据库 

* 关系型
>MySql
* 免费，中小网站，性能很不错， 缺点的话：集群，容灾稍微弱点
>Oracle
* 贵，大型企业，金融级，性能非常好，集群，容灾非常强，缺点：贵

* server端（服务端）： 装myspl的安装
* client端（客户端）：SQLyog nodejs(nodeJS中的mysql模块)

> 数据基本概念
* 1，库： 文件夹--用来管理，本身没法存数据
* 2，表： 文件--存数据（长的很想excel表，但是肯定不是的，别多想）
  * 行：一条数据， 列（字段、域）
  * 主键： 唯一标志符（唯一，性能高）

> SQL => Structired Query Language (结构化查询语句) --DBA（职业）(关键字大写，库，表，字段名用``)
* 4大基本语句 --- 增删改查
  * 增-INSERT
  INSERT  INTO 表 (字段的列表) VALUES(值列表)
  INSERT INTO user_table (`ID`, `username`, `password`) VALUES(0, 'testname','testpassword');
  * 删-DELETE
  * 改-UPDATE
  * 查-SELECT
  SELECT 什么 FROM 表
  SELECT * FROM `user_table`
