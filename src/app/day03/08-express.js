var express = require('express');
var app = express();
app.listen(8000);
app.get("/",(req,res)=>{
    res.send('你访问的是根目录')
})
app.get("/html/index.html",(req,res)=>{
    res.send('你访问的是html目录')
})
app.get(/\/log/,(req,res)=>{
    res.send('你访问的是log目录')
})