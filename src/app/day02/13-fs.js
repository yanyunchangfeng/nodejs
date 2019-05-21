var fs = require('fs');
// 常用方法：
// fs.stat() 用于返回一个文件或目录的统计信息对象
// fs.mkdir() 创建目录
// fs.rmdir() 删除目录
// fs.readdir()读取目录下的内容
// fs.readFile()读取文件内容
// fs.writeFile() 向文件中写入内容
// fs.appendFile() 向文件末尾追加内容
// fs.unlink() 删除文件
// fs.rename() 重命名文件
// var path ='./test';
// fs.mkdir(path,err=>{
//     if(err){
//         console.log(err)
//     }
// });

fs.stat(path,err=>{
    if(err){
        fs.mkdir(path,err=>{

        })
    }else{
        fs.rmdir(path,err=>{

        })
    }
})

//
var path2 ='./node_modules';
fs.stat(path2,(err,stats)=>{
    if(err){
        console.log(err)
    }else{
        fs.readdir(path2,(err,list)=>{
            if(err){
                console.log(err);
            }else{
                console.log(list)
            }
        })
    }
})