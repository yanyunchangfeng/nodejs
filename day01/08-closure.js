var i = 1;
// setInterval(()=>console.log(i),100);

for(var i =0;i<5;i++){
    setTimeout(()=>{
        console.log(i)
    },0)
}
for(var i =0;i<5;i++){
    setTimeout(outer(i),0)
}
function outer(num){
   return function inner(){
      console.log(num)
   }
}
//改寫為箭頭函數

for(var i =0;i<5;i++){
    setTimeout((num=>{
        return ()=>{
            console.log(num)
        }
    })(i),100)
}