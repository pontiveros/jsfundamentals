'use strict'

const blockbinding = require('./blockbinding.js');
const workStrings  = require('./teststrings.js');
const  jsfunctions = require('./jsfunctions.js');
const       jsMath = require('./jsmath.js');
const     jsobject = require('./jsobject.js');

// testBlockBinding();
// testStrings();
// testFunctions();
// testMath();
testObjects();
console.log('end of program!');

// Functions 
function testBlockBinding() {
    console.log(blockbinding.getValueVar(true));
    // console.log(blockbinding.getValueLet(true)); // do not uncomment!
    blockbinding.printScopeVariable(true);
    blockbinding.testObjConst();
    blockbinding.loopVarSamples();
    blockbinding.loopLetSample();
}

function testFunctions() {
    const    name = process.argv[2];
    const message = `Message from ${name}`;
    jsfunctions.printMessage(message);

    // let a = 1009; 
    // let b = 1928;
    // console.log(jsfunctions.defaultParamters(a, b));
    // console.log("Default parameters");
    // console.log(jsfunctions.defaultParamters());

    // jsfunctions.callbackMethod("Pedro", 762, (message = "empty") => {
    //     console.log(message);
    // });

    // console.log("Function Serie 1 ");
    // let r1 = jsfunctions.fnSeriesParam1([1,2,4,8,6,9]);
    // console.log(`result 1: ${r1}`);

    // console.log("Function Serie 2");
    // // let r2 = jsfunctions.fnSeriesParam2(1, 9, -12, -28, 99);
    // let r2 = jsfunctions.fnSeriesParam2(-28, 99);
    // console.log(`result 2: ${r2}`);

    // console.log("Function Series 2 B");
    // let r3 = jsfunctions.fnSeriesParam2(9);
    // console.log(`result 2: ${r3}`);

    // console.log("Default param as undefined");
    // jsfunctions.fnDefaultParamUndefined(10, undefined, (res) => {
    //     console.log(`Result is equql to ${res}`);
    // });

    // console.log("************* Analyzing function params *************");
    // jsfunctions.fnEmptyParams();
    // jsfunctions.fnEmptyParams(12, "Pedro Ontiveros", 299.23);

    // console.log(`************* Array Param *************`);
    // jsfunctions.fnMath([19-33, 82-344, 2-9, 12-181, -11, 81-99, 120-455, -22.3]);

    console.log(`************* fn vs Object *************`);
    jsfunctions.fnTestFnObject();
}

function testStrings() {
    // workStrings.testUnicode1("ဪ");
    // let items = ["Monaco", "Londres", "Buenos Aires", "Roma", "New York", "Madrid", "Paris"];
    // workStrings.sortStrings(items);
    // workStrings.newStringMethods("dar");
    // workStrings.testRegExp1(["hola", "sola", "bola", "cola"], "[mshb]ola");
    workStrings.tagSampleAndCalculation();
}

function testMath() {
    jsMath.testHexa();
}

function testObjects() {
    // jsobject.objCreateBasicObject();
    // jsobject.testObjectParams();
    // jsobject.objInstance(1);
    jsobject.customerInfo();
}