let card = document.querySelectorAll('.card');
let frontCard = document.querySelectorAll('.front-card');
let gameArea = document.querySelector('.game-area');
let score = document.querySelector('.score span');

shuffleImage();
clicking();

function shuffleImage() {
    console.log(card);
        const num = [...Array(card.length).keys()];
        console.log('Before shuffle:', num);
        for (let i = num.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [num[i], num[j]] = [num[j], num[i]];
        };
        console.log('After Shuffle:', num);
        card.forEach((c, index) => {
            c.style.order = num[index];
            console.log(`Card ${index + 1} order: ${c.style.order}`);
        });
};

function clicking() {
    for (let i = 0; i < card.length; i++) {
        (function (currentIndex) {
            frontCard[currentIndex].classList.add('show');
            setTimeout(() => {
                frontCard[currentIndex].classList.remove('show');
            }, 2000);
            card[currentIndex].addEventListener('click', () => {
                frontCard[currentIndex].classList.add('flip');
                let flippedCard = document.querySelectorAll('.flip');
                if (flippedCard.length === 2) {
                    gameArea.style.pointerEvents = 'none';
                    setTimeout(() => {
                        gameArea.style.pointerEvents = 'all';
                    }, 1000);
                    match(flippedCard[0], flippedCard[1]);
                }
            });
        })(i);
    }
}

function match(cardOne, cardTwo) {
    if (cardOne.dataset.index === cardTwo.dataset.index) {

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