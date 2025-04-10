const person = {
    name: 'Jonas',
    age: 99,
    isMArried: true, 
    
}
const keys = Object.keys(person);
 console.log(keys);

for (const key of keys) {
    console.log(person[key]);
}

for (const key in person) {
    console.log(person[key]);
}

//1
const text = 'pavas';

const symbols = {};

for( const s of text) {
    if (symbols[s] ) {
    symbols[s]++;
    }
    else{
        symbols[s] = 1;
    }
}
console.log(symbols)
let max = 0;
for (const s in symbols) {
    if (symbols[s] > max) {
        max = symbols[s];
    }
}
console.log(max);

const maxSymbols = [];
for (const s in symbols) {
    if (symbols[s]) {
        max = symbols[s];
    }
}
console.log(maxSymbols);