
const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector(".timer");
const alertEnd = document.querySelector('.message');
const playerId = document.querySelector('.playerId');
const buttom = document.querySelector('.reloadBtn')


const animals = [
    'coelho',
    'girafa', 
    'jacare',
    'leao',
    'macaco',
    'papagaio',
    'tigre',
    'zebra',
    'pato',
    'sapo'
];



// Criar elementos

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const disableCards = document.querySelectorAll('.disableCard');

    if(disableCards.length === 20) {
        clearInterval(this.loop);
        alertEnd.classList.remove('hidden');
        playerId.innerHTML = `${spanPlayer.innerHTML},  Seu tempo foi:  ${timer.innerHTML}`;
    }
}



const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if(firstCharacter === secondCharacter) {
        firstCard.firstChild.classList.add('disableCard');
        secondCard.firstChild.classList.add('disableCard');

        firstCard = '';
        secondCard = '';

        checkEndGame();

    } else {
        setTimeout(()=> {         
            firstCard.classList.remove('revealCard');
            secondCard.classList.remove('revealCard');

            firstCard = '';
            secondCard = '';

        }, 500);

    }



}

const revealCard = ({target}) => {

    if(target.parentNode.className.includes('revealCard')) {
        return;
    }

    if(firstCard === '') {
        target.parentNode.classList.add('revealCard');
        firstCard = target.parentNode;
    } else if (secondCard === '') {
        target.parentNode.classList.add('revealCard');
        secondCard = target.parentNode;

        checkCards();

    }

    
}


// Criar as Cards

const createCard = (animal) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../imgs/${animal}.jpg')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', animal);

    return card;

}

const loadGame = () => {

    const duplicateAnimals = [...animals, ...animals];

    const shuffledArray = duplicateAnimals.sort(() => Math.random() - 0.5);

    shuffledArray.forEach((animal) => {
        const card = createCard(animal);
        grid.appendChild(card);
    })
}

const startTimer = () => {

   this.loop = setInterval(() => {
        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1;
    }, 1000)
}


window.onload = () => {

    const playerName = localStorage.getItem('player');
    spanPlayer.innerHTML = playerName;
    startTimer();
    loadGame();
}

buttom.addEventListener('click', () => {
    window.location.reload();
})
