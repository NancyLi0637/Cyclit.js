"use strict";

const cycleGenerator = new CyclitGenerator();

const images = ['resources/pic1.jpg', 'resources/pic2.jpg', 'resources/pic3.jpg', 'resources/pic4.jpg', 'resources/pic5.jpg']
const titles = ['Baby Tree', 'Infant Tree', 'Child Tree', 'Teenage Tree', 'Adult Tree']
const contents = []

function createContents(){
    for(let i = 0; i < images.length; i++){
        contents.push("Lorem Ipsum is simply dummy text of the printing and types. Lorem Ipsum has been the industry's " +
            "standard dummy text ever since the 1500s.");
    }
}
createContents();

// Create a Card-Cycle
const cardCycle = document.querySelector('#cardCycle');
const cards = cycleGenerator.makeCards(images, 5);
cardCycle.appendChild(cards);
// Turn the flipping option of card cycle on
cycleGenerator.turnOnFlip(cards);

// Create a Timeline-Cycle
const timelineCycle = document.querySelector('#timelineCycle');
const timeline = cycleGenerator.makeTimeline(images, 5, titles, contents);
timelineCycle.appendChild(timeline);
// Turn the hovering option of timeline cycle on
cycleGenerator.turnOnHover(timeline);

// Create a Frame-Cycle
const frameCycle = document.querySelector('#frameCycle');
const frames = cycleGenerator.makeFrames(images, 5, titles, contents);
frameCycle.appendChild(frames);
// Turn the flipping option of frame cycle on
cycleGenerator.turnOnFlip(frames);

