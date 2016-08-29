var os = require('os');

//返回操作系统平台
//Returns the operating system platform. Possible values are 'darwin', 'freebsd', 'linux', 'sunos' or 'win32'. 
console.info(os.platform()); //darwin