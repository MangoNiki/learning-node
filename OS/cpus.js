var os = require('os');

console.info(os.cpus());

/*
[{
    model: 'Intel(R) Core(TM) i5-5257U CPU @ 2.70GHz',
    speed: 2700,
    times: { user: 491520, nice: 0, sys: 347880, idle: 4502910, irq: 0 }
}, {
    model: 'Intel(R) Core(TM) i5-5257U CPU @ 2.70GHz',
    speed: 2700,
    times: { user: 114260, nice: 0, sys: 86160, idle: 5141140, irq: 0 }
}, {
    model: 'Intel(R) Core(TM) i5-5257U CPU @ 2.70GHz',
    speed: 2700,
    times: { user: 433900, nice: 0, sys: 237790, idle: 4669870, irq: 0 }
}, {
    model: 'Intel(R) Core(TM) i5-5257U CPU @ 2.70GHz',
    speed: 2700,
    times: { user: 127200, nice: 0, sys: 93570, idle: 5120800, irq: 0 }
}]
*/