// 1) Scrivere la consegna
// 2) Scomporre il problema in punti
// 3) Espandere i punti BANALI
// 4) Tradurre in codice
//-------------------------------
// Il computer deve generare 16 numeri casuali tra 1 e 100 (queste saranno le mine).
// 1) creo l’array(vuoto)
// 2)Creo un numero causale
// 3)Controllo che il numero non ci sia nell’Array
// 4)Se non c’è lo metto nell’array
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina (l’utente ha beccato una mina), altrimenti si continua chiedendo all’utente un altro numero.
// 1) Se pesto la mina GAME OVER(se il numero è nell’array sei al CREATORE )
// 2)Altrimenti ripetiamo la richiesta di inserire un numero
// La partita termina quando il giocatore inserisce un numero “mina” o raggiunge il numero massimo possibile di numeri consentiti (84).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
//-----------------------






// esercizio di classe per capire come generare numeri random diversi :
var numeri = [];
var numero_iterazioni = 0;



while(numeri.length < 84) {
    var person = prompt('Inserisci un numero');
    console.log(person);
    var numero = generaRandom(1, 100);
    console.log(numero);

    if(!numeri.includes(numero)) {
        numeri.push(numero);
        console.log(numeri);
    }
    numero_iterazioni++;
    console.log('numero iterazioni: ' + numero_iterazioni);
}




// funzione che genera un numero random tra min e max
function generaRandom(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) ) + min;
    return random;
}
