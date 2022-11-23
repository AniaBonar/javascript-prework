function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if (argMoveId == 2){
        return 'noźyce';
    } else if (argMoveId == 3){
        return 'papier'
    }
  
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

let randomNumber = Math.floor(Math.random ()* 3 + 1);
 console.log ('Wylosowana liczba to: ' + randomNumber);
 let computerMove = getMoveName(randomNumber);

 /*if (randomNumber == 1) {
    computerMove = 'kamień';
 printMessage ('Mój ruch to: ' + computerMove);

 } else if (randomNumber == 2) {
    computerMove ='noźyce';
    printMessage ('Mój ruch to: ' + computerMove);
 } else if (randomNumber == 3) {
    computerMove = 'papier';
    printMessage ('Mój ruch to; ' + computerMove);
}*/

let playerInput = prompt ('Wybierz swój ruch! 1: kamień, 2: papier, 3: noźyce');
console.log ('Gracz wpisał:' + playerInput);
let playerMove = getMoveName(randomNumber);

/*if (playerInput == '1') {
    playerMove = 'kamień';
    printMessage ('Twój ruch to: ' + playerMove);
} else if (playerInput == '2') {
    playerMove = 'papier';
    printMessage ('Twój ruch to: ' + playerMove);
} else if ( playerInput == '3') {
    playerMove = 'noźyce';
    printMessage ('Twój ruch to: ' + playerMove);
}*/

function displayResults (argComputerMove, argPlayerMove){
    printMessage ('Zagrałem ' + argComputerMove + ',a Ty' + argPlayerMove);
    if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        return 'Wygrywasz';
    }else if (argComputerMove == 'papier' && argPlayerMove == 'noźyce'){
        return 'Wygrywasz';
    }else if (argComputerMove == 'noźyce' && argPlayerMove == 'kamień'){
        return  'Wygrywasz';
    }else if (argComputerMove == 'kamień' && argPlayerMove == 'noźyce'){
        return 'Przegrywasz';
    }else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        return 'Przegrywasz';
    }else if (argComputerMove == 'noźyce' && argPlayerMove == 'papier'){
        return 'Przegrywasz';
    }else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        return 'Remis';
    }else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
        return 'Remis';
    }else if (argComputerMove == 'noźyce' && argPlayerMove == 'noźyce'){
        return 'Remis';
    }
    }

  



/*if(playerMove === computerMove) {
    printMessage('remis');
} else if(
    playerMove === 'papier' && computerMove === 'kamień' ||
    playerMove === 'kamień' && computerMove === 'noźyce' ||
    playerMove === 'noźyce' && computerMove === 'papier'
) {
    printMessage('wygrana')
}

else {
    printMessage('przegrana');
}*/
 
