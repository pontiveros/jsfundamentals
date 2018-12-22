'use strict';

exports.printMessage = (message) => {
    if (message != undefined) {
        console.log(message);
    } else {
        console.log("The value passed is undefined.");
    }
};

exports.defaultParamters = (a = 1, b = 0) => {
    return a + b;
}

exports.callbackMethod = (name, score, fnCallback) => {
    let message = `The score for ${name} is ${score} at today.`;
    fnCallback(message);
};

exports.fnSeriesParam1 = (a = [0]) => {
    let result = 0;
    a.forEach(i => {
        result = result + i;
    });
    return result;
};

exports.fnSeriesParam2 = (...a) => {
    return a.reduce((b, c) => { // Series params 
        return b + c;
    });
};

exports.fnDefaultParamUndefined = (a, b = 2, fnCallback) => { 
    // This function has a multiplication inside, if the second param is undefined, default factor is 2.
    console.log(`Params: ${arguments.length}`);
    console.log(`a vs arguments[0] ${a == arguments[0]}`);
    console.log(`b vs arguments[1] ${b == arguments[1]}`);
    console.log(`a vs arguments[0] ${a === arguments[0]}`);
    console.log(`b vs arguments[1] ${b === arguments[1]}`);
    fnCallback(a * 2);

    console.log("function name");
    console.log(fnOnEvent.name); // this is the way to get the property called name from the functions.
};

exports.fnEmptyParams = () => {
    if (arguments.length > 0) {
        arguments.forEach((value) => {
            console.log(`Param value: ${value}`);
        });
    }
};


exports.fnMath = (items) => {
    if (items.length > 1) {
        const r = Math.max(...items); // syntax how to send array as param into this function.
        console.log(`The max value is ${r}`);
    } else {
        console.log(`Items has one or less members.`);
    }
}

function Person(name) {
    this.name = name;
    return this;
}

exports.fnTestFnObject = () => {
    var person1 = new Person("Pedro");
    // var person2 = Person("Candelario"); // Error, comment this code 

    console.log(person1);
    // console.log(person2);
};

// Internals functions 

function fnOnEvent() {
    console.log("Do nothing...");
}