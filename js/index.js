import {
    addCard, 
    getCardProperies, 
    clearCreateInputs, 
    sortCards, 
    clearFindInputs,
    renderAllCards,
    openModalMessage,
} from "./dom_utils.js";

const createButton = document.getElementById('submit');
const findButton = document.getElementById('find');
const cancelButton = document.getElementById('cancel');
const countButton = document.getElementById('count');
const popup = document.getElementById('popup');
const popupClose = document.getElementById('popup_close');

const cards = [];

createButton.addEventListener('click', () => {
    const newCard = getCardProperies();
    const isDuplicate = cards.some(card => card.name.toLowerCase() === newCard.name.trim().toLowerCase());
    
    if (isDuplicate) {
        openModalMessage('Card with this name already exists!');
        return;
    }
    cards.push(newCard);
    addCard(newCard);
    clearCreateInputs();
});

findButton.addEventListener('click', () => {
    sortCards(cards);
});

cancelButton.addEventListener('click', () => {
    clearFindInputs();
    renderAllCards(cards);
});

countButton.addEventListener('click', () => {
    let totalMass = 0;
    const sortedCards = sortCards(cards);
    sortedCards.forEach(card => totalMass += +card.mass);
    openModalMessage(`Total mass is ${totalMass} g!`);
});

popupClose.addEventListener('click', () => {
    popup.classList.remove('open');
});