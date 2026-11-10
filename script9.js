const cardData = [
    { name: "6", points: 6, image: "https://media.istockphoto.com/id/657381818/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8%D0%B9-%D1%96%D0%BD%D0%B4%D0%B5%D0%BA%D1%81-%D0%B3%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%97-%D0%BA%D0%B0%D1%80%D1%82%D0%B8-6-%D1%81%D0%B5%D1%80%D0%B4%D0%B5%D1%86%D1%8C.jpg?s=612x612&w=0&k=20&c=ZEBLOH1dl2Z1myN4omuKEnff21v3kPPWlMX7F4gQIQM=" },
    { name: "7", points: 7, image: "https://media.istockphoto.com/id/657384992/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8%D0%B9-%D1%96%D0%BD%D0%B4%D0%B5%D0%BA%D1%81-%D0%B3%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%97-%D0%BA%D0%B0%D1%80%D1%82%D0%B8-7-%D0%BA%D0%BB%D1%83%D0%B1%D1%96%D0%B2.jpg?s=612x612&w=0&k=20&c=tfUnAXYqBHJrJrJIXur5m5-BTs3gLgj-DS40hVActR8=" },
    { name: "8", points: 8, image: "https://media.istockphoto.com/id/657386028/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8%D0%B9-%D1%96%D0%BD%D0%B4%D0%B5%D0%BA%D1%81-%D0%B3%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%97-%D0%BA%D0%B0%D1%80%D1%82%D0%B8-8-%D0%B4%D1%96%D0%B0%D0%BC%D0%B0%D0%BD%D1%82%D1%96%D0%B2.jpg?s=612x612&w=0&k=20&c=TscUvRiu2yHtD8JlAMp8-ZY-2ZKAzGf49oL1I2-yXiU=" },
    { name: "9", points: 9, image: "https://media.istockphoto.com/id/1306851813/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D0%BD%D0%BE%D0%BC%D0%B5%D1%80%D0%BD%D0%B0-%D0%BA%D0%B0%D1%80%D1%82%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=qJ4izlXKr5omgxIUxhSala2siwUoOMhjjG95WGlDyh8=" },
    { name: "10", points: 10, image: "https://media.istockphoto.com/id/1306851168/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D0%BD%D0%BE%D0%BC%D0%B5%D1%80%D0%BD%D0%B0-%D0%BA%D0%B0%D1%80%D1%82%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=z2UbA283cw3nV41mxKCbogyQMWUCvKe3TO-UNjHr-p8=" },
    { name: "Jack", points: 2, image: "https://media.istockphoto.com/id/657377982/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8%D0%B9-%D1%96%D0%BD%D0%B4%D0%B5%D0%BA%D1%81-%D1%96%D0%B3%D1%80%D0%BE%D0%B2%D0%BE%D1%97-%D0%BA%D0%B0%D1%80%D1%82%D0%B8-%D1%80%D0%BE%D0%B7%D1%94%D0%BC-%D0%BF%D1%96%D0%BA%D0%B8.jpg?s=612x612&w=0&k=20&c=mYuNQFHJPDOOZVwqvNKYzN704b5MKR-J9HylBIDBQsg=" },
    { name: "Queen", points: 3, image: "https://media.istockphoto.com/id/657381466/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8%D0%B9-%D1%96%D0%BD%D0%B4%D0%B5%D0%BA%D1%81-%D0%B3%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%97-%D0%BA%D0%B0%D1%80%D1%82%D0%B8-%D0%BA%D0%BE%D1%80%D0%BE%D0%BB%D0%B5%D0%B2%D0%B0-%D1%81%D0%B5%D1%80%D0%B4%D0%B5%D1%86%D1%8C.jpg?s=612x612&w=0&k=20&c=uqDUmda-_7N6pVtsQIcbVbK3frP75BX4dJRqVzJWXGY=" },
    { name: "King", points: 4, image: "https://media.istockphoto.com/id/124676512/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D1%96%D0%BA%D0%BE%D0%B2%D0%B8%D0%B9-%D1%86%D0%B0%D1%80.jpg?s=612x612&w=0&k=20&c=_tp0vFGm1SkM1yS48vjZfRkd5ZKYuTQ8kB9gWbPf2u8=" },
    { name: "Ace", points: 11, image: "https://media.istockphoto.com/id/657378866/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8%D0%B9-%D1%96%D0%BD%D0%B4%D0%B5%D0%BA%D1%81-%D0%B3%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%97-%D0%BA%D0%B0%D1%80%D1%82%D0%B8-%D1%82%D1%83%D0%B7-%D1%81%D0%B5%D1%80%D0%B4%D0%B5%D1%86%D1%8C.jpg?s=612x612&w=0&k=20&c=mrSJET2Ki-_Jpx5ndJtxp8TW_0l_WeGYn36mbYynV9g=" }
];

let playerName = "";
let currentRound = 1;
let playerScore = 0;
let computerScore = 0;
let lives = 3;
let playerCard = null;
let computerCard = null;

const menu = document.getElementById("menu");
const game = document.getElementById("game");
const screamer = document.getElementById("screamer");
const finalScreen = document.getElementById("finalScreen");
const doors = document.getElementById("doors");
const battle = document.getElementById("battle");

const playerCardElement = document.getElementById("playerCard");
const computerCardElement = document.getElementById("computerCard");
const revealBtn = document.getElementById("revealBtn");
const nextBtn = document.getElementById("nextBtn");
const screamerSound = document.getElementById("screamerSound");

function showScreen(screen) {
    document.querySelectorAll(".screen").forEach(element => {
        element.classList.remove("active");
    });
    screen.classList.add("active");
}

function getPlayerName() {
    let name = prompt("Enter your name:");
    if (name === null) {
        return "Player";
    }
    while (name.trim() === "") {
        name = prompt("Name cannot be empty. Enter your name:");
        if (name === null) {
            return "Player";
        }
    }
    return name.trim().slice(0, 20);
}

function startGame() {
    playerName = getPlayerName();
    currentRound = 1;
    playerScore = 0;
    computerScore = 0;
    lives = 3;

    document.getElementById("playerName").textContent = playerName;
    showScreen(game);
    startRound();
}

function updateStats() {
    document.getElementById("round").textContent = `ROUND ${currentRound} / 3`;
    document.getElementById("lives").textContent = "♥ ".repeat(lives) + "♡ ".repeat(3 - lives);
    document.getElementById("totalPlayer").textContent = `Your points: ${playerScore}`;
    document.getElementById("totalComputer").textContent = `Stranger's points: ${computerScore}`;
}

function startRound() {
    doors.classList.remove("hidden");
    battle.classList.add("hidden");
    document.getElementById("roomTitle").textContent = "CHOOSE A DOOR";
    document.getElementById("message").textContent = "A trial awaits you behind one of the doors...";
    document.getElementById("battleResult").textContent = "";

    playerCardElement.textContent = "?";
    computerCardElement.textContent = "?";

    revealBtn.classList.remove("hidden");
    nextBtn.classList.add("hidden");
    revealBtn.disabled = false;

    playerCard = null;
    computerCard = null;

    updateStats();
}

function getRandomCard() {
    const randomIndex = Math.floor(Math.random() * cardData.length);
    return cardData[randomIndex];
}

function chooseDoor(event) {
    const door = event.target.closest(".door");
    if (!door) {
        return;
    }

    doors.classList.add("hidden");
    battle.classList.remove("hidden");
    document.getElementById("roomTitle").textContent = "YOU ENTERED THE ROOM";
    document.getElementById("message").textContent = "The stranger is already waiting for you... Reveal the cards.";

    playerCard = getRandomCard();
    computerCard = getRandomCard();
}

function showCard(element, card) {
    element.innerHTML = `<img src="${card.image}" alt="${card.name}">`;
}

function showScreamer() {
    screamerSound.pause();
    screamerSound.currentTime = 0;
    screamerSound.volume = 1;
    showScreen(screamer);
    screamerSound.play().catch(error => {
        console.log("Failed to play sound:", error);
    });
}

function revealCards() {
    if (!playerCard || !computerCard) {
        return;
    }

    revealBtn.disabled = true;

    showCard(playerCardElement, playerCard);
    showCard(computerCardElement, computerCard);

    playerScore += playerCard.points;
    computerScore += computerCard.points;

    document.getElementById("playerPoints").textContent = `${playerCard.points} points`;
    document.getElementById("computerPoints").textContent = `${computerCard.points} points`;

    const result = document.getElementById("battleResult");

    if (playerCard.points > computerCard.points) {
        result.textContent = "YOU WON THE ROUND!";
        result.style.color = "#32cd70";
        document.getElementById("message").textContent = "The door opens. You can move forward.";
    } else if (playerCard.points < computerCard.points) {
        result.textContent = "YOU LOST...";
        result.style.color = "#ff2222";
        lives--;
        document.getElementById("message").textContent = "Something noticed you... You lost one life.";
    } else {
        result.textContent = "DRAW!";
        result.style.color = "#e0b84b";
        document.getElementById("message").textContent = "The stranger cannot stop you yet.";
    }

    updateStats();

    nextBtn.textContent = currentRound === 3 ? "FINISH GAME" : "NEXT DOOR";
    nextBtn.classList.remove("hidden");
}

function nextRound() {
    if (currentRound === 3) {
        finishGame();
        return;
    }
    currentRound++;
    startRound();
}

function finishGame() {
    const title = document.getElementById("finalTitle");
    const text = document.getElementById("finalText");
    const score = document.getElementById("finalScore");

    score.textContent = `Your points: ${playerScore} | Stranger's points: ${computerScore}`;

    if (playerScore > computerScore) {
        showScreen(finalScreen);
        title.textContent = "YOU ESCAPED";
        title.style.color = "#32cd70";
        text.textContent = `${playerName}, you managed to escape this place!`;
    } else if (playerScore < computerScore) {
        showScreamer();
        setTimeout(() => {
            screamerSound.pause();
            screamerSound.currentTime = 0;
            showScreen(finalScreen);
            title.textContent = "GAME OVER";
            title.style.color = "#b00000";
            text.textContent = "You lost. This place will not let you go...";
        }, 1300);
    } else {
        showScreen(finalScreen);
        title.textContent = "DRAW";
        title.style.color = "#e0b84b";
        text.textContent = "Draw... But did you really manage to escape?";
    }
}

function restartGame() {
    screamerSound.pause();
    screamerSound.currentTime = 0;
    startGame();
}

document.getElementById("startBtn").addEventListener("click", startGame);
document.getElementById("restartBtn").addEventListener("click", restartGame);
doors.addEventListener("click", chooseDoor);
revealBtn.addEventListener("click", revealCards);
nextBtn.addEventListener("click", nextRound);