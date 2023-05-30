/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const n1 = 3
const n2 = 5

const biggerNumber = n1 > n2 ? 'true'
  : n2 > n1 
  ? 'false'
  : 'Nothing'

console.log(biggerNumber)


if (n1 > n2) {
  console.log('3 maggiore di 5')
} else if (n2 > n1) {
  console.log('5 maggiore di 3')
} else {
  console.log('undefined')
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numero = 10

const answer = numero !== 5 ? 'numero diverso da 5' : numero === 5 ? 'numero uguale a 5' : 'Nothing'
console.log(answer)


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/


/* SCRIVI QUI LA TUA RISPOSTA */
const dividendo1 = 7
const dividendo2 = 5

if (dividendo1 % 5 === 0) {
  console.log('numero divisibile per 5')
} else if (dividendo1 % 5 !== 0) {
  console.log('numero non divisibile per 5')
} else {
  console.log('undefined')
}

if (dividendo2 % 5 === 0) {
  console.log('numero divisibile per 5')
} else if (dividendo2 % 5 !== 0) {
  console.log('numero non divisibile per 5')
} else {
  console.log('undefined')
}

/* DOMANDA                                                                                                                                                    Check */
// const answerEs3 = dividendo1 % 5 === 0 ? 'numero divisibile per 5' : dividendo2 % 5 !== 0 ? 'numero non divisibile per 5' : 'Nothing'
// console.log(answerEs3)

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numero12 = 12
const numero4 = 4
if (numero12 === 8) {
  console.log('numero uguale a 8') 
} else if (numero12 - numero4 === 8) {
  console.log('12 - 4 è uguale a 8')
} else {
  console.log('Il numero non è uguale a 8 e nemmeno il risultato della sotrazione è 8')
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const item1 = 10
const item2 = 20
const item3 = 30
const totalShoppingCart = item1 + item2 + item3

const answerEs5 = totalShoppingCart > 50 ? 'La spedizione è gratuita' : totalShoppingCart < 50 ? 'La spedizione costa 10 euro' : 'Nothing'
console.log(answerEs5)

/* ESERCIZIO 6                                                                                                                                                   Check
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7                                                                                                                                                   Check
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var numArray = [140000, 104, 99];
numArray.sort(function(a, b) {
  return a - b;
});

console.log(numArray);

/* ESERCIZIO 8                                                                                                                                                   Check
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// const numbervalue = 5
// if (console.log{typeof numbervalue === 'number')) {
//   console.log('Il valore è un numero')
// } else if (console.log typeof numbervalue !== 'number'){
//   console.log('Il valore non è un numero')
// } else {
//   console.log('Nothing')
// }



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const even = 2
const odd = 1

if (even % 2 === 0) {
  console.log('numero pari')
} else if (even % 2 !== 0) {
  console.log('numero dispari')
} else {
  console.log('undefined')
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7
if (val < 10 && val > 5) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

// const me = {
//   name: 'John',
//   lastName: 'Doe',
//   skills: ['javascript', 'html', 'css'],
// }

/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto'
console.log(me.city)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName
console.log(me.lastName)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.skills[2]
console.log(me.skills)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const myArray = []
console.log(myArray)

myArray.push(1,2,3,4,5,6,7,8,9,10)

console.log(myArray)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const index = myArray.indexOf(10);

if (index !== -1) {
    myArray[index] = 100;
}

console.log(myArray)

