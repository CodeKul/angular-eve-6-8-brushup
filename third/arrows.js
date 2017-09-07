let my = 10
if (true) {
    let my = 20
}

console.log(` 
    The value is ${my}
    axfads
    afadsdf
    ${10 + 20}
    `)

let fn = function() {
    console.log(`This is function`)
    //
    //
    //
    //code
}

function heelo() {
    console.log(this);
     console.log('in heelo end')
}

heelo();

 var fn2 = () => console.log(this) // arrow

 fn2();

let fn3 = nm => { // arrows or lambda
    return nm * nm;
}





