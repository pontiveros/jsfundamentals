'use strict';

exports.testUnicode1 = (data) => {
    const text = data;

    console.log(text);
    console.log(text.length);
    console.log(text.charAt(0));
    console.log(text.charAt(1));
    console.log(text.charCodeAt(0));
    console.log(text.charCodeAt(1));
};

exports.sortStrings = (items) => {
    items = items.sort();
    items.forEach(element => {
        console.log(element);
    });
};

exports.newStringMethods = (key) => {
    // Step 1, includes method
    const name = "This is a message for testing purposes.";
    if (name.includes(key)) {
        console.log("YES");
    } else {
        console.log("NO");
    }

    if (name.startsWith(key)) {
        console.log("YES");
    } else {
        console.log("NO");
    }

    if (name.endsWith(key)) {
        console.log("YES");
    } else {
        console.log("NO");
    }

    console.log(name.repeat(3));
};

exports.testRegExp1 = (text, regExp) => {
    const myExp = new RegExp(regExp);
    text.forEach((item) => {
        if (myExp.test(item)) {
            console.log("Result: YES ");
        } else {
            console.log("Result: NO ");
        }
    });
};

exports.tagSampleAndCalculation = () => {
    const quantity = 10;
    const    price = 0.293;
    console.log("Calculation on string substitution");
    console.log(`The total amount for ${quantity} items is: $${(quantity * price).toFixed(3)}`);

    let value = salute`Pedro Ontiveros`; // This is how a tag has to be invoked.
    console.log(value);
};

// Functions 
function salute(tag) { 
    // Basically a tag is a function which will do something and return a value.
    return `This is a message sending by ${tag}`;
}