let player = {
    name: 'Bahadır',
    chips: 150
};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = '';
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    return Math.ceil(Math.random() * 11);
}

function startGame() {
    if (player.chips >= 25) {
        player.chips -= 25;
        playerEl = document.getElementById("player-el");
        playerEl.textContent = player.name + ": $" + player.chips;
        document.getElementById("new-card").style.backgroundColor = "red";
        document.getElementById("new-card").style.border = "3px solid goldenrod";
        isAlive = true;
        hasBlackJack = false;
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        cards = [firstCard, secondCard];
        sum = firstCard + secondCard;
        renderGame();
    }
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    if (sum < 21) {
        message = "Do you want another card?"
    } else if (sum === 21) {
        message = "It's Blackjack!"
        isAlive = false;
        hasBlackJack = true;
        document.getElementById("new-card").style.backgroundColor = "grey";
        document.getElementById("new-card").style.border = "3px solid grey";
        player.chips += 50;
        playerEl = document.getElementById("player-el");
        playerEl.textContent = player.name + ": $" + player.chips;
    } else {
        message = "You'r out!"
        isAlive = false;
        document.getElementById("new-card").style.backgroundColor = "grey";
        document.getElementById("new-card").style.border = "3px solid grey";
    }

    messageEl.textContent = message;
}


function newCard() {
    if (isAlive && !hasBlackJack) {
        let newestCard = getRandomCard();
        sum = sum + newestCard;
        cards.push(newestCard);
        renderGame();
    }
}