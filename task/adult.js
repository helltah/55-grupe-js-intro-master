/*
Reikalinga funkcija, kuri gauna vartotojo amziu (metais) ir atitinkamai grazina zodi:
- suages
- vaikas
Amzius ribos kriterijus : >=18 metu.
*/

function isAdult(age) {
if (age >= 18) {
    return 'suauges';
}else {
    return 'vaikas';
}
}

console.log(isAdult(18));
console.log(isAdult(1));
console.log(isAdult(17));
console.log(isAdult(99));
