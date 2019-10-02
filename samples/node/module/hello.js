'use strict';

var s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}

function hi(name) {
    console.log('Hi, ' + name + '!');
}

function goodbye(name) {
    console.log('Goodbye, ' + name + '!');
}

var direBonjour = function(){
    console.log('Bonjour>');
}
module.exports = {
    greet: greet,
    hi: hi,
    goodbye: goodbye,
    bonjour: direBonjour
};
