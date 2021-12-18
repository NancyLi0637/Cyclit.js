"use strict";

const cycleGenerator = new CyclitGenerator();

const images = ["js/resources/pic1.jpg", 'js/resources/pic2.jpg', 'js/resources/pic3.jpg', 'js/resources/pic4.jpg',
    'js/resources/pic5.jpg','js/resources/pic5.jpg','js/resources/pic5.jpg',"js/resources/pic1.jpg", 'js/resources/pic2.jpg',
    'js/resources/pic2.jpg','js/resources/pic2.jpg','js/resources/pic2.jpg','js/resources/pic2.jpg','js/resources/pic2.jpg',
    'js/resources/pic2.jpg',]
const titles = ['Baby Tree', 'Infant Tree', 'Child Tree', 'Teenage Tree', 'Adult Tree','Adult Tree','Adult Tree']
const timelineContents = []
const frameContents = []

function createTimelineContents(){
    for(let i = 0; i < images.length; i++){
        timelineContents.push("Lorem Ipsum is simply dummy text of the printing and types. Lorem Ipsum has been the industry's " +
            "standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy. Lorem Ipsum has been the industry's " +
            "standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy.");
    }
}

function createFrameContents(){
    for(let i = 0; i < images.length; i++){
        frameContents.push("Lorem Ipsum is simply dummy text of the printing and types. Lorem Ipsum has been the industry's " +
            "standard dummy text ever since the 1500s.Lorem Ipsum.");
    }
}

createTimelineContents();
createFrameContents();

///////////////////////////////////////////////

// Create a Card-Cycle //
const cardCycle = document.querySelector('#cardCycle');
const cards = cycleGenerator.makeCards(images, 5);
cardCycle.appendChild(cards);

// Add event listener for buttons
const enableCardFlip = document.querySelector('#flip-cards-on');
enableCardFlip.addEventListener('click', function(){
    // Turn the flipping option of card cycle on
    cycleGenerator.turnOnFlip(cards);
})

const disableCardFlip = document.querySelector('#flip-cards-off');
disableCardFlip.addEventListener('click', function(){
    // Turn the flipping option of card cycle off
    cycleGenerator.turnOffFlip(cards);
})

const flipCardsAll = document.querySelector('#flip-all-cards');
flipCardsAll.addEventListener('click', function(){
    // Turn the flipping option of card cycle off
    cycleGenerator.flipAll(cards);
})

const resetCardsAll = document.querySelector('#reset-cards');
resetCardsAll.addEventListener('click', function(){
    // Turn the flipping option of card cycle off
    cycleGenerator.resetAll(cards);
})

///////////////////////////////////////////////

// Create a Timeline-Cycle //
const timelineCycle = document.querySelector('#timelineCycle');
const timeline = cycleGenerator.makeTimeline(images, 7, titles, timelineContents);
timelineCycle.appendChild(timeline);

// Add event listener for buttons
const enableTimelineHover = document.querySelector('#hover-timeline-on');
enableTimelineHover.addEventListener('click', function(){
    // Turn the hovering option of timeline on
    cycleGenerator.turnOnHover(timeline)
})

const disableTimelineHover = document.querySelector('#hover-timeline-off');
disableTimelineHover.addEventListener('click', function(){
    // Turn the hovering option of timeline off
    cycleGenerator.turnOffHover(timeline);
})

///////////////////////////////////////////////

// Create a Frame-Cycle
const frameCycle = document.querySelector('#frameCycle');
const frames = cycleGenerator.makeFrames(images, 5, titles, frameContents);
frameCycle.appendChild(frames);

// Add event listener for buttons
const enableFrameFlip = document.querySelector('#flip-frames-on');
enableFrameFlip.addEventListener('click', function(){
    // Turn the flipping option of frame cycle on
    cycleGenerator.turnOnFlip(frames);
})

const disableFrameFlip = document.querySelector('#flip-frames-off');
disableFrameFlip.addEventListener('click', function(){
    // Turn the flipping option of frame cycle off
    cycleGenerator.turnOffFlip(frames);
})

const flipFramesAll = document.querySelector('#flip-all-frames');
flipFramesAll.addEventListener('click', function(){
    // Turn the flipping option of frame cycle off
    cycleGenerator.flipAll(frames);
})

const resetFramesAll = document.querySelector('#reset-frames');
resetFramesAll.addEventListener('click', function(){
    // Turn the flipping option of frame cycle off
    cycleGenerator.resetAll(frames);
})

///////////////////////////////////////////////

// Create a Carousel Cycle
const carouselCycle = document.querySelector('#carouselCycle');
const carousel = cycleGenerator.makeCarousel(images, 15);
carouselCycle.appendChild(carousel);

// Add event listener for buttons
const previousButton = document.querySelector('#previous-button');
previousButton.addEventListener('click', function(){
    // Rotate to the previous carousel
    cycleGenerator.previousCarousel(carousel);
})

const nextButton = document.querySelector('#next-button');
nextButton.addEventListener('click', function(){
    // Rotate to the next carousel
    cycleGenerator.nextCarousel(carousel);
})