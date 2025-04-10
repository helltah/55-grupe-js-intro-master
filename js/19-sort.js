const texts = ['labas', 'rytas', 'Lietuva', 'duona', 'aviza', 'Zirnis', 'Anakonda']
console.log(texts);

texts.sort();
console.log(texts);

const pseudo = ['d', 'b', 'ca'];
pseudo.sort();

console.log(pseudo);

console.clear();

const numbers =[ 2, 5, 7, 4, 6, 8].sort();

numbers.sort((a, b) => a - b);
console.log(numbers);

numbers.sort((a, b) => b - a);
console.log (numbers);

const people = [
    {name: 'Jonas', age: 77},
    {name: 'Maryte', age: 66},
    {name: 'Petras', age: 99},
    {name: 'Ona', age: 88},
];

people.sort((a, b) => a.age - b.age);
console.log(people);

people.sort((a, b) => a.name.length - b.name.length);
console.log(people);

people.sort((a, b) => a.name > b.name ? 1 : a.name === b.name ? 0 : -1);
console.log(people);