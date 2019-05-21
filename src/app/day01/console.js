//global 的成员
console.log('msg');
console.log('msg',123,true, new Date())

var user = {
    name:'yanyunchangfeng',
    age:26
}
//百分号占位符 %s 表示string类型，%d表示number类型
console.log(`姓名：${user.name},年龄：${user.age}`);
console.log('姓名：%s,年龄：%d',user.name,user.age);

//err,warn
console.error(`姓名：${user.name},年龄：${user.age}`)
console.warn('姓名：%s,年龄：%d',user.name,user.age)

// 向stderr输出栈轨迹信息

//console.trace

function outer() {
     function inner(){
      console.trace('stack trace')
    }
    inner()
}
outer()
//注意console中的成员方法是异步的，输入顺序和输出顺序不一定完全一致

//console.dir

// console.dir(user)
// console.log(user)

// console.log(Buffer)
// console.dir(Buffer,{color:true})


//console.assert 断言 ，为真错误信息不会输出；为假的断言，抛出错误对象，输出错误信息，并且终止脚本的运行，可以自定义错误信息。

function add (n1,n2){
    return n1+n2
}
var sum = 31;
console.assert(add(10,20)==sum,"add函数执行结果不符合要求")

//console.time() console.timeEnd()
function unique(arr){
   let hash=[],result=[]
  for(let i =0;i<arr.length;i++){
      if(!hash[arr[i]]){
          result.push(arr[i]);
          hash[arr[i]] = true;
      }
  }
  return result;
}
let result = []
for(let i =0;i<10000000;i++){
   result[i] = Math.floor(Math.random()*1000);
}
console.time('unique')
unique(result);
console.timeEnd('unique')
console.time('unique set')
let res = new Set(result);
console.timeEnd('unique set');
