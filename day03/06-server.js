var http = require('http');
var url = require('url');
var fs  =  require('fs')
var server = http.createServer();
server.on('request',(req,res)=>{
    var urlInfo = url.parse(req.url);
    var path  = "."+urlInfo.pathname;
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err)
          
            fs.readFile('./html/404.html',(err,data)=>{
                res.statusCode == 404 //
                res.setHeader('Content-Type','text/html;charset=UTF-8');
                res.write(data);
                res.end();
            })
        }else{
                res.statusCode = 200;//设置响应状态码
                res.setHeader('Content-Type',"text/html;charset=UTF-8");//设置响应消息头部
                res.write(data) //向客户端输出响应主体内容
                res.end();
        }
    })

})
server.listen(8000,'127.0.0.1',err=>{
    if(err){
        console.log('web服务器启动失败，错误消息为：')
        console.log(err)
    }else{
        console.log('web服务器启动成功，正在监听8000端口')
    }
})