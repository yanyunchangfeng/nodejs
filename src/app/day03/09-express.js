var express = require('express');
var app = express();
app.listen(8000);


// app.use("/h",express.static('html'))
//静态请求
app.use(express.static(__dirname));
//动态请求
app.get('/html/login.do',(req,res)=>{

})

