var mysql = require('mysql');
var options  ={
    host:'127.0.0.1',
    user:'root',
    password:'yanyunchangfeng',
    database:'yanyunchangfeng'
}
var conn = mysql.createConnection(options);
conn.connect()//可以忽略
var sql = "SELECT * FROM yycf";
conn.query(sql,(err,rows)=>{
    if(err){
        console.log('数据查询失败')
    }else{
        console.log('查询完成')
        console.log(rows)
    }
});
conn.end();//断开与msql服务器的连接