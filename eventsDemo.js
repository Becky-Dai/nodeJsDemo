import { error } from 'console';
import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name){
    console.log('Hello World '+name);
}

function goodbyeHandler(name){
    console.log('Bye World '+name);
}

myEmitter.on('greet',greetHandler);
myEmitter.on('Bye',goodbyeHandler);

myEmitter.emit('greet','Becky');
myEmitter.emit('Bye','Becky');

myEmitter.on('error', (err) =>{
    console.log('error',err);
})

myEmitter.emit('error',new Error('wrong'));