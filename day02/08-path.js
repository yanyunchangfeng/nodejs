var path = require('path');
var str = "/thoughtworks/homework/index.js";
console.log(path.parse(str)) //解析一个路径，参数为路径字符串
//{
 // root:"/",
 // dir:"/thoughtworks/homework",
 // base:'indexjs.
 // ext:'.js',
 // name:'index'
//}
var obj = {
    dir:'/thoughtworks/homework',
    base:'index.js'
}
console.log(path.format(obj))//解析一个路径，转换为路径字符串 /thoughtworks/homework/index.js
console.log(path.join('/','thoughtworks','homework','index.js'))//用于连接路径，会正确使用当前系统的路径分隔符 ///thoughtworks/homework/index.js

//reslove 根据基础路径，会解析出目标路径的绝对路径
//relative 根据基础路径，获取目标路径与其的相对关系

var path1 = "/thoughtworks/homework/login"; //最后一个login是目录，相对的是login目录下的文件
console.log(path.resolve(path1,'img/myimg.png'));///thoughtworks/homework/img/myimg.png
console.log(path.relative(path1,'/thoughtworks/img/resume'));//   ../../img/resume

