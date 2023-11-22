/* Call the different classes */
let card = document.querySelectorAll('.card');
let frontCard = document.querySelectorAll('.front-card');
let gameArea = document.querySelector('.game-area');
let score = document.querySelector('.score span');
let restartButton = document.querySelector('.restart');

shuffleImage();
clicking();

/* A shuffle function that randomizes the position of the cards
* The idea was taken from https: //www.youtube.com/watch?v=7JbBr9q4UF8 
*/
function shuffleImage() {
    console.log(card);
        const num = [...Array(card.length).keys()];
        console.log('Before shuffle:', num);
        for (let i = num.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [num[i], num[j]] = [num[j], num[i]];
        }
        console.log('After Shuffle:', num);
        card.forEach((c, index) => {
            c.style.order = num[index];
            console.log(`Card ${index + 1} order: ${c.style.order}`);
        });
}

/* This is the function that flips the card over when clicked,
* No more than two cards can be clicked and the cards are being shown for 2000 milliseconds.
* The idea of the function was taken from https: //www.youtube.com/watch?v=7JbBr9q4UF8
* However I added some changes
*/
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
 
/* This is the matching function. If the two cards clicked is not a match,
 * the cards are being flipped back over.
 * If they are a match, they remain open.
 * Basic structure of the code was taken from https: //www.youtube.com/watch?v=7JbBr9q4UF8 
 * */
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
}

/* This is the event listener (clicking event) for the restart button
* And also a function that makes the game restart when clicked 
*/
restartButton.addEventListener('click', restartGame);
function restartGame() {
    score.innerHTML = '0';
    card.forEach(c => {
        c.querySelector('.front-card').classList.remove('flip', 'match');
    });
    shuffleImage();
}