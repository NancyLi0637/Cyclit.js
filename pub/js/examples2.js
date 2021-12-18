"use strict";

///// Example 1: Create a Card Cycle /////
const images = ["js/resources/pic1.jpg", 'js/resources/pic2.jpg', 'js/resources/pic3.jpg', 'js/resources/pic4.jpg',
    'js/resources/pic5.jpg']

const cycleGenerator = new CyclitGenerator();

const cardCycle = document.querySelector('#cardCycle');
const cards = cycleGenerator.makeCards(images, 5, "#A7BD8B");
cardCycle.appendChild(cards);

///// Example 2: Make the Card Cycle Flippable /////
const cycleGenerator2 = new CyclitGenerator();

const cardCycle2 = document.querySelector('#cardCycle2');
const cards2 = cycleGenerator2.makeCards(images, 4, "#A7BD8B");
cardCycle2.appendChild(cards2);

// Add event listener for buttons
const enableCardFlip = document.querySelector('#flip-cards-on');
enableCardFlip.addEventListener('click', function(){
    // Turn the flipping option of card cycle on
    cycleGenerator2.turnOnFlip(cards2);
})

const disableCardFlip = document.querySelector('#flip-cards-off');
disableCardFlip.addEventListener('click', function(){
    // Turn the flipping option of card cycle off
    cycleGenerator2.turnOffFlip(cards2);
})

///// Example 3: Flip all the cards at once /////
const images2 = ["js/resources/baby1.jpg", 'js/resources/baby2.png', 'js/resources/baby3.png', 'js/resources/baby4.png',
    'js/resources/baby5.png']

const cycleGenerator3 = new CyclitGenerator();

const cardCycle3 = document.querySelector('#cardCycle3');
const cards3 = cycleGenerator3.makeCards(images2, 5, "#FCBFA4");
cardCycle3.appendChild(cards3);

// Add event listener for buttons
const enableCardFlip2 = document.querySelector('#flip-cards-on2');
enableCardFlip2.addEventListener('click', function(){
    // Turn the flipping option of card cycle on
    cycleGenerator3.turnOnFlip(cards3);
})

const disableCardFlip2 = document.querySelector('#flip-cards-off2');
disableCardFlip2.addEventListener('click', function(){
    // Turn the flipping option of card cycle off
    cycleGenerator3.turnOffFlip(cards3);
})

const flipCardsAll = document.querySelector('#flip-all-cards');
flipCardsAll.addEventListener('click', function(){
    // Turn the flipping option of card cycle off
    cycleGenerator3.flipAll(cards3);
})

///// Example 4: Reset all cards to front face /////
const cycleGenerator4 = new CyclitGenerator();

const cardCycle4 = document.querySelector('#cardCycle4');
const cards4 = cycleGenerator4.makeCards(images2, 3, "#FCBFA4");
cardCycle4.appendChild(cards4);

// Add event listener for buttons
const enableCardFlip3 = document.querySelector('#flip-cards-on3');
enableCardFlip3.addEventListener('click', function(){
    // Turn the flipping option of card cycle on
    cycleGenerator4.turnOnFlip(cards4);
})

const disableCardFlip3 = document.querySelector('#flip-cards-off3');
disableCardFlip3.addEventListener('click', function(){
    // Turn the flipping option of card cycle off
    cycleGenerator4.turnOffFlip(cards4);
})

const flipCardsAll2 = document.querySelector('#flip-all-cards2');
flipCardsAll2.addEventListener('click', function(){
    // Turn the flipping option of card cycle off
    cycleGenerator4.flipAll(cards4);
})

const resetCardsAll = document.querySelector('#reset-cards');
resetCardsAll.addEventListener('click', function(){
    // Turn the flipping option of card cycle off
    cycleGenerator4.resetAll(cards4);
})