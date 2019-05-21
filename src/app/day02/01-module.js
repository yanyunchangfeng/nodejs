//获取主模块对象
console.log(process.mainModule)
console.log(require.main)
//获取当前模块自己
console.log(module)

//判断当前模块是否主模块
console.log(require.main === module)

//引入其他模块
var fs = require('fs'); //引入文件系统模块
fs.readFile('./05-let.js',(err,data)=>{
    if(err){
        console.log('读取文件失败')
        console.log(err)
    }else{
        console.log(data)
    }
})
//在交互模式下，内置模块无需主动引入，脚本模式下，除了c++底层写入的模块，】其他nodejs写在上层的模块必须主动引入
