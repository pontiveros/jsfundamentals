'use strict';

exports.objCreateBasicObject = () => {
    let obj = Object.create(null); // this sentence creates an empty object
    obj.name = "Pedro Ontiveros";  // set a name property at the flight
    console.log(`The object name property is: ${obj.name}`); // checking the property value

    let vehicle1 = {
        type : "car",
        transmission : "fwd",
        color :"black",
        engine : "2.5L",
        printValues : () => {
            console.log(`type: ${vehicle1.type}`);
            console.log(`transmission: ${vehicle1.transmission}`);
            console.log(`color: ${vehicle1.color}`);
            console.log(`engine: ${vehicle1.engine}`);
        }
    };

    let vehicle2 = Object.create(vehicle1);
    vehicle2.type = "SUV";
    vehicle2.transmission = "awd";

    vehicle1.printValues();
    vehicle2.printValues();
};

exports.testObjectParams = () => {
    let book = {
        title : "El Aleph",
        author: "Jorge Luis Borges",
        year : "1945"
    };

    let bookData = pick(book, "author", "year");
    console.log(bookData.author);
    console.log(bookData.year);
}

function pick(object) {
    let result = Object.create(null);

    // start at the second parameter
    for (let i = 1, len = arguments.length; i < len; i++ ) {
        result[arguments[i]] = object[arguments[i]];
    }

    return result;
}

 