'use strict';

exports.getValueVar = function (condition) { // how to export a function outside the file or module
    if (condition) {
        var value = "blue";
    } else {
        return null;
    }

    return value; // value is still visible here, if it were "let" it would not be available
}

exports.getValueLet = function (condition) { // how to export a function outside the file or module
    if (condition) {
        let value = "blue";
    } else {
        return null;
    }

    // return value; // this sentence throw an exception
}

exports.printScopeVariable = (flag) => { // export an arrow function 
    var a = 100; // a declare twice, but in diff scope, perfect works!
    if (flag) {
        let a = 200;
        console.log(`variable a inside flag is equal to ${a}`);
    } 

    console.log(`variable a outside flag is equal to ${a}`);
};

exports.testObjConst = () => {
    const animal = {
        specie : "cat",
        age : 25,
        printValues : () => {
            console.log(`Animal - Specie: ${animal.specie}`);
            console.log(`Animal - Age: ${animal.age}`);
        }
    };

    console.log(`animal specie: ${animal.specie} - age: ${animal.age}`);
    
    animal.specie = "dog"; // object's property modification is allowed, even if the object is a const.
    console.log(`animal specie: ${animal.specie} - age: ${animal.age}`);
    animal.printValues();
};

exports.loopVarSamples = () => {
    // sampleVar1();
    console.log("***********");
    sampleVar2();
}

function sampleVar1() {
    var funcs = []; // array declaration
    for (var i = 0; i < 10; i++) {
        funcs.push(function () {
            console.log(i); // Print the current value of i? .... NO!!!
        });
    }

    funcs.forEach((f) => {
        f(); // check what is printing in console.
    });
}

function sampleVar2() {
    var funcs2 = []; // array declaration
    for (var i = 0; i < 10; i++) {
        funcs2.push((function (value) {
            return function() {
                console.log(value); // print the current value of i? .... YES!!! why?
            }
        }(i))); // IIFE resource to avoid the before situation
        // Immediate Invoked Function Expression
    }

    console.log("start loop");

    funcs2.forEach(function (f) {
        f(); // check what is printing in console.
    });
}

exports.loopLetSample = () => {
    let f2 = []; // Array declarations

    for (let c = 0; c < 100; c++) {
        f2.push(function () { // Add one function to each item.
            console.log(c);
        });
    } 

    f2.forEach((f3) => {
        f3(); // Each function is invoked in this loop.
    }); 
}
