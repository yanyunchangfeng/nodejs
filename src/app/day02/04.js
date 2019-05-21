var m1 = require('./04-m1');
console.log(m1.data)
var m2 = require('./04-m2');
console.log(m2.data)
var m3 = require('./04-m3.json');
//.json后缀的文件模块，被作为JSON字符串加载，会自动解析为对象
console.log(m3.data)
//.node后缀的文件模块，会被c/c++ 二进制加载
//引入目录模块
//目录模块---
// 1-目录模块引入时只需引入目录名即可，包含一个package.json文件的目录模块 "main" 指向该模块的主文件
// 2- 包含index.js 的文件 如果没有package.json 文件必须指定一个index.js文件
// 3- 包含index.json 的文件 如果没有package.json 文件必须指定一个index.json文件
// 4- 包含index.node 的文件 如果没有package.json 文件必须指定一个index.node文件
var m4  = require('./04-m4')
var m5  = require('./04-m5')
var m6  = require('04-m6')//放到node_modules目录下的模块，引入的时候直接写模块名称即可，不必指定路径
console.log(m4.data)
console.log(m5.data)
console.log(m6.data)

//模块查找顺序
1.//文件·目录模块缓存 在服务器端运行node加载过一个模块，会把它放在缓存中，先找目录缓存，然后，原生模块缓存，如果第一次加载，会找原生模块，再找目录模块
2.//原生模块缓存
3.//原生模块 
4.//文件，目录模块
//注意自定义模块尽量避免和原生模块重名

