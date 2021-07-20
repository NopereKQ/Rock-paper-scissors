const rps = ['rock', 'paper', 'scissors']
const gameItems = document.querySelectorAll('.game__item');
const firstTitle = document.querySelector('.game__first-title');
const yourTurn = document.querySelector('.yourturn');
const autoTurn = document.querySelector('.autoturn');
const result = document.querySelector('.score');

function draw(yourChoice, AutoChoose) {
    if (yourChoice == AutoChoose) {
        result.textContent = 'Remis !'
    } else {
        return;
    }
}

function winner(yourChoice, autoChoose) {
    if (yourChoice !== autoChoose) {
        if (yourChoice == 'rock' && autoChoose == 'scissors' || yourChoice == 'paper' && autoChoose == 'rock' || yourChoice == 'scissors' && autoChoose == 'paper' )  {
            result.textContent = 'Wygrałeś !'
        } else {
            if (yourChoice == 'rock' && autoChoose == 'paper' || yourChoice == 'paper' && autoChoose == 'scissors' || yourChoice == 'scissors' && autoChoose == 'rock') {
                result.textContent = 'Przegrałeś !'
            }
        }
    } else {
        return;
    }
}

gameItems.forEach(el => {
    el.addEventListener('click', () => {
        firstTitle.remove();
        const dataItem = el.getAttribute('data-item');
        const random = rps[Math.floor(Math.random() * rps.length)];
        yourTurn.textContent = dataItem;
        autoTurn.textContent = random;
        winner(dataItem, random)
        draw(dataItem, random)
    })
})
