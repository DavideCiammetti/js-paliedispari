'use strict';

function palindromo(parola){

// prendo input utente
parola = prompt('inserisci una parola: ');
// dichiaro array
const array = [];
const arrayNoSpace = [];
// variabile booleana per uguaglianza
let uguali = true;
// dichiaro puntatore p
let p = parola[0];
let j = 0;

// tolgo spazi dalla parola
for(let i = 0; i < parola.length; i++){
    let space = ' ';
    if(parola[i] !== space){
        arrayNoSpace.push( parola[i]);
    }
}
// inverto l'array
for (j = arrayNoSpace.length - 1; j >= 0; j--) {
    array.push(arrayNoSpace[i]);
}

// valuto se la parola è la stessa o meno
for (let j = 0; j < arrayNoSpace.length; j++) {
    if (arrayNoSpace[j] !== array[j]) {
        uguali = false;
        break;
    }
}

console.log(array);
console.log(arrayNoSpace);

// validazione finale se o meno un palindromo 
if(uguali === true){
   console.log('è un palindromo');
}else{
    console.log('non è un palindromo');
}


}

palindromo();