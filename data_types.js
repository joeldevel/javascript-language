// There are 7 data types
// number
// string
// boolean
// object
// function
// undefined
// symbol

let x;
let aSymbol = Symbol("banana");
let types = [10.3, "Hello", true, {name: "john"}, function x(){}, x];

console.log(types);

types.forEach( e => console.log(`typeof (${e})= ${typeof e}`) );

console.log("typeof(aSymbol) ", typeof(aSymbol));

console.log("is null an object? ", typeof(null)=== 'object');
