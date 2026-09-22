    //Import EventEmitter class
const EventEmitter = require('events');

    //create Button class
class Button extends EventEmitter {}

    //create object
    const button = new Button();

    //click event listener
    button.on('click',() => {
        console.log("Button Clicked");

    });

    //mouseover event listener
    button.on('mouseover', () => {
        console.log("Mouse is over the button ");
    });

    //trigger events
    button.emit('click');
    button.emit('mouseover');