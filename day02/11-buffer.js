//Buffer
//缓冲区，一块专用于存储数据的内存区域，与string类型相对应，用于存储二进制数据
//Buffer对象的实例，可以通过读取文件获得，也可以手动创建
//Buffer 是Global对象的成员，无需require引用

//var buf1 = new Buffer(32);// DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.

var buf2 = Buffer.alloc(32)//创建一个长度为32字节的缓冲区
// console.log(buf1)
console.log(buf2)

var buf3 = Buffer.from([65,66,67])//创建一个长度为3字节的缓冲区
// console.log(buf3.length)
console.log(buf3.toString())

var buf4 =  Buffer.from('ABCD') //创建一个长度为4字节的缓冲区
console.log(buf4)

var buf5 = Buffer.from('abc燕云长风','utf8');
console.log(buf5.toString())
console.log(buf5.length)
