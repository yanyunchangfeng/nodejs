var fs  =require('fs');
//读取文件
fs.readFile('../day02/02.js',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log('文件读取成功')
        console.log(data.toString())
    }
})
//写入内容
//当使用wirteFile 向文件中写入内容时，如果文件不存在，会自动创建该文件，如果存在，会替换原有内蓉，
//如果目录不存在，会报错

var file = './log/out.log';
var data ="this is test...";
fs.writeFile(file,data,err=>{
    if(err){

        console.log(err)
    }
})
//如果没有该文件，会自动创建，如果文件已存在，会在原文件末尾追加内容
fs.appendFile(file,data,err=>{
    if(err){
        console.log(err)
    }
})

//删除文件

fs.unlink('./log/test.log', err=>{
    if(err){
      console.log('删除文件失败')
    }
})

//重命名文件

var pathOld = './log/index.html';
var pathNew = './log/login.html';

fs.rename(pathOld,pathNew,err=>{
    if(err){
        console.log(err)
        
    }
})