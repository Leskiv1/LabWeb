import {
    addCard, 
    getCardProperies, 
    clearCreateInputs, 
    sortCards, 
    clearFindInputs,
    renderAllCards,
} from "./dom_utils.js";

const createButton = document.getElementById('submit');
const findButton = document.getElementById('find');
const cancelButton = document.getElementById('cancel');
const countButton = document.getElementById('count');

const cards = [];

createButton.addEventListener('click', () => {
    const newCard = getCardProperies();
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
    alert(`Total mass is ${totalMass} kg!`);
});