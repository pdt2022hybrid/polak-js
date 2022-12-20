let playerScore = 0;
let playerScoreElement = document.getElementById('player-score');

let computerScore = 0;
let computerScoreElement = document.getElementById('computer-score');

// let kamenUsage = 0;
// let kamenUsageElement = document.getElementById('kamen-usage');
// let nozniceUsage = 0;
// let nozniceUsageElement = document.getElementById('noznice-usage');
// let papierUsage = 0;
// let papierUsageElement = document.getElementById('papier-usage');

let winHistory = [];
let playerSelectionHistory = [];

function startGame() {

    if (playerScore > 0 || computerScore > 0)
    {
        alert('Hra zacina, sucasne skore je ' + playerScore + ' : ' + computerScore);
        console.log('Hra zacina, sucasne skore je ' + playerScore + ' : ' + computerScore);
    }
    else
    {
        alert('Hra zacina');
        console.log('Hra zacina');
    }


    let playerChoice = prompt('Teraz si vyber kamen(K), noznice(N) alebo papier(P)').toUpperCase();
    let computerChoice = Math.random();
    let gameResult = '';

    // Computer choice
    // <0.34 = Kamen
    // <0.67 = Noznice
    // <1 = Papier

    if (computerChoice < 0.34) {
        computerChoice = 'K';
        if (playerChoice === 'K') {
            gameResult = 'draw';
        }
        else if (playerChoice === 'N') {
            gameResult = 'lose';
        }
        else if (playerChoice === 'P') {
            gameResult = 'win';
        }
    }
    else if (computerChoice <= 0.67) {
        computerChoice = 'N';
        if (playerChoice === 'K') {
            gameResult = 'win';
        }
        else if (playerChoice === 'N') {
            gameResult = 'draw';
        }
        else if (playerChoice === 'P') {
            gameResult = 'lose';
        }
    }
    else {
        computerChoice = 'P';
        if (playerChoice === 'K') {
            gameResult = 'lose';
        }
        else if (playerChoice === 'N') {
            gameResult = 'win';
        }
        else if (playerChoice === 'P') {
            gameResult = 'draw';
        }
    }

    playerSelectionHistory.push(playerChoice)
    increasePlayerUsage(playerChoice);
    increaseComputerUsage(computerChoice);

    console.log('Hrac si vybral: ' + playerChoice);
    console.log('Pocitac si vybral: ' + computerChoice);
    console.log('Vysledok hry: ' + gameResult);

    if (gameResult === 'win') {
        increasePlayerScore();
        winHistory.push('player');

        alert('Vyhral si! (pocitac si vybral ' + computerChoice + ')');
        console.log('Vyhral si! (pocitac si vybral ' + computerChoice + ')');
    }
    else if (gameResult === 'lose') {
        increaseComputerScore();
        winHistory.push('computer');

        alert('Prehral si! (pocitac si vybral ' + computerChoice + ')');
        console.log('Prehral si! (pocitac si vybral ' + computerChoice + ')');
    }
    else {
        alert('Remiza! (pocitac si vybral ' + computerChoice + ')');
        console.log('Remiza! (pocitac si vybral ' + computerChoice + ')');
    }
}

function increasePlayerScore() {
    playerScore++;
    playerScoreElement.innerHTML = playerScore;

    console.log('Score: ' + playerScore);
    console.log('Score has icreased')
}

function increaseComputerScore() {
    computerScore++;
    computerScoreElement.innerHTML = computerScore;

    console.log('Score: ' + computerScore);
    console.log('Score has icreased')
}

function increasePlayerUsage(playerChoice) {
    if (playerChoice === 'K') {
        document.getElementById('player-kamen-usage').innerHTML = (parseInt(document.getElementById('player-kamen-usage').innerHTML) + 1).toString();
    }
    else if (playerChoice === 'N') {
        document.getElementById('player-noznice-usage').innerHTML = (parseInt(document.getElementById('player-noznice-usage').innerHTML) + 1).toString();
    }
    else if (playerChoice === 'P') {
        document.getElementById('player-papier-usage').innerHTML = (parseInt(document.getElementById('player-papier-usage').innerHTML) + 1).toString();
    }
}

function increaseComputerUsage(computerChoice) {
    if (computerChoice === 'K') {
        document.getElementById('computer-kamen-usage').innerHTML = (parseInt(document.getElementById('computer-kamen-usage').innerHTML) + 1).toString();
    }
    else if (computerChoice === 'N') {
        document.getElementById('computer-noznice-usage').innerHTML = (parseInt(document.getElementById('computer-noznice-usage').innerHTML) + 1).toString();
    }
    else if (computerChoice === 'P') {
        document.getElementById('computer-papier-usage').innerHTML = (parseInt(document.getElementById('computer-papier-usage').innerHTML) + 1).toString();
    }
}
