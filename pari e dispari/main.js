'use strict';

// funzione numeri casuali da 0 a 5
function random(){
    let random = Math.floor(Math.random() * 6);
    console.log(random);
    return random;
}

function pariDispari(){
    // chiedo all'utente se pari o dispari 
    const sceltaUtente = Number(prompt('scegli se essere pari o dispari 0 = pari 1 = dispari'));
   
    // valido se la scelta dell'utente è corretta
    if(isNaN(sceltaUtente)){
        console.log(`${sceltaUtente} non è un numero`);
        return 0;

    }else if(sceltaUtente !== 0 && sceltaUtente !== 1){
        console.log(`inserisci 1 o 0 per iniziare a giocare`);
        return 0;
    }

     // assegno num random ai players
     const utente = random();
     console.log(`il numero utente è ${utente}`);
     const computer = random();
     console.log(`il numero del computer è ${computer}`);
     let somm = 0;
     
 

    // eseguo la formula per calcolare il resto
    somm = utente + computer;
    somm = somm % 2;
    // condizione che verifica se utente è pari 
  
        if(somm === 0 && sceltaUtente === 1){
            console.log(`l'utente ha perso il numero è pari`);
        }else if(somm === 0 && sceltaUtente === 0){
            console.log(`l'utente ha vinto il numero è pari`);
        }else if(somm === 1 && sceltaUtente === 0){
            console.log(`l'utente ha perso il numero è dispari`);
        }else if(somm === 1 && sceltaUtente === 1){
            console.log(`l'utente ha vinto il numero è dispari`);
        }
    
}

pariDispari()