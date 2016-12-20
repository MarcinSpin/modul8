var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', function() {});

var pickRock = document.getElementById('js-playerPick_rock'),
     pickPaper = document.getElementById('js-playerPick_paper'),
     pickScissors = document.getElementById('js-playerPick_scissors'),
     computerResultElem = document.getElementById('js-computerResult'),
     playerResultElem = document.getElementById('js-playerResult'),
     playerPickElem = document.getElementById('js-playerPick'),
     computerPickElem = document.getElementById('js-computerPick'),
     playerPoints = document.getElementById('js-playerPoints'),
     computerPoints = document.getElementById('js-computerPoints');



pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });

newGameBtn.addEventListener('click', function() { resetGame() });


var gameState = 'notStarted',  //started // ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

function resetGame() {
    player.score = 0;
    computer.score = 0;
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';
    playerPickElem.innerHTML = '';
    computerPickElem.innerHTML = '';

    drawPoints();
}

function drawPoints() {
    playerPoints.innerHTML = player.score;
    computerPoints.innerHTML = computer.score;
}

function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

  var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock') ) {
        
        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Wygrana!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Wygrana!";
        computer.score++;
    }

    drawPoints();
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();
    
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    
    checkRoundWinner(playerPick, computerPick);
}