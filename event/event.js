const events = require('events'); // 引入events模块
// console.log('events--------->', events);

// events事件
let event = new events.EventEmitter();

// 事件监听 事件绑定 事件注册 
// ## addListener 
//      ### 为指定事件添加一个监听器到监听器数组的尾部。
// ## on一致监听          
//      ### 为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。
// ## once一次监听        
//      ### 为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。
// ## removeListener     
//      ### 移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。它接受两个参数，
//      ### 第一个是事件名称，第二个是回调函数名称。
//      ### 所以在注册事件的时候如果用匿名函数的话，是无法移除函数的
// ## removeAllListeners
//      ### 移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。

let func = data => {
    console.log('数据传输成功,接收到的数据是------------>', data);
    event.removeListener('continue', func)
    event.removeAllListeners('continue')
};

event.on('continue', func);

event.on('preContinue', data => {
    console.log('连接前准备数据…………')
    setTimeout(() => {
        event.emit('continue', data)
    }, 1000);

});

console.log('准备传输数据并触发事件')
// 事件触发
event.emit('preContinue', '数据')
event.emit('preContinue', '数据')



console.log('--------------------------------------------------------------------------------------------------------------------------------------------')
// 演示网上的dome

const eventEmitter = new events.EventEmitter();
let listener1 = () => {
    console.log('监听器1执行！');
};
let listener2 = () => {
    console.log('监听器2执行！');
};

eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', listener2);

let count = eventEmitter.listenerCount('connection');
console.log('------->', `${count}个监听器监听连接事件。`)
eventEmitter.emit('connection');
eventEmitter.removeListener('connection', listener1);
console.log('---------->', 'listener1不在监听');
eventEmitter.emit('connection');
count = eventEmitter.listenerCount('connection');
console.log('------->', `${count}个监听器监听连接事件。`);
console.log("test-------------->程序执行完毕。");
console.log('------------------------------------------------------------------------------------------------------')
