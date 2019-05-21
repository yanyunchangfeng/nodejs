var util = require('util');
var obj ={name:'beijingkaoya',price:12,isOnsale:false};
var s1 = util.format('食品名称 %s 价格： %d 是否促销 %s %j',obj.name,obj.price,obj.isOnsale,obj )
console.log(s1)//食品名称 beijingkaoya 价格： 12 是否促销 false {"name":"beijingkaoya","price":12,"isOnsale":false}
console.log(util.inspect(obj))//{ name: 'beijingkaoya', price: 12, isOnsale: false }
console.log(typeof(util.inspect(obj)))//string

//实现构造方法之间的继承
function Base(){
    this.name = 'base'
}
Base.prototype.age = 20;
function Sub(){
    this.name = 'sub'
}
util.inherits(Sub,Base);
var user = new Sub()
console.log(user.name)//sub
console.log(user.age)//20