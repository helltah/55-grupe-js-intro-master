/*
 OBJECT - OBJEKTAS, (kitose kalbose siek tiek panasus: hashmap, dictionary)
*/

const empty = {};
console.log(empty);

const person = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};
console.log(person);

console.log(`Sveiki, mano vardas ${person['name']}.`);

//Man yra x metu.
console.log(`Man yra ${person['age']} metu.`);
console.log(person['isMarried']);

//Stardantine sintakse, kai paimti reiksme.
console.log(person['name']);
console.log(person['age']);
console.log(person['isMarried']);

// Suprastinta sintakse
console.log(person.name);
console.log(person.age);
console.log(person.isMarried);

const demo = {
    'color': 'red',
    '5':777,
    'is married': true,
};

console.log(demo['color']);
console.log(demo['5']);
console.log(demo[5]);

console.clear();

const pc = {
    cpuCores: 8,
    ram: 16,
    diskSpace: 512,
    diskType: 'ssd',
    os: 'win10',
};
console.log(pc.cpuCores);

pc.ram = 32;
pc.os = '98';

console.log(pc);


console.clear();
 const student = {
    name: 'Maryte',
    age: 88,
    isMarried: false,
    phoneNumbers: [],
    parents: [
        {
            name: 'Petras',
            age: 77,
            phoneNumbers: [11111111, 3333333333],

        },
        {
            name: 'Ona',
            age: 66,
            phoneNumbers: [22222222, 44444444],
        },
    ],
 };
 console.log(student.phoneNumbers.length);
 console.log(student.name);
 console.log(student.parents.length);
 console.log(student.parents[0].name);
 console.log(student.parents[1].name);
 console.log(student.parents[1].phoneNumbers[1]);

 console.clear();

 const studentName1 = 'Jonas';
 const studentAge1 = 99;
 const studentIsMarriede1 = true;

 const studentName2 = 'Maryte';
 const studentAge2 = 88;
 const studentIsMarriede2 =false;


 //                name, age, isMarried
 const student1 = ['Jonas', 99, true];
 const student2 = ['Maryte', 88, false];
 const student3 = ['Petras', false, 77];
 const student4 = ['true', 66, 'Ona'];
 console