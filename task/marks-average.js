function marksAverage(list) {
 //patikriname,  ar gavom masyva
 // sumuojame visus skaicius ir jus kieki:
let sum = 0;
let count = 0;
 //   einame per visa masyva ir imame kiekviena skaiciu 
 //   jei sutinkame ne skiaciu, tai ji ignoruojame
 //   jei sutinkame skaiciu,padidiname suma
 //   jei sutinkame skaiciu, padidiname kieki 
 //   jei sutinkame skaiciu, kuri nera no 1 iki 10, tai ignoruojame

    return sum / count ;

}

console.log(marksAverage([]));
console.log(marksAverage([10]));
console.log(marksAverage([2]));
console.log(marksAverage([10, 2, 8, 4, 6]));
console.log(marksAverage(['n', 5, 3]));
console.log(marksAverage(['n']));
console.log(marksAverage([8, 'n', 4, 7]));


console.log(marksAverage('Labas'));
console.log(marksAverage(true));


