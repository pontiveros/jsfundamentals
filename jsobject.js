'use strict';

const { printScopeVariable } = require("./blockbinding");

exports.objCreateBasicObject = () => {
    let obj = Object.create(null); // this sentence creates an empty object
    obj.name = "Pedro Ontiveros";  // set a name property at the flight
    console.log(`The object name property is: ${obj.name}`); // checking the property value

    let vehicle1 = {
        type : "car",
        transmission : "fwd",
        color :"black",
        engine : "2.5L",
        printValues : (mySelf) => {
            console.log(`type: ${mySelf.type}`);
            console.log(`transmission: ${mySelf.transmission}`);
            console.log(`color: ${mySelf.color}`);
            console.log(`engine: ${mySelf.engine}`);
        }
    };

    let vehicle2 = Object.create(vehicle1);
    vehicle2.type = "SUV";
    vehicle2.transmission = "awd";

    console.log('First car');
    vehicle1.printValues(vehicle1);
    console.log('Second car');
    vehicle2.printValues(vehicle2);
};

exports.objInstance = (flag = 0) => {
    class Product {
         constructor(code, name, price) {
            this.code  = code;
            this.name  = name;
            this.price = price;
        }

        printValues() {
            console.log('======================');
            console.log(`code : ${this.code}`);
            console.log(`name : ${this.name}`);
            console.log(`price : ${this.price} \n`);
        };
    };

    if (flag == 0) {
        let product1 = new Product(100, 'Screw 1/2', 1.45);
        let product2 = new Product(200, 'IC 555', 2.34);

        product1.printValues();
        product2.printValues();
    } else {
        let items = [
            new Product(300, 'Led 1/4 watt', 1.05), 
            new Product(400, 'Transiston NPN 3990', 2.45), 
            new Product(500, 'Resistor 3/4 watt', 1.75),
            new Product(600, 'Pot 100K', 3.15), 
            new Product(601, 'Display 7 segment led 1/4 watt', 19.85), 
        ];

        items.forEach(element => {
            element.printValues();    
        });
    }
}

exports.customerInfo = () => {

    class Customer {
        constructor(code, name, email, status) {
            this.code   = code; 
            this.name   = name;
            this.email  = email;
            this.status = status;
        };

        printValues(fullInfo = 0) {
            console.log('=====================');
            console.log(`CODE: ${this.code}`);
            console.log(`NAME: ${this.name}`);

            if (fullInfo != 0) {
                console.log(`EMAIL: ${this.email}`);
                console.log(`STATUS: ${this.status}`);
            } 

            console.log('');            
        };
    };

    let items = [
        new Customer(1001, 'Daniela Rodriguez', 'drodriguez@email.com', 1),
        new Customer(1002, 'Juan Perez', 'juan.perez@email.com', 1),
        new Customer(1022, 'Romina Smith', 'rsmith@email.com', 1),
        new Customer(1021, 'John Doe', 'john.doe@email.com', 1),
        new Customer(5021, 'Kristen Russell', 'krussell@email.com', 1),
        new Customer(4001, 'Anne Kaitlin Williams', 'awilliams@email.com', 1),
        new Customer(4421, 'Kevin Courtney', 'kcourtney@email.com', 1),
        new Customer(1009, 'Samantha Kloss', 'samkloss@email.com', 1),
        new Customer(3209, 'Rachel Lancini', 'samkloss@email.com', 1),
    ];

    items.forEach(element => {
        element.printValues();
    });

    let sortItems = items.sort((a, b) => {
        const c1 = a.name.toUpperCase(),
              c2 = b.name.toUpperCase();

        if (c1 > c2) {
            return 1;
        } else if ( c1 < c2 ) {
            return -1 
        } else {
            return 0;
        }
    });

    sortItems.forEach(element => {
        element.printValues();
    });
}

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

 