//DNS提供了域名和IP地址的双向解析功能

var dns =require('dns');
console.log(dns)
dns.lookup('www.google.com',function(err,address,family){
    if(err){
        // console.log(err+'l')
    }else{
        console.log(Array.isArray(address)+ 'lookup')
        console.log(address + 'lookup' + ' ipv'+family)
    }
})
//lookup 把一个域名解析成一个IP地址，从操作系统中查询(缓存)
dns.resolve('www.google.com',function(err,address){
    if(err){
        // console.log(err)
    }else{
        console.log(Array.isArray(address))//true
        console.log(address+ 'resolve')// 172.217.11.132resolve
    }
})

//resolve 把一个域名解析为一个dns的记录解析数组，从dns服务器中查询

//dns.reverse  把一个ip地址反向解析为一组域名

 dns.reverse('172.217.11.132',function(err,hostnames){
    if(err){
        console.log(err)
    }else{
        console.log(hostnames)//[ 'atl26s13-in-f4.1e100.net' ]
    }
 })
