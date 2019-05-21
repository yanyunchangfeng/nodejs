var qs = require('querystring');
var str = "name=yanyunchangfeng&age=26";
console.log(qs.parse(str));
var obj = {
    name:"yycf",
    age:26
};
console.log(qs.stringify(obj,",","-"))//第二个参数指定键值对之间的分隔符，第三个参数指定建和值之间的分隔符
