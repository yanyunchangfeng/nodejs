//注意 Node.js 在编译模块文件时会对其首尾进行如下的包装
(function(exports,require,moudle,__filename,__dirname){
   module.exports = {};
   exports = moudle.exports;
   //模块中原有的全部内容
   return module.exports 
});

var c  = require("./03-circle");
var circle = new c(5);
console.log(circle.size())