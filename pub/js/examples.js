"use strict";

const cycleGenerator = new CyclitGenerator();

const images = ["js/resources/pic1.jpg", 'js/resources/pic2.jpg', 'js/resources/pic3.jpg', 'js/resources/pic4.jpg',
    'js/resources/pic5.jpg']
const titles = ['Baby Tree', 'Infant Tree', 'Child Tree', 'Teenage Tree', 'Adult Tree']
const contents = []

function createContents(){
    for(let i = 0; i < images.length; i++){
        contents.push("Lorem Ipsum is simply dummy text of the printing and types. Lorem Ipsum has been the industry's " +
            "standard dummy text ever since the 1500s.");
    }
}
createContents();

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

///////////////////////////////////////////////

// Create a Timeline-Cycle //
const timelineCycle = document.querySelector('#timelineCycle');
const timeline = cycleGenerator.makeTimeline(images, 5, titles, contents);
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
const frames = cycleGenerator.makeFrames(images, 5, titles, contents);
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