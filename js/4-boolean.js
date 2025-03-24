/*
BOOLEAN - logine reiksme
- true
- false

Loginiai operatoriai:
&& - and (ir) (prioritetas, kaip daugybos)
|| - or (arba)
*/

const isEven = true;
const isOdd = false;

console.log('&& ---------');
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('|| ---------');
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log('Ar mergina eis i pasimatyma?');
const arGrazus = true;
const arTurtingas = true;

console.log(arGrazus && arTurtingas);

console.log('Ar vaikinas eis i pasimatyma?');
const arGrazi = true;
const arTurtinga = false;

console.log(arGrazi || arTurtinga);

console.clear();

// skaiciuoja is eiles????
console.log(1, true && true || true);
console.log(2, true && true || false);
console.log(3, true && false || true);
console.log(4, true && false || false);
console.log(5, false && true || true);
console.log(6, false && true || false);
console.log(7, false && false || true);
console.log(8, false && false || false);

console.clear();
console.log(1, true || true && true);
console.log(2, true || true && false);
console.log(3, true || false && true);
console.log(4, true || false && false);
console.log(5, false || true && true);
console.log(6, false || true && false);
console.log(7, false || false && true);
console.log(8, false || false && false);

console.log('--------------------------------')

// ND: Surasyti visas imanomas kombinacijas, su && ir ||, kai yra naudojamos 4 boolean reiksmes.
// ND: Kiek gavosi kombinaciju?


console.log(' && - && - &&;   && - && - ||')

console.log(true && true && true && true);  //1
console.log(true && true && true && false); //2
console.log(true && true && true || true);
console.log(true && true && true || false);

console.log('----------------')

console.log(true && true && false && true);  //3
console.log(true && true && false && false); //4
console.log(true && true && false || true);
console.log(true && true && false || false);

console.log('----------------')

console.log(true && false && true && true); //5
console.log(true && false && true && false); //6
console.log(true && false && true || true);
console.log(true && false && true || false);

console.log('----------------')

console.log(true && false && false && true); //7
console.log(true && false && false && false); //8
console.log(true && false && false || true);
console.log(true && false && false || false);

console.log('----------------')

console.log(false && true && true && true);  //9
console.log(false && true && true && false); //10
console.log(false && true && true || true);
console.log(false && true && true || false);

console.log('----------------')

console.log(false && true && false && true); //11
console.log(false && true && false && false); //12
console.log(false && true && false || true);
console.log(false && true && false || false);

console.log('---------------')

console.log(false && false && true && true); //13
console.log(false && false && true && false); //14
console.log(false && false && true || true);
console.log(false && false && true || false);

console.log('---------------')

console.log(false && false && false && true); //15
console.log(false && false && false && false); //16
console.log(false && false && false || true);
console.log(false && false && false || false);

console.log(' && - || - &&;   && - || - ||')

console.log(true && true || true && true);  //1
console.log(true && true || true || false); //2
console.log(true && true || true && true);
console.log(true && true || true || false);

console.log('----------------')

console.log(true && true || false && true);  //3
console.log(true && true || false || false); //4
console.log(true && true || false && true);
console.log(true && true || false || false);

console.log('----------------')

console.log(true && false || true && true); //5
console.log(true && false || true || false); //6
console.log(true && false || true && true);
console.log(true && false || true || false);

console.log('----------------')

console.log(true && false || false && true); //7
console.log(true && false || false || false); //8
console.log(true && false || false && true);
console.log(true && false || false || false);

console.log('----------------')

console.log(false && true || true && true);  //9
console.log(false && true || true || false); //10
console.log(false && true || true && true);
console.log(false && true || true || false);

console.log('----------------')

console.log(false && true || false && true); //11
console.log(false && true || false || false); //12
console.log(false && true || false && true);
console.log(false && true || false || false);

console.log('---------------')

console.log(false && false || true && true); //13
console.log(false && false || true || false); //14
console.log(false && false || true && true);
console.log(false && false || true || false);

console.log('---------------')

console.log(false && false || false && true); //15
console.log(false && false || false || false); //16
console.log(false && false || false && true);
console.log(false && false || false || false);


console.log(' || - && - &&;   || - && - ||')




console.log(true || true && true && true);  //1
console.log(true || true && true || false); //2
console.log(true || true && true && true);
console.log(true || true && true || false);

console.log('----------------')

console.log(true || true && false && true);  //3
console.log(true || true && false || false); //4
console.log(true || true && false && true);
console.log(true || true && false || false);

console.log('----------------')

console.log(true || false && true && true); //5
console.log(true || false && true || false); //6
console.log(true || false && true && true);
console.log(true || false && true || false);

console.log('----------------')

console.log(true || false && false && true); //7
console.log(true || false && false || false); //8
console.log(true || false && false && true);
console.log(true || false && false || false);

console.log('----------------')

console.log(false || true && true && true);  //9
console.log(false || true && true || false); //10
console.log(false || true && true && true);
console.log(false || true && true || false);

console.log('----------------')

console.log(false || true && false && true); //11
console.log(false || true && false || false); //12
console.log(false || true && false && true);
console.log(false || true && false || false);

console.log('---------------')

console.log(false || false && true && true); //13
console.log(false || false && true || false); //14
console.log(false || false && true && true);
console.log(false || false && true || false);

console.log('---------------')

console.log(false || false && false && true); //15
console.log(false || false && false || false); //16
console.log(false || false && false && true);
console.log(false || false && false || false);


console.log(' || - && - &&;   || - || - ||')


console.log(true || true && true && true);  //1
console.log(true || true && true || false); //2
console.log(true || true || true && true);
console.log(true || true || true || false);

console.log('----------------')

console.log(true || true && false && true);  //3
console.log(true || true && false || false); //4
console.log(true || true || false && true);
console.log(true || true || false || false);

console.log('----------------')

console.log(true || false && true && true); //5
console.log(true || false && true || false); //6
console.log(true || false || true && true);
console.log(true || false || true || false);

console.log('----------------')

console.log(true || false && false && true); //7
console.log(true || false && false || false); //8
console.log(true || false || false && true);
console.log(true || false || false || false);

console.log('----------------')

console.log(false || true && true && true);  //9
console.log(false || true && true || false); //10
console.log(false || true || true && true);
console.log(false || true || true || false);

console.log('----------------')

console.log(false || true && false && true); //11
console.log(false || true && false || false); //12
console.log(false || true || false && true);
console.log(false || true || false || false);

console.log('---------------')

console.log(false || false && true && true); //13
console.log(false || false && true || false); //14
console.log(false || false || true && true);
console.log(false || false || true || false);

console.log('---------------')

console.log(false || false && false && true); //15
console.log(false || false && false || false); //16
console.log(false || false || false && true);
console.log(false || false || false || false);







