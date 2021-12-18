"use strict";

///////////////////////////////////// Card Cycle Examples ////////////////////////////////////

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
    // Flip all cards
    cycleGenerator3.turnOffFlip(cards3);
})

const flipCardsAll = document.querySelector('#flip-all-cards');
flipCardsAll.addEventListener('click', function(){
    // Reset all cards to front face
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
    // Flip all cards
    cycleGenerator4.turnOffFlip(cards4);
})

const flipCardsAll2 = document.querySelector('#flip-all-cards2');
flipCardsAll2.addEventListener('click', function(){
    // Reset all cards to front face
    cycleGenerator4.flipAll(cards4);
})

const resetCardsAll = document.querySelector('#reset-cards');
resetCardsAll.addEventListener('click', function(){
    // Turn the flipping option of card cycle off
    cycleGenerator4.resetAll(cards4);
})

///////////////////////////////////// Frame Cycle Examples ////////////////////////////////////

// Example 7: Create a Frame-Cycle //
const images4 = ["js/resources/story1.jpg", 'js/resources/story2.jpg', 'js/resources/story3.jpg', 'js/resources/story4.jpg']
const titles = ['Chapter 1', "Chapter 2", "Chapter 3", "Chapter 4"]
const frameContents = []

function createFrameContents(){
    for(let i = 0; i < images4.length; i++){
        frameContents.push("Lorem Ipsum is simply dummy text of the printing and types. Lorem Ipsum has been the industry's " +
            "standard dummy text ever since the 1500s.Lorem Ipsum.");
    }
}
createFrameContents();

const frameCycle = document.querySelector('#frameCycle');
const frames = cycleGenerator.makeFrames(images4, 4, "#EBA66B", titles, frameContents);
frameCycle.appendChild(frames);

// Example 8: Enable/Disable Frame Flip; Flip all frames; Reset all frame faces //

const frameCycle2 = document.querySelector('#frameCycle2');
const frames2 = cycleGenerator2.makeFrames(images4, 4, "#EBA66B", titles, frameContents);
frameCycle2.appendChild(frames2);

// Add event listener for buttons
const enableFrameFlip = document.querySelector('#flip-frames-on');
enableFrameFlip.addEventListener('click', function(){
    // Turn the flipping option of frame cycle on
    cycleGenerator2.turnOnFlip(frames2);
})

const disableFrameFlip = document.querySelector('#flip-frames-off');
disableFrameFlip.addEventListener('click', function(){
    // Turn the flipping option of frame cycle off
    cycleGenerator2.turnOffFlip(frames2);
})

const flipFramesAll = document.querySelector('#flip-all-frames');
flipFramesAll.addEventListener('click', function(){
    // Flip all frames
    cycleGenerator2.flipAll(frames2);
})

const resetFramesAll = document.querySelector('#reset-frames');
resetFramesAll.addEventListener('click', function(){
    // Reset all frames to front face
    cycleGenerator2.resetAll(frames2);
})