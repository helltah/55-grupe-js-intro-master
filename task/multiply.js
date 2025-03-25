function multiply(a, b) {
    if (typeof a !== 'number') {
        return 'Pirmasis parametras turi buti skaicius. ';
    }

    //if (jeigu b nera skaicius)
    //  return 'Antrasis parametras turi buti skaicius.';

if (typeof b !== 'number') {
return 'Antrasis parametras turi buti skaicius.';
}
if (isNaN(a)){
    return 'Pirmasis parametras nera normalus skaicius.'
}

if (isNaN(b)){
    return 'Antrasis parametras nera normalus skaiciuis.'
}


return a * b;
}

console.log(multiply(2, 2));
console.log(multiply(7, 5));
console.log(multiply(7, -2));
console.log(multiply(-2, 7));
console.log(multiply(-15, 0));
console.log(multiply(2, 2));


console.log(multiply('Labas', 'rytas'));

console.log(multiply( NaN, 5));
console.log(multiply( 5, NaN));
console.log(multiply( NaN, NaN));


console.log(multiply(2, Infinity));
console.log(multiply(Infinity, 3));
console.log(multiply(Infinity, Infinity));

console.log(multiply(2, -Infinity));
console.log(multiply(Infinity, -3));
console.log(multiply(-Infinity, -Infinity));




