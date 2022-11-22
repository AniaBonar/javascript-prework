


 let randomNumber = Match.floor(Match.random ()* 3 + 1);
 console.log ('Wylosowana liczba to: ' + randomNumber);
 let computerMove = 'nieznany ruch';

 if (randomNumber == 1) {
    computerMove = 'kamień';
 printMessage ('Mój ruch to: ' + computerMove);
 } else if (randomNumber == 2) {
    computerMove ='noźyce';
    printMessage ('Mój ruch to: ' + computerMove);
 } else (randomNumber == 3) {
    computerMove = 'papier';
    printMessage ('Mój ruch to; ' + computerMove);
}

let playerInput = prompt ('Wybierz swój ruch! 1: kamień, 2: papier, 3: noźyce');
console.log ('Gracz wpisał:' + playerInput);
let playerMove = 'nieznany ruch';

if (playerInput == '1') {
    playerMove = 'kamień';
    printMessage ('Twój ruch to: ' + playerMove);
} else if (playerInput == '2') {
    playerMove = 'papier';
    printMessage ('Twój ruch to: ' + playerMove);
} else ( playerMove == '3'); {
    playerMove = 'noźyce';
    printMessage ('Twój ruch to: ' + playerMove);
}

 
