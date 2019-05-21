//url 模块
var url = require('url');
var str = "http://yanyuncahngfeng:123@yycf.cn:8080/news/index.html?pid=20#section";
console.log(url.parse(str))//解析url的各个组成部分
console.log(url.parse(str,true));//第二个参数为true，可以将查询字符串部分解析为对象

var obj ={
    protocol:"http:",
    host:"yanyunchangfeng.cn",
    pathname:'yanyunchangdfeng/index.html',
    query:{age:26}
}

console.log(url.format(obj))
//resolve 根据基地址和相对地址解析出目标地址，参数1，基地址；参数2 ，相对地址

var url1 ="project/static/base.html";
var url2 = "../img/1.jpg";
console.log(url.resolve(url1,url2))