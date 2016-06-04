var fs = require("fs");
const Console = require('console').Console;


const stdout = fs.createWriteStream("./stdout.log");
const stderr = fs.createWriteStream("./stderr.log");


const logger = new Console(stdout, stderr);

var count = 6;
logger.log("【Log】"+new Date() + " - " + count);
logger.info("【Info】"+new Date() + " - " + count);
logger.warn("【Warn】"+new Date() + " - " + count);
logger.error("【Error】"+new Date() + " - " + count);
