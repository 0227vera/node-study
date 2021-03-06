# MySql 关系性数据库

* 这一步部分，因为之前没有做过数据相关的东西，所以得先花一段时间来把数据库的知识先好好补补

* 什么是数据库？

1. 数据库（Database）是按照数据结构来组织、存储和管理数据的仓库。每个数据库都有一个或多个不同的 API 用于创建，访问，管理，搜索和复制所保存的数据。我们也可以将数据存储在文件中，但是在文件中读写数据速度相对较慢。所以，现在我们使用关系型数据库管理系统（RDBMS）来存储和管理的大数据量。所谓的关系型数据库，是建立在关系模型基础上的数据库，借助于集合代数等数学概念和方法来处理数据库中的数据。

* RDBMS 即关系数据库管理系统(Relational Database Management System)的特点：

1. 数据以表格的形式出现
2. 每行为各种记录名称
3. 每列为记录名称所对应的数据域
4. 许多的行和列组成一张表单
5. 若干的表单组成database

*  RDBMS 术语

1. 数据库: 数据库是一些关联表的集合。
2. 数据表: 表是数据的矩阵。在一个数据库中的表看起来像一个简单的电子表格。
3. 列: 一列(数据元素) 包含了相同的数据, 例如邮政编码的数据。
4. 行：一行（=元组，或记录）是一组相关的数据，例如一条用户订阅的数据。
5. 冗余：存储两倍数据，冗余降低了性能，但提高了数据的安全性。
6. 主键：主键是唯一的。一个数据表中只能包含一个主键。你可以使用主键来查询数据。
7. 外键：外键用于关联两个表。
8. 复合键：复合键（组合键）将多个列作为一个索引键，一般用于复合索引。
9. 索引：使用索引可快速访问数据库表中的特定信息。索引是对数据库表中一列或多列的值进行排序的一种结构。类似于书籍的目录。
10. 参照完整性: 参照的完整性要求关系中不允许引用不存在的实体。与实体完整性是关系模型必须满足的完整性约束条件，目的是保证数据的一致性。


* MySQL数据库

MySQL 是一个关系型数据库管理系统，由瑞典 MySQL AB 公司开发，目前属于 Oracle 公司。MySQL 是一种关联数据库管理系统，关联数据库将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性。

1. MySQL 是开源的，所以你不需要支付额外的费用。
2. MySQL 支持大型的数据库。可以处理拥有上千万条记录的大型数据库。
3. MySQL 使用标准的 SQL 数据语言形式。
4. MySQL 可以运行于多个系统上，并且支持多种语言。这些编程语言包括 C、C++、Python、Java、Perl、PHP、Eiffel、Ruby 和 Tcl 等。
5. MySQL 对PHP有很好的支持，PHP 是目前最流行的 Web 开发语言。
6. MySQL 支持大型数据库，支持 5000 万条记录的数据仓库，32 位系统表文件最大可支持 4GB，64 位系统支持最大的表文件为8TB。
7. MySQL 是可以定制的，采用了 GPL 协议，你可以修改源码来开发自己的 MySQL 系统。