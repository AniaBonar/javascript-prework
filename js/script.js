let computerMove = `kamień`;
let randomNumber = Math.floor(Math.random() * 3 + 1);

printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
console.log('Wylosowana liczba to: ' + randomNumber);


let computerMove = `kamień`;
let playerMove = 'nieznany ruch';

printMassage('Zagrałem ' + computerMove  + '! Jeśli Twój ruch to nożyczki, to wygrywasz!'); 

if(playerMove == 1){
  computerMove = 'papier';
}
printMassage ( 'Zagrałem ' + computerMove + '! Jeśli Twój ruch to kamień, to przegrywasz!');

else if(playerMove == 2){
	computerMove = 'nożyce';
}

printMassage( 'Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to przegrywasz!');

else if(playerMove == 3){
	computerMove = 'kamień';

}
printMassage ('Zagrałem ' + computerMove + '! Jeśli Twój ruch to kamień, to jest REMIS!')

