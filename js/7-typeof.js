/*
TYPEOF - duomenu tipo nustatymo operatorius
*/

console.log(typeof 5);
console.log(typeof -5);
console.log(typeof 3.14);
console.log(typeof 'asd');
console.log(typeof '');
console.log(typeof true);
console.log(typeof false);
console.log(typeof false);
console.log(typeof []);
console.log(typeof 1, 2);
console.log(['a', 'b', 'c']);
console.log([true, false]);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof undefined);

const a = null;
if (null === null) {
    console.log('NULL');
}

const b = [];
if (Array.isArray(b)) {
    console.log('ARRAY ');
} else {
    console.log ('ne arejus');
}
