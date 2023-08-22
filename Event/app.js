const events = require('events');

const eventEmitter = new events.EventEmitter();

const connectHandler = function connected() {
    console.log('Connected!');   
    
    eventEmitter.emit('data_received');
 }

 eventEmitter.on('connection', connectHandler);


 eventEmitter.on('data_received', function() {
    console.log('Data received!');
 })

 eventEmitter.emit('connection');

 console.log('Program End!');

 /*
    Connected!
    Data received!
    Program End!
 */