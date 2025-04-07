/* Funkcija gauna sakini, kuris atrodo taip:
pvz.: "Studentai: jonas, Maryte, peTras, ONA."
Funkcijos darbas yra grazinti teisingai perrasyta sakini.
T.y. reikiai istaisyti vardu rasyma.
pvz.: "Studentai: Jonas, Maryte, Petras, Ona."
*/

/* 
- atsiskiriame vardus is originalaus teksto 
- konvertuojame teksta i mazasias raides
- issiskaidyti individualius vardus i masyva
- ciklas eina per individualius vardus ir:
    -pasiima pirma raide
    -ja padydina
    -apjungia i galutini normalu varda
- pagaminame galutini reikiama sakini
*/

/*function correctSentence(text) {
    const parts = text.split(': ');
    const names = parts[1].slice
        .slice(0, -1)
        .toLowerCase()
        .split(',');  
    
    for (let i= 0; i < names.length; i++) {
        const names = names[i];
        const firsLetter = names[0].toUpperCase();
        const restName = names.slice(1);
       
        console.log(names, '---', firsLetter);
        
     }

    return text;
}

console.log(correctSentence('Siuo metu klaseje yra; jonas, MAryte, PEtras, Ona.'));
*/

function correctSentence(text) {
    const parts = text.split(': ');
    const names = parts[1]
        .slice(0, -1)
        .toLowerCase()
        .split(', ');

    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const firstLetter = name[0].toUpperCase();
        const restName = name.slice(1);

        const newName = firstLetter + restName;
        names[i] = newName;
    }

    return parts[0] + ': ' + names.join(', ') + '.';
}

console.log(correctSentence('Siuo metu klaseje yra: jonas, Maryte, peTRas, ONA.'));