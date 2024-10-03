const nameInput = document.getElementById('name_create');
const speedInput = document.getElementById('speed_create');
const massInput = document.getElementById('mass_create');
const cardsContainer = document.getElementById('cards_container');
const nameFind = document.getElementById('name_find');
const speedSort = document.getElementById('speed_sort');
const popup = document.getElementById('popup');

export function getCardProperies () {
    if (speedInput.value <= 0) {
        openModalMessage('Speed cant be negative!');
        return;
    };

    if (massInput.value <= 0) {
        openModalMessage('Mass cant be negative!');
        return;
    };

    if (!/^[A-Za-z\s]+$/.test(nameInput.value)) {
        openModalMessage('Name can contain only letters!');
        return;
    };


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
              <span>${mass} g</span>
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

export function openModalMessage (text) {
    const p = popup.querySelector('p');
    p.innerText = text;
    popup.classList.add('open');
};