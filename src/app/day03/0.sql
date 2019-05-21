SET NAME UTF8;
DROP DATABASE IF EXISTS yanyunchangfeng;
CREATE DATABASE yanyunchangfeng CHARSET=UTF8;
USE yanyunchangfeng;

CREATE TABLE yycf(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32),
    upwd VARCHAR(32)
);
INSERT INTO yycf VALUES
(NULL,'yycf','123456'),
(NULL,'dmqq','123456'); 