'use strict'

const blockbinding = require('./blockbinding.js');
const  jsfunctions = require('./jsfunctions.js');
const workStrings  = require('./teststrings.js');
const       jsMath = require('./jsmath.js');

// testBlockBinding();
testStrings();
// testMath();
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