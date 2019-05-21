//向任意输出流中执行输入
var fs = require('fs');
var out  =fs.createWriteStream('./log/out.log');
var error  = fs.createWriteStream('./log/error.log');
var c  =require('console') //引入Console模块
var loger = new c.Console(out,error);//out必填，error可选
loger.log('log');//向out 文件中写入 log
loger.error('error') //向error文件中写入error

//Node.js核心模块
 // 1.console 
 // global.console 用于向stdout 和stderr输出日志信息
 //Console class console模块中的Console构造函数，用于向任意指定的输出流(文件)中输入信息

