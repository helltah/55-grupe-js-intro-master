function empty() {
    // logika
}

const a = empty();
const b = empty();
console.log(a);
console.log(b);

console.log(empty());

function penki() {
    return 5;
}

const c = penki();
console.log(c);

function hi() {
    return 'Labas!';
}

const d = hi();
console.log(d);

// Jonas -> Labas, Jonas!
// Maryte -> Labas, Maryte!
// Petras -> Labas, Petras!
// Ona -> Labas, Ona!

function hiPerson(name) {
    // return 'Labas, ' + name + '!';
    return `Labas, ${name}!`;
}

console.log(hiPerson('Jonas'));
console.log(hiPerson('Maryte'));
console.log(hiPerson('Petras'));
console.log(hiPerson('Ona'));
console.log(hiPerson());

console.clear();

// 2+2 = 4
// 7+5 = 12

function sum(a, b) {
    return a + b;
}

const e = sum(2, 2);
console.log(e);

const f = sum(7, 5);
console.log(f);

const g = sum(-7, 15);
console.log(g);



// 100 -> 121 Eur
// 200 -> 242 Eur
// 73 -> 88.33 Eur

function priceWithVAT(price) {
    const updatedPrice = price * 1.21;

    return updatedPrice + ' Eur';
}

const p1 = priceWithVAT(100);
console.log(p1);

const p2 = priceWithVAT(200);
console.log(p2);

const p3 = priceWithVAT(73);
console.log(p3);


// Jonas -> Zodzis "Jonas" yra sudarytas is 5 raidziu.
// Maryte -> Zodzis "Maryte" yra sudarytas is 6 raidziu.
// Petras -> Zodzis "Petras" yra sudarytas is 6 raidziu.
// Ona -> Zodzis "Ona" yra sudarytas is 3 raidziu.

function nameLength(name) {
    const size = name.length;
    return `Zodzis "${name}" yra sudarytas is ${size} raidziu.`;
}

const nl1 = nameLength('Jonas');
const nl2 = nameLength('Maryte');
const nl3 = nameLength('Petras');
const nl4 = nameLength('Ona');
console.log(nl1);
console.log(nl2);
console.log(nl3);
console.log(nl4);


// 5   -> Gautas skaicius: 5.
// -13 -> Gautas skaicius: -13.
// 777 -> Gautas skaicius: 777.

function gotNumber(n) {
    // return 'Gautas skaicius: ' + n + '.';
    return `Gautas skaicius: ${n}.`;
}

const gn1 = gotNumber(5);
const gn2 = gotNumber(-13);
const gn3 = gotNumber(777);

console.log(gn1);
console.log(gn2);
console.log(gn3);

;

// 2, 2     ->  2 + 2 = 4
// 7, 5     ->  7 + 5 = 12
// -7, 15   ->  -7 + 15 = 8

function sum(a, b) {
    const result = a + b;
    return `${a} + ${b} = ${result}`;
}

console.log(sum(2, 2));
console.log(sum(7, 5));
console.log(sum(-7, 15));
console.log(sum(748562514562, 148562514562));



// ND - perdaryti analogiskai su -, * ir / operacijomis

// 2,2  -> 2 * 2 = 4
// 7, 5 -> 7 * 5 = 35
// 10, 10 -> 10 * 10 + 100

function sum(c, d) {
    const result = c * d;
    return `${c} * ${d} = ${result}`;
}


console.log(sum(7,5));
console.log(sum(2,2));
console.log(sum(10,10));





function sum(p, i) {
    const result = p - i;
    return `${p} - ${i} = ${result}`;
}

 console.log(sum(21,    12));
 console.log(sum(9897,  1363));
 console.log(sum(12343, 1214));



 function sum(w ,e) {
    const result = w / e
    return `${w} / ${e} = ${result}`;
 }
    console.log(sum(5000, 8,5));
    console.log(sum(4361475, 123));
    console.log(sum(1235164, 4)); 