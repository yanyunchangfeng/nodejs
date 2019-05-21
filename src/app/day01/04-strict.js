function f1(){
    'use strict';
    var name = 'yanyunchangfeng';
    console.log(this)
}
f1();
//1.修改常量的值是非法的，
//2.不允许对未声明的变量赋值
//3.函数的this不再指向全局