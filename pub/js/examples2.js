"use strict";

///////////////////////////////////// Card Cycle Examples ////////////////////////////////////

///// Example 1: Create a Card Cycle /////
const images = ["js/resources/pic1.jpg", 'js/resources/pic2.jpg', 'js/resources/pic3.jpg', 'js/resources/pic4.jpg', 'js/resources/pic5.jpg']

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

///////////////////////////////////// Timeline Cycle Examples ////////////////////////////////////

///// Example 5: Createa a Timeline Cycle /////
const images3 = ["js/resources/exercise.jpg", 'js/resources/exercise.jpg', 'js/resources/group.jpg', 'js/resources/individual.jpg',
'js/resources/group.jpg', 'js/resources/exercise.jpg', 'js/resources/individual.jpg', 'js/resources/exercise.jpg', 'js/resources/group.jpg', 'js/resources/individual.jpg']
const timelineTitles = ["Exercise 1", "Exercise 2", "Group Proposal", "Individual Proposal", "Phase 1", "Exercise 3", 
"Alpha Release", "Exercise 4", "Phase 2", "Final Submission"]
const timelineContents = []

function createTimelineContents(){
    for(let i = 0; i < images3.length; i++){
        timelineContents.push("Lorem Ipsum is simply dummy text of the printing and types. Lorem Ipsum has been the industry's " +
            "standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." +
            " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.");
    }
}
createTimelineContents();

const timelineCycle = document.querySelector('#timelineCycle');
const timeline = cycleGenerator.makeTimeline(images3, 10, timelineTitles, timelineContents);
timelineCycle.appendChild(timeline);

///// Example 6: Make the Timeline Cycle Hoverable /////
const timelineCycle2 = document.querySelector('#timelineCycle2');
const timeline2 = cycleGenerator2.makeTimeline(images3, 7, timelineTitles, timelineContents);
timelineCycle2.appendChild(timeline2);

// Add event listener for buttons
const enableTimelineHover = document.querySelector('#hover-timeline-on');
enableTimelineHover.addEventListener('click', function(){
    // Turn the hovering option of timeline on
    cycleGenerator2.turnOnHover(timeline2)
})

const disableTimelineHover = document.querySelector('#hover-timeline-off');
disableTimelineHover.addEventListener('click', function(){
    // Turn the hovering option of timeline off
    cycleGenerator2.turnOffHover(timeline2);
})

///////////////////////////////////// Frame Cycle Examples ////////////////////////////////////

///// Example 7: Create a Frame-Cycle /////
const images4 = ["js/resources/story1.jpg", 'js/resources/story2.jpg', 'js/resources/story3.jpg', 'js/resources/story4.jpg']
const frameTitles = ['Chapter 1', "Chapter 2", "Chapter 3", "Chapter 4"]
const frameContents = []

function createFrameContents(){
    for(let i = 0; i < images4.length; i++){
        frameContents.push("Lorem Ipsum is simply dummy text of the printing and types. Lorem Ipsum has been the industry's " +
            "standard dummy text ever since the 1500s.Lorem Ipsum.");
    }
}
createFrameContents();

const frameCycle = document.querySelector('#frameCycle');
const frames = cycleGenerator.makeFrames(images4, 4, "#EBA66B", frameTitles, frameContents);
frameCycle.appendChild(frames);

///// Example 8: Enable/Disable Frame Flip; Flip all frames; Reset all frame faces /////

const frameCycle2 = document.querySelector('#frameCycle2');
const frames2 = cycleGenerator2.makeFrames(images4, 4, "#EBA66B", frameTitles, frameContents);
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

///////////////////////////////////// Cube Cycle Examples ////////////////////////////////////

///// Example 9: Create a Cube Cycle /////
const images5 = ["js/resources/player1.jpg", 'js/resources/player2.jpg', 'js/resources/player3.jpg', 'js/resources/player4.jpg', 
'js/resources/player5.jpg', 'js/resources/player6.jpg']
const cubeContents = []

function createCubeContents(){
    for(let i = 0; i < 6; i++){
        cubeContents.push("Lorem Ipsum is simply dummy text of the printing and types. Lorem Ipsum has been the industry's " +
            "standard dummy text ever since the 1500s.Lorem Ipsum.");
    }
}
createCubeContents();

const cubeCycle = document.querySelector('#cubeCycle');
const cube = cycleGenerator.makeCube(images5, 6, cubeContents);
cubeCycle.appendChild(cube);

///// Example 10: Rotate a Cube Cycle /////
const cubeCycle2 = document.querySelector('#cubeCycle2');
const cube2 = cycleGenerator2.makeCube(images5, 6, cubeContents);
cubeCycle2.appendChild(cube2);

// Add event listener for buttons
const button1 = document.querySelector('#button1');
button1.addEventListener('click', function(){
    // Rotate to cube face 1
    cycleGenerator2.rotateCube(cube2, 1);
})

const button2 = document.querySelector('#button2');
button2.addEventListener('click', function(){
    // Rotate to cube face 2
    cycleGenerator2.rotateCube(cube2, 2);
})

const button3 = document.querySelector('#button3');
button3.addEventListener('click', function(){
    // Rotate to cube face 3
    cycleGenerator2.rotateCube(cube2, 3);
})

const button4 = document.querySelector('#button4');
button4.addEventListener('click', function(){
    // Rotate to cube face 4
    cycleGenerator2.rotateCube(cube2, 4);
})

const button5 = document.querySelector('#button5');
button5.addEventListener('click', function(){
    // Rotate to cube face 5
    cycleGenerator2.rotateCube(cube2, 5);
})

const button6 = document.querySelector('#button6');
button6.addEventListener('click', function(){
    // Rotate to cube face 6
    cycleGenerator2.rotateCube(cube2, 6);
})

///////////////////////////////////// Carousel Cycle Examples ////////////////////////////////////

///// Example 11: Create a Carousel Cycle /////
const images6 = ["js/resources/get_up.jpg", 'js/resources/breakfast.jpg', 'js/resources/go_to_work.jpg', 'js/resources/lunch.jpg', 
'js/resources/work.jpg', 'js/resources/go_to_work.jpg', 'js/resources/dinner.jpg', 'js/resources/tv.jpg', 'js/resources/shower.jpg', 'js/resources/sleep.jpg']
const carouselTitles = ["7:00", "8:00", "9:00", "12:00", "14:00", "17:00", "18:30", "20:00", "22:00", "23:30"]

const carouselCycle = document.querySelector('#carouselCycle');
const carousel = cycleGenerator.makeCarousel(images6, 10, "#F1E0B6", carouselTitles);
carouselCycle.appendChild(carousel);

///// Example 12: Rotate a Carousel Cycle /////
const carouselCycle2 = document.querySelector('#carouselCycle2');
const carousel2 = cycleGenerator2.makeCarousel(images6, 10, "#F1E0B6", carouselTitles);
carouselCycle2.appendChild(carousel2);

// Add event listener for buttons
const previousButton = document.querySelector('#prev-button');
previousButton.addEventListener('click', function(){
    // Rotate to the previous carousel
    cycleGenerator2.previousCarousel(carousel2);
})

const nextButton = document.querySelector('#next-button');
nextButton.addEventListener('click', function(){
    // Rotate to the next carousel
    cycleGenerator2.nextCarousel(carousel2);
})