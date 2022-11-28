function playGame(playerInput) {
    clearMessages();

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'noźyce';
        } else if (argMoveId == 3) {
            return 'papier'
        }

        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    let computerMove = getMoveName(randomNumber);

    console.log('Gracz wpisał:' + playerInput);
    let playerMove = getMoveName(playerInput);


    function displayResults(argComputerMove, argPlayerMove) {
        printMessage('Zagrałem ' + argComputerMove + ',a Ty' + argPlayerMove);
        if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Wygrywasz');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'noźyce') {
            printMessage('Wygrywasz');
        } else if (argComputerMove == 'noźyce' && argPlayerMove == 'kamień') {
            printMessage('Wygrywasz');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'noźyce') {
            printMessage('Przegrywasz');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            printMessage('Przegrywasz');
        } else if (argComputerMove == 'noźyce' && argPlayerMove == 'papier') {
            printMessage('Przegrywasz');
        } else if (argComputerMove == argPlayerMove) {
            printMessage('Remis');
        }
    }
    displayResults(computerMove, playerMove);

}

document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
});
document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(2);
});
document.getElementById('play-paper').addEventListener('click', function () {
    playGame(3);
});



    

  



