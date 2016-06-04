var sayHello = function() {
    console.info(new Date().getTime());
};

var timer = setInterval(sayHello, 2000);
timer.unref();
setTimeout(function() {
    //如果您之前 unref() 了一个定时器，您可以调用 ref() 来明确要求定时器让程序保持运行。
    //如果定时器已被 ref 那么再次调用 ref 不会产生其它影响。
    timer.ref();
});
