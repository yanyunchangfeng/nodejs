
// process 
console.log(process.arch) //获取CPU架构类型
console.log(process.platform) //获取操作系统类型
console.log(process.env) //获取操作系统环境变量
console.log(process.cwd()) //获取当前文件所在工作目录
console.log(process.execPath) //获取Node.js解释器所在目录
console.log(process.versions) //获取Node.js版本信息
console.log(process.uptime()) //获取Node.js进程运行时间（s）
console.log(process.memoryUsage()) //获取Node.js进程内存使用信息
const pid = process.pid;
console.log(process.pid)//获取进程ID号
console.log(process.kill(pid))//向进程ID号发送退出信号