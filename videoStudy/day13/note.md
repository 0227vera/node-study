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
* 四大基本语句 --- 增删改查

  * 增-INSERT
  INSERT  INTO 表 (字段的列表) VALUES(值列表)
  INSERT INTO user_table (`ID`, `username`, `password`) VALUES(0, 'testname','testpassword');

  * 删-DELETE
  DELETE FROM 表 WHERE 条件
  * 改-UPDATE
  UPDATE 表 SET n_like=n_like+1,a=3 WHERE ID=1
  UPDATE 表 SET n_like=n_like+1 WHERE ID=1

  * 查-SELECT
  SELECT 什么 FROM 表
  SELECT * FROM `user_table` WHERE 条件

>子句
* WHERE name='liaoxuan'
  * WHERE age>18
  * WHERE age>18 AND score<60
  * WHERE cash>100 OR score>10000

* ORDER 排序
  * ORDER BY age ASC/DESC
    * ASC 升序（从小到大）
    * DESC 降序 （从大到小）
  
  * ORDER BY price ASC, sales DESC

* GROUP 聚类-合并相同的（单独用几乎没有作用）（COUNT, MIN, MAX, AVG） // 统计相关的时候会比较有用
* 统计每个班的人数
// 班级先去重
SELECT * FROM student_table GROUP BY class;
// 选class
SELECT class FROM student_table GROUP BY class;
// 对class计数
SELECT class,COUNT(class) FROM student_table GROUP BY class;
* 统计每个班的平均分 
SELECT class,AVG(score) FROM sutend_table GROUP BY class
* 求每个班级的最高分和最低分是多少
SELECT class,MAx(score),MIN(score) FROM student_table GROUP BY clsss
* 年度消费总和
SELECT name,SUM(price) FROM salex_table GROUP BY name ORDER BY DESC


* LIMIT-分页
  * 1，所有的数据给前端
  * 2，后端一点一点的给，按需所取（肯定选择这个）
LIMIT 10
LIMIT 5, 8 从第五条开始要8个
分页 ，每页20条
LIMIT 0,20
LIMIT (n-1)*20,20

* 子句之间的书写顺序 WHERE GROUP ORDER LIMIT
* 筛选 合并 排序 限制

> 数据库的导入导出
