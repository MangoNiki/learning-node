var fs = require('fs');


var stats = fs.statSync('./src');
console.info("设备名：" + stats.dev);
console.info("类型：" + stats.mode); //33188-文件、16877-文件夹
console.info("被连接数目：" + stats.nlink);
console.info("所有者的用户id：" + stats.uid);
console.info("所有者的组id：" + stats.gid);
console.info("设备类型：" + stats.rdev);
console.info("文件系统 IO 的块大小：" + stats.blksize);
console.info("号码：" + stats.ino);
console.info("大小：" + stats.size);
console.info("所占据块的数目：" + stats.blocks);
console.info("上次访问时间：" + stats.atime);
console.info("上次修改时间：" + stats.mtime);
console.info("上次改变时间：" + stats.ctime);
console.info("创建时间：" + stats.birthtime);
