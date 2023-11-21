let card = document.querySelectorAll('.card')


suffleImage()
clicking()
function suffleImage() {
    card.forEach(c=>) {
        let num = [...Array(card.length).keys()]
        let random = Math.floor(Math.random()*card.length)
        c.style.order = num[random]
    }
}

function clicking() {
    for(let i = 0; i<card.length; i++) {
        card[i].addEventListener('click', ()=> {
            front[i].classList.add('flip')
            let flippedCard = document.querySelectorAll('.flip')
            if(flippedCard.length == 2) {
                match(flippedCard[0], flippedCard[1])
            }
        })
    }
}

function match(cardOne, cardTwo) {
    if (cardOne.dataset.index == cardTwo.dataset.index) {

    } else {
        setTimeout(() => {
            cardOne.classList.remove('flip')
            cardTwo.classList.remove('flip')
        }, 1000);
    }
}