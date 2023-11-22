let card = document.querySelectorAll('.card');
let frontCard = document.querySelectorAll('.front-card');
let gameArea = document.querySelectorAll('.game-area');
let score = document.querySelectorAll('.score');

suffleImage();
clicking();
function suffleImage() {
    card.forEach(c=> {
        const num = [...Array(card.length).keys()];
        const random = Math.floor(Math.random()*card.length);
        c.style.order = num[random];
    })
};

function clicking() {
    for(let i = 0; i<card.length; i++) {
        frontCard[i].classList.add('show');
        setTimeout(() => {
            frontCard[i].classList.remove('show');
        }, 2000);
        card[i].addEventListener('click', ()=> {
            frontCard[i].classList.add('flip');
            let flippedCard = document.querySelectorAll('.flip');
            if(flippedCard.length == 2) {
                gameArea.style.pointerEvents = 'none';
                setTimeout(() => {
                    gameArea.style.pointerEvents = 'all';
                }, 1000);
                match(flippedCard[0], flippedCard[1]);
            }
        })
    }
};

function match(cardOne, cardTwo) {
    if (cardOne.dataset.index == cardTwo.dataset.index) {

        score.innerHTML = parseInt(score.innerHTML) + 1;

        cardOne.classList.remove('flip');
        cardTwo.classList.remove('flip');

        cardOne.classList.add('match');
        cardTwo.classList.add('match');
    } else {
        setTimeout(() => {
            cardOne.classList.remove('flip');
            cardTwo.classList.remove('flip');
        }, 1000);
    }
};