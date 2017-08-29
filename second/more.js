function sayHello() {
    return 'hello';
}

//1. assigining funtions to variable
//var hello = sayHello(); // value of function to variable
//console.log('First '+hello);
//var fnPtr = sayHello; //  function to variable
//console.log(''+fnPtr); 
//fnPtr();

//2. passing the functions as parameter

function drag() {
    console.log('drag called');
}

function mouse(click) {
    console.log('mouse called');
    click();
}

/*mouse(drag);
mouse(function () {
    console.log('anonymus called');
});*/

//3. function should return the function and functions need to defined in side functions

function keyboard() {

    console.log('inside keyboard');

    function buttons() { // clojure
        console.log('inside buttons');
    }

    return function () { //// clojure
        buttons();
        console.log('returning function');
    };
}

var fn = keyboard();
fn();

keyboard()(); //iife

