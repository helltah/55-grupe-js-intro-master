/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
*/

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 1);
 
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER - 1);


console.log('--------');

console.log(isFinite(5));
console.log(isFinite(-3.14));
console.log(isFinite(Infinity));
console.log(isFinite(NaN));

console.log(isFinite('asdfg'));
console.log(isFinite(true));
console.log(isFinite([]));
console.log(isFinite({}));

console.clear();

console.log(Number.isNaN(5), isNaN(5));
console.log(Number.isNaN(3.14), isNaN(3.14));
console.log(Number.isNaN(Infinity) ,isNaN(Infinity));
console.log(Number.isNaN(NaN),isNaN(NaN)); 

console.log(Number.isNaN('asddf'), isNaN('asdf'))

console.clear();

const userInput = '22';
const userNumber = parseInt(userInput);
const date = userNumber + 5;

console.log(date);

console.log(parseInt('54'));
console.log(parseInt('65.455'));
console.log(parseInt('-54'));
console.log(parseInt('-65.455'));

console.log(parseInt('labas'));
console.log(parseInt('labas111'));
console.log(parseInt('111labas'));
console.log(parseInt('222la44bas33'));

console.clear();

console.log(parseFloat('44'));
console.log(parseFloat('44.4'));
console.log(parseFloat('-44'));
console.log(parseFloat('-44.4'));
console.log(parseFloat('44,4'));
console.log(parseFloat('-44,4'));

console.log(parseFloat('55.65labas'))
console.log(parseFloat('labas55.65'))
console.log(parseFloat('labas55.65'))
console.log(parseFloat('-55-55'))
console.log(parseFloat('-5-5'))
console.log(parseFloat('5-5'))
console.log(parseFloat('+5-5'))
console.log(parseFloat('+5+5'))


const a = 12.3456789
console.log(a);
console.log( typeof a);

console.log(typeof typeof a);
console.log(typeof 'number');
console.log('string');

const b = a.toFixed(4);
console.log(b);
console.log(typeof b);

const c = parseFloat(b);
console.log(c);
console.log(typeof c);

console.log(12.3456789.toFixed(6))
console.log(12.3456789.toFixed(5))
console.log(12.3456789.toFixed(4))
console.log(12.3456789.toFixed(3))
console.log(12.3456789.toFixed(2))
console.log(12.3456789.toFixed(1))
console.log(12.3456789.toFixed(0))

console.log(3.14.toFixed(0))
console.log(3.14.toFixed(1))
console.log(3.14.toFixed(2))
console.log(3.14.toFixed(3))
console.log(3.14.toFixed(4))
console.log(3.14.toFixed(5))
console.log(3.14.toFixed(6))