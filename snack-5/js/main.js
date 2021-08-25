//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

//creo una lista vuota

var numeriDispari = [];
console.log(numeriDispari);

//chiedo all'utente di inserire un numero e verifico che i numeri inseriti siano dispari

var numero;

for (var i = 0; i < 6; i++){
  numero = parseInt(prompt('Inserisci un numero'));
  console.log ( numero );
  if (numero % 2 == 1) {
    numeriDispari.push (numero);
  }
}

















/* var nomeUtente = prompt( "Inserisci il tuo nome");

//controllo se il nome inserito è all'interno della lista

var trovato = false;

for ( var i = 0; i < invitati.length; i++ ){
    if ( invitati[i] == nomeUtente ) {
        trovato = true;
    }
}

//comunico all'utente se può entrare

if (trovato == true) {
    alert("Entra pure!");
}else {
    alert("Non sei nella lista!");
} */