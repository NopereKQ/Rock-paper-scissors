const rps = ['rock', 'paper', 'scissors']
const gameItem = document.querySelectorAll('.game__item');
const firstTitle = document.querySelector('.game-first-title');
var result = document.querySelector('.score');

function draw(yourChoose, AutoChoose) {
    if (yourChoose == AutoChoose) {
        result.textContent = 'Remis !'
    } else {
        return;
    }
}

function winner(yourChoose, autoChoose) {
    if (yourChoose !== autoChoose) {
        if (yourChoose == 'rock' && autoChoose == 'scissors') {
            result.textContent = 'Wygrałeś !'
        } else {
            if (yourChoose == 'rock' && autoChoose == 'paper') {
                result.textContent = 'Przegrałeś !'
            }
        }
        if (yourChoose == 'paper' && autoChoose == 'rock') {
            result.textContent = 'Wygrałeś !'
        } else {
            if (yourChoose == 'paper' && autoChoose == 'scissors') {
                result.textContent = 'Przegrałeś !'
            }
        }
        if (yourChoose == 'scissors' && autoChoose == 'paper') {
            result.textContent = 'Wygrałeś !'
        } else {
            if (yourChoose == 'scissors' && autoChoose == 'rock') {
                result.textContent = 'Przegrałeś !'
            }
        }
    } else {
        return;
    }
}

gameItem.forEach(el => {
    el.addEventListener('click', () => {
        let yourTurn = document.querySelector('.yourturn');
        let autoTurn = document.querySelector('.autoturn');
        firstTitle.remove();
        const dataItem = el.getAttribute('data-item');
        const random = rps[Math.floor(Math.random() * rps.length)];
        yourTurn.textContent = dataItem;
        autoTurn.textContent = random;
        winner(dataItem, random)
        draw(dataItem, random)
        
    })
})
