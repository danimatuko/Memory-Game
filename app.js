/*get all the cards*/
const cards = document.querySelectorAll('.card');
/*variabls*/
let hasFlipedcard;
let firstCard;
let secondCard;
let timer;
let match;

/*identify the card which was clicked*/
cards.forEach(card => {

    card.addEventListener('click', function(e) {
        //flip the card
        flipCard(this);
        /*check if it's the first or the second card and if the card already matched*/
        if ((!hasFlipedcard) && (!this.classList.contains('matched'))) {
            //this is the first card
            firstCard = this;
            hasFlipedcard = true;
        } else if (!this.classList.contains('matched')) {
            //this is the second card
            secondCard = this;
            hasFlipedcard = false;
            //checkForMatch
            isPair(firstCard, secondCard);
        }
    })
});

function flipCard(card) {
    card.classList.remove('flipBack', 'hide-card');
    card.classList.add('flip');
}

function flipBack(card) {
    card.classList.remove('flip');
    card.classList.add('flipBack');
}


function isPair(firstCard, secondCard) {
    if (firstCard.dataset.imgname == secondCard.dataset.imgname) {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        return true;
    } else {
        timer = setTimeout(() => { //show the chosen cards for 0.5 second
            flipBack(firstCard);
            flipBack(secondCard);
        }, 500);
        return false;
    }
}