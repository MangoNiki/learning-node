var path = require('path');

console.info(path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile'));
//输出 "/tmp/subfile"
/*
	cd foo/bar
	cd /tmp/file/
	cd ..
	cd a/../subfile
	pwd
 */

console.info(path.resolve('/foo/bar', './baz'));
//输出 "/foo/bar/baz"

console.info(path.resolve('/foo/bar', '/tmp/file/'));
//输出 "/tmp/file"

console.info(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));
//输出 "/MyEnv/GitHub/learning-node/Path/wwwroot/static_files/gif/image.gif"

