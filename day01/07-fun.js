(function(){
        console.log('yanyunchangfeng')
})();

+function(){
    console.log('yanyunfeiqi')
}()

+function(num){
  if(num>0){ arguments.callee(num-1),console.log(num)}//1 2 3 4 5
}(5);

(()=>{
    console.log('111')
})();
//箭頭函數只用于匿名函數
((num1,num2)=>{
    console.log(num1+num2)
})(10,20)

const fn = num=>{
  console.log(num)
}
fn(5)