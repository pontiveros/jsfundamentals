'use strict';

exports.printMessage = (message) => {
    if (message != undefined) {
        console.log(message);
    } else {
        console.log("The value passed is undefined.");
    }
};
