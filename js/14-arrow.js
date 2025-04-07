const n1 = 7;
const n2 = 5;

//function declaration
 function sum(a, b) {
    return a+ b;

 }
 console.log (`${n1} + ${n2} = ${sum(n1, n2)}`);

 // 2) kintamajam priskirta anonimine funkcija 
 const minus = function (a, b) {
    return a - b;
 }

console.log(`${n1} - ${n2} = ${minus(n1, n2)}`);

//3)arrow function
const multi = function (a, b) {
    return a * b;

}
console.log(`${n1} * ${n2} = ${multi(n1, n2)}`);

// 3a) arrow function
// jei logikos bloke yra tik 1 salyga
// tai gamlimas nerasyti {return}
const div = function (a, b) {
    return a / b;

}
console.log(`${n1} / ${n2} = ${div(n1, n2)}`);

// 3b) arrow function

const sqr = (a) => a*a ;
console.log(`${n1} / ${n1} = ${sqr(n1)}`);
console.log(`${n2} / ${n2} = ${sqr(n2)}`);


// Funkcija grazina vardo pirma raide
const firstLetter = (name) =>  name[0];

console.log(firstLetter('Jonas'))
console.log(firstLetter('Maryte'))

//funkcija grazina pataisyta varda
function correctName (name) {
    const first = name[0].toUpperCase();
    const rest = name.slice(1).toLowerCase();
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
}
console.log(correctName('jonas'))
console.log(correctName('Maryte'))
console.log(correctName('peTras'))
console.log(correctName('ONA'))

//funkcija grazina atbuline teksta
function reverseString(text) {
    return text.split('').reverse().join('');
}
console.log(reverseString('labas'));
console.log(reverseString('kedes'));
console.log(reverseString('alus'));