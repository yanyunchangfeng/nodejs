var http = require('http');

var server = http.createServer();
server.on('request',(req,res)=>{
   res.statusCode = 200;//设置响应状态码
   res.setHeader('Content-Type',"text/html;charset=UTF-8");//设置响应消息头部
   res.write("<html>") //向客户端输出响应主体内容
   res.write("<head>")
   res.write("</head>")
   res.write("<h3>欢迎访问我的页面</h3>")
   res.write("</body>")
   res.write("</html>")
   res.end();
})
server.listen(8000,'127.0.0.1',err=>{
    if(err){
        console.log('web服务器启动失败，错误消息为：')
        console.log(err)
    }else{
        console.log('web服务器启动成功，正在监听8000端口')
    }
})