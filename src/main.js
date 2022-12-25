document.getElementById('selection').style.display = 'none';

function toggleSelectionDiv(visibility) {
    if (visibility) {
        document.getElementById('selection').style.display = 'block';
    }
    else {
        document.getElementById('selection').style.display = 'none';
    }
}

class playerNameInput {
    static input = document.getElementById("player_name");

    static enable() {
        this.input.disabled = false;
        this.input.focus();
        this.setInputEvent();
        document.getElementById('player_name_input_heading').classList.remove('text-decoration-line-through');
    }

    static setInputEvent() {
        this.input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                console.log("Enter pressed");
                document.getElementById("player_name_input_div").classList.remove('d-flex');
                document.getElementById("player_name_input_div").classList.add("d-none");

                document.getElementById("player_score_heading").innerHTML= playerNameInput.input.value + ' (player) score';
            }
        });
    }

}

class stats {
    static playerScore = 0;
    static computerScore = 0;

    static increasePlayerScore() {
        this.playerScore++;
    }

    static increaseComputerScore() {
        this.computerScore++;
    }

    get playerScore() {
        return this.playerScore.toString();
    }

    get computerScore() {
        return this.computerScore.toString();
    }
}

class winHistoryList {
    static list = document.getElementById("history_list");
    static listChildrenCount = 0;

    static addWinHistoryItem(item) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(item));
        this.list.appendChild(li);

        if (this.listChildrenCount % 2 === 0) {
            li.classList.add("yellow");
        }
        else {
            li.classList.add("black");
        }

        this.listChildrenCount++;
    }
}

class winHistory {
    static winHistory = [];
    static playerSelectionHistory = [];
}

class usage {
    static playerKamenUsage = 0;
    static playerNozniceUsage = 0;
    static playerPapierUsage = 0;

    static computerKamenUsage = 0;
    static computerNozniceUsage = 0;
    static computerPapierUsage = 0;

    static increasePlayerUsage(playerChoice) {
        if (playerChoice === 'K') {
            this.playerKamenUsage++;
        }
        else if (playerChoice === 'N') {
            this.playerNozniceUsage++;
        }
        else if (playerChoice === 'P') {
            this.playerPapierUsage++;
        }
    }

    static increaseComputerUsage(computerChoice) {
        if (computerChoice === 'K') {
            this.computerKamenUsage++;
        }
        else if (computerChoice === 'N') {
            this.computerNozniceUsage++;
        }
        else if (computerChoice === 'P') {
            this.computerPapierUsage++;
        }
    }

    get playerKamenUsage() {
        return this.playerKamenUsage.toString();
    }

    get playerPapierUsage() {
        return this.playerPapierUsage.toString();
    }

    get playerNozniceUsage() {
        return this.playerNozniceUsage.toString();
    }

    get computerKamenUsage() {
        return this.computerKamenUsage.toString();
    }

    get computerPapierUsage() {
        return this.computerPapierUsage.toString();
    }

    get computerNozniceUsage() {
        return this.computerNozniceUsage.toString();
    }
}

class game {

    getComputerChoice() {
        let random = Math.random();

        if (random < 0.34) {
            return 'K';
        }
        else if (random <= 0.67) {
            return 'P';
        }
        else {
            return 'N';
        }
    }

    determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return 'draw';
        }
        else if (playerChoice === 'K' && computerChoice === 'N') {
            return 'player';
        }
        else if (playerChoice === 'N' && computerChoice === 'P') {
            return 'player';
        }
        else if (playerChoice === 'P' && computerChoice === 'K') {
            return 'player';
        }
        else {
            return 'computer';
        }
    }

    addToStats(winner) {
        if (winner === 'player') {
            stats.increasePlayerScore();
        }
        else if (winner === 'computer') {
            stats.increaseComputerScore();
        }
    }

    addToHistory(winner) {
        if (winner !== 'draw') {
            winHistory.winHistory.push(winner);
        }
        winHistoryList.addWinHistoryItem(winner);
    }

    addToUsage(playerChoice, computerChoice) {
        usage.increasePlayerUsage(playerChoice);
        usage.increaseComputerUsage(computerChoice);
    }

    refresh() {

        document.getElementById('player-score').innerHTML = stats.playerScore;
        document.getElementById('computer-score').innerHTML = stats.computerScore;

        document.getElementById('player-kamen-usage').innerHTML = usage.playerKamenUsage;
        document.getElementById('player-papier-usage').innerHTML =usage.playerPapierUsage;
        document.getElementById('player-noznice-usage').innerHTML = usage.playerNozniceUsage;

        document.getElementById('computer-kamen-usage').innerHTML = usage.computerKamenUsage;
        document.getElementById('computer-papier-usage').innerHTML = usage.computerPapierUsage;
        document.getElementById('computer-noznice-usage').innerHTML = usage.computerNozniceUsage;

    }

    highlightWinner(winner) {
        if (winner === 'player') {

        }
        else if (winner === 'computer') {

        }
        else {

        }
    }

    constructor(playerChoice) {

        let computerChoice = this.getComputerChoice();
        let winner = this.determineWinner(playerChoice, computerChoice);

        this.addToStats(winner);
        this.addToHistory(winner);
        this.addToUsage(playerChoice, computerChoice);

        toggleSelectionDiv(false);
        this.refresh();
        this.highlightWinner(winner);
    }

}