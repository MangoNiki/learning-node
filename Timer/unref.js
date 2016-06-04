var sayHello = function() {
    console.info(new Date().getTime());
};

var timer = setInterval(sayHello, 2000);
//setTimeout 和 setInterval 所返回的值同时具有 timer.unref() 方法，允许您创建一个活动的、但当它是事件循环中仅剩的项目时不会保持程序运行的定时器。
//如果定时器已被 unref，再次调用 unref 不会产生其它影响。
//在 setTimeout 的情景中当您 unref 您会创建另一个定时器，并唤醒事件循环。
//创建太多这种定时器可能会影响事件循环的性能，慎用。
timer.unref();
