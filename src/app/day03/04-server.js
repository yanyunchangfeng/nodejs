var http = require('http');

var server = http.createServer(function(request,response){

})
//或者
server.on('request',(req,res)=>{
    console.log('web服务器接收到一个请求...')
    console.log(req.method)
    console.log(req.url)
    console.log(req.httpVersion)
    console.log(req.headers)
})

server.listen('8000','127.0.0.1',err=>{
    if(err){
        console.log('web服务器启动失败，错误消息为：')
        console.log(err)
    }else{
        console.log('web服务器启动成功，正在监听8000端口')
    }
})