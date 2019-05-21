var counter = 0;
var timer = setTimeout(function(){
    counter++;
    // console.log('%d hello',counter)
    clearTimeout(timer)
},1000)

var counter2 =0 ;
var timer2 = setInterval(function(){
    counter2++;
    // console.log(counter2);
    if(counter2>5){
        clearTimeout(timer2)
    }
},1000)

// 使用一次性定时器模拟周期性定时器效果
var counter3 = 0;
var timer3 = setTimeout(function (){
  counter3++;
  if(counter3<5){
      console.log(counter3)
      setTimeout(arguments.callee,1000)
      
  }else{
      clearTimeout(timer3)
  }

},100)

//nodejs 中有4中定时器
// setImmediate(下次事件循环开始之前立即执行的定时器) setInterval setTimeout process.NextTick（本次事件循环结束后立即执行的定时器）

setTimeout(function(){
console.log('setTimeout')
},2)
//当为小于2毫秒时 ，运行结果如下
// end
// nextTick1
// nextTick2
// setTimeout
// setImmediate1
// setImmediate2
// 当timer大于三
// end
// nextTick1
// nextTick2
// setImmediate1
// setImmediate2
// setTimeout
setImmediate(function(){
    console.log('setImmediate1')
})
process.nextTick(function(){
    console.log('nextTick1')
})
setImmediate(function(){
    console.log('setImmediate2')
})
process.nextTick(function(){
    console.log('nextTick2')
})
console.log('end')