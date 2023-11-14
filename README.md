# Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

1. quando una parola è palindroma? ----> quando se letta al contrario riuslta la stessa parola
2. quali errori posso gestire? ----> l'utente inserisce un crattere errato o un numero
3. cosa succede se la parola non è palindroma? ----> messaggio di testo "la parola inserita non è palindroma"
4. supponendo di avere una parola palindroma ma con gli spazi (esempio-- "I topi non avevano nipoti") in questo caso con gli spazi non è comprensibile perche le        parole sono diverse quindi devo andare ad eliminare gli spazi 

codice:
input utente: per prendere la parola | esempio === otto

questa parola è palindroma ma per capirlo dobbiamo:
creare una stringa contenente i caratteri di questa parola e creare un altra stringa che contiene i caratteri pero girati di questa parola quindi avremo 

[0] = 'o' [3] = 'o'
[1] = 't' [2] = 't'
[2] = 't' [1] = 't'
[3] = 'o' [0] = 'o'

nel caso in cui le lettere dei 2 array fossero uguali allora sarebbe un palindromo altrimenti no
con questa soluzione abbiamo anche risolto il problema degli spazi 

a' 'a' 'a' 'a 
0 1 2 3 4 5 6



# Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.


inizialmente chiedo all'utente se è dispari o pari poi creo 2 vaiabili alle quali andro ad attribuire 

giocatore = random() ----> funzione per generare numeri random precedentemente creata 
computer = random() -----> funzione per generare numeri random precedentemente creata 

bisogna tenere a mente pero che puo uscire anche il numero 0

successivamente andro a sommare i numeri 
somma = computer + giocatore; 

se il numero è pari tramite una furmula se(somma % 2 === 0) ---> allora sara pari altrimenti dispari e se corrisponde con la scelta del giocatore allora ha vinto o altrimenti perso 