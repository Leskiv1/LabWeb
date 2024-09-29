const nameInput = document.getElementById('name_create');
const speedInput = document.getElementById('speed_create');
const massInput = document.getElementById('mass_create');
const cardsContainer = document.getElementById('cards_container');
const nameFind = document.getElementById('name_find');
const speedSort = document.getElementById('speed_sort');

export function getCardProperies () {
    const newCard = {
        name : nameInput.value,
        speed: speedInput.value,
        mass: massInput.value,
    };

    return newCard;
};

const cardTemplate = ({name, speed, mass}) => `
          <li class="card">
            <img src="./images/Insects.jpg" alt="">
            <div class="card_text">
              <h3>${name}</h3>
              <span>${speed} m/s</span>
              <span>${mass} kg</span>
            </div>
          </li>
`

export function addCard ({name, speed, mass}) {
    cardsContainer.insertAdjacentHTML("afterbegin", cardTemplate({name, speed, mass}));
};

export function clearCreateInputs () {
    nameInput.value = '';
    speedInput.value = '';
    massInput.value = '';
};

export function clearFindInputs () {
    nameFind.value = '';
    speedSort.value = 'not_sort';
};

export function renderAllCards (cards) {
    cardsContainer.innerHTML = '';
    cards.forEach(card => {
        addCard(card);
    });
};

export function sortCards (cards) {
    let sortedCards = cards.filter(card => card.name.toLowerCase().search(
        nameFind.value.trim().toLowerCase()) !== -1 );
    
    if (speedSort.value === 'descending') {
        sortedCards.sort((a,b) => a.speed - b.speed);
    };
    if (speedSort.value === 'ascending') {
        sortedCards.sort((a,b) => b.speed - a.speed);
    };

    renderAllCards(sortedCards);

    return sortedCards;
};   
