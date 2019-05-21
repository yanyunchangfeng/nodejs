var fs = require('fs');
var path1 = './log';
var path2 = './log/out.log';
var stats1 = fs.statSync(path1);//同步读取目录
console.log(stats1)
var stats2 = fs.statSync(path2);//同步读取目录
console.log(stats2)
fs.stat(path1,(err,stats)=>{
    if(err){
        console.log(err)
    }else{
        console.log(stats.isFile() )
    }
})
console.log(stats1.isFile())
console.log(stats1.isDirectory())