/*
Funkcija, kuri gavusi zodi, is jo padaro korektiska varda.
*/

function validName(name) {
    const firstletter = name[0].toUpperCase();
    const restLetters = name.slice(1).toLowerCase();

return firstletter + restLetters
}

console.log(validName('jonas')),  '-->', 'Jonas'
console.log(validName('maRYTE')), '-->', 'Maryte'
console.log(validName('PeTras')), '-->',  'Petras'
console.log(validName('ONA')), '-->', 'Ona'