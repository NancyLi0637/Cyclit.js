"use strict";

const body = $('body');

/* User API */
function CyclitGenerator() {
    this.cards = []
    this.timelineSecs = []
    this.frames = []
    this.carouselCells = []
    this.cubeFaces = []
}

CyclitGenerator.prototype = {

    makeCards: function(images, n) {
        for(let i = 0; i < n; i++){
            const newCard = new Card(images[i]);
            this.cards.push(newCard);
        }
        return createCards(this.cards)
    },

    turnOnFlip: function(e){
        if(e.classList.contains('default-cards-holder')){
            flipCardsOn(this.cards);
            for(let i = 0; i < this.cards.length; i++){
                this.cards[i].flippable = true;
            }
        }
        else if(e.classList.contains('page-holder')){
            flipFramesOn(this.frames);
            for(let i = 0; i < this.frames.length; i++){
                this.frames[i].flippable = true;
            }
        }
    },

    turnOffFlip: function(e) {
        if(e.classList.contains('default-cards-holder')){
            flipCardsOff(this.cards);
            for(let i = 0; i < this.cards.length; i++){
                this.cards[i].flippable = false;
            }
        }
        else if(e.classList.contains('page-holder')){
            flipFramesOff(this.frames);
            for(let i = 0; i < this.frames.length; i++){
                this.frames[i].flippable = false;
            }
        }
    },

    flipAll: function(e){
        if(e.classList.contains('default-cards-holder')){
            flipAllCards(this.cards);
        }else if(e.classList.contains('page-holder')){
            flipAllFrames(this.frames);
        }
    },

    resetAll: function(e){
        if(e.classList.contains('default-cards-holder')){
            resetCards(this.cards);
        }else if(e.classList.contains('page-holder')){
            resetFrames(this.frames);
        }
    },

    makeTimeline: function(images, n, titles, contents) {
        for(let i = 0; i < n; i++){
            const newSection = new TimelineSection(images[i], titles[i], contents[i]);
            this.timelineSecs.push(newSection);
        }
        return createTimeline(this.timelineSecs);
    },

    turnOnHover: function(e){
        if(e.classList.contains('timeline-holder')){
            hoverTimelineOn(this.timelineSecs)
            for(let i = 0; i < this.timelineSecs.length; i++){
                this.timelineSecs[i].hoverable = false;
            }
        }
    },

    turnOffHover: function(e) {
        if(e.classList.contains('timeline-holder')){
            hoverTimelineOff(this.timelineSecs)
            for(let i = 0; i < this.timelineSecs.length; i++){
                this.timelineSecs[i].hoverable = true;
            }
        }
    },

    makeFrames: function(images, n, titles, contents){
        for(let i = 0; i < n; i++){
            const newFrame = new Frame(images[i], titles[i], contents[i]);
            this.frames.push(newFrame)
        }
        return createFrames(this.frames);
    },

    makeCube: function(images, n, contents){
        // All face orders are front(1), back(2), left(3), right(4), top(5), bottom(6)
        const angles = [0, 180, -90, 90, 90, -90]
        for(let i = 0; i < n; i++){
            const newFace = new CubeFace(images[i], i+1, 100, angles[i], contents[i]);
            this.cubeFaces.push(newFace);
        }
        return createCubeFaces(this.cubeFaces);
    },

    rotateCube: function(e, face){
        if(e.classList.contains('cube-holder')){
            cubeRotate(this.cubeFaces, face);
        }
    },

    makeCarousel: function(images, n){
        // Store the current cell index
        this.carouselCells.push(0)
        // Calculate the appropriate translation and angle
        const angle = 360/n;
        const translation = 105/ Math.tan( Math.PI / n );
        
        for(let i = 0; i < n; i++){
            const newCell = new CarouselCell(images[i], i+1, translation, angle * i);
            this.carouselCells.push(newCell);
        }
        return createCarouselCells(this.carouselCells);
    },

    previousCarousel: function(e){
        if(e.classList.contains('carousel-holder')){
            this.carouselCells[0]--;
            const angle = this.carouselCells[0] / (this.carouselCells.length-1) * (-360);
            carouselRotate(this.carouselCells, angle);
        }
    },

    nextCarousel: function(e) {
        if(e.classList.contains('carousel-holder')){
            this.carouselCells[0]++;
            const angle = this.carouselCells[0] / (this.carouselCells.length-1) * (-360);
            carouselRotate(this.carouselCells, angle);
        }
    }

}

/* JS Object */
class Card {
    constructor(cover) {
        this.cover = cover;
        this.flippable = false;
        this.flipped = false;
    }
}

class TimelineSection {
    constructor(cover, title, content) {
        this.cover = cover;
        this.title = title;
        this.content = content;
        this.hoverable = false;
    }
}

class Frame {
    constructor(cover, title, content) {
        this.cover = cover;
        this.title = title;
        this.content = content;
        this.flippable = false;
        this.flipped = false;
    }
}

class CubeFace {
    constructor(cover, face, z_index, angle, content) {
        this.cover = cover;
        this.face = face;
        this.z_index = z_index;
        this.angle = angle;
        this.content = content;
    }
}

class CarouselCell {
    constructor(cover, number, z_index, angle) {
        this.cover = cover;
        this.number = number;
        this.z_index = z_index;
        this.angle = angle;
    }
}


/* DOM Manipulation */

/* Create a Card Cycle */
function createCards(cards){
    const newCardsHolder = document.createElement("div");
    newCardsHolder.id = 'default-cards-holder';
    newCardsHolder.className = 'default-cards-holder';

    for(let i = 0; i < cards.length; i++){
        const cardHolder = document.createElement('div');
        const card = document.createElement('div');
        const cardFront = document.createElement('div');
        const cardBack = document.createElement('div');
        const imgHolder = document.createElement('img');

        imgHolder.setAttribute('src', cards[i].cover);
        imgHolder.className = 'img-card';
        cardFront.className = 'card-face';
        cardBack.className = 'card-face card-face-back';
        card.className = 'card';
        cardHolder.className = 'card-holder';

        cardFront.appendChild(imgHolder);
        card.appendChild(cardFront);
        card.appendChild(cardBack);
        cardHolder.appendChild(card);

        newCardsHolder.appendChild(cardHolder);
    }

    return newCardsHolder;
}

/* Turn the flipping option of cards on */
function flipCardsOn(cards) {
    if(cards[0].flippable) {
        return;
    }

    const cardsHolder = document.querySelector('#default-cards-holder');

    for(let i = 0; i < cards.length; i++){
        const cardHolder = cardsHolder.children[i]
        const card = cardHolder.children[0];

        // Add hover message
        const hoverMessageHolder = document.createElement('div');
        const hoverMessage = document.createElement('p');

        hoverMessageHolder.className = 'hover-message-holder';

        hoverMessage.appendChild(document.createTextNode('Click to flip'));
        hoverMessageHolder.appendChild(hoverMessage);

        cardHolder.appendChild(hoverMessageHolder);

        // Add flipping feature
        card.addEventListener( 'click', function() {
            card.classList.toggle('is-flipped');

            // Set card property based on flip
            if(cards[i].flipped){
                cards[i].flipped = false;
            }else{
                cards[i].flipped = true;
            }
        });
    }
}


/* Turn the flipping option of cards off */
function flipCardsOff(cards) {
    if(!cards[0].flippable) {
        return;
    }

    const cardsHolder = document.querySelector('#default-cards-holder');

    for(let i = 0; i < cards.length; i++){
        const cardHolder = cardsHolder.children[i]
        const card = cardHolder.children[0];

        // Remove hovering message
        cardHolder.removeChild(cardHolder.children[1])
        // Remove flipping function
        card.addEventListener( 'click', function() {
            card.classList.remove('is-flipped');

            // Set card property based on flip
            if(cards[i].flipped){
                cards[i].flipped = false;
            }else{
                cards[i].flipped = true;
            }
        });
    }
}

/* Flip all the cards at once */
function flipAllCards(cards) {
    const cardsHolder = document.querySelector('#default-cards-holder');

    for(let i = 0; i < cards.length; i++){
        const cardHolder = cardsHolder.children[i]
        const card = cardHolder.children[0];

        card.classList.toggle('is-flipped');
        cards[i].flipped = !cards[i].flipped;
    }
}

/* Reset all flipped cards to card front */
function resetCards(cards) {
    const cardsHolder = document.querySelector('#default-cards-holder');

    for(let i = 0; i < cards.length; i++){
        const cardHolder = cardsHolder.children[i]
        const card = cardHolder.children[0];

        if(cards[i].flipped){
            card.classList.toggle('is-flipped');
            cards[i].flipped = false;
        }
    }
}

/* Create a Timeline Cycle */
function createTimeline(sections){
    const timelineHolder = document.createElement('div');
    timelineHolder.id = 'timeline-holder';
    timelineHolder.className = 'timeline-holder';

    for(let i = 0; i < sections.length; i++){
        const container = document.createElement('div');
        const sectionHolder = document.createElement('div');
        const imgHolder = document.createElement('img');
        const titleHolder = document.createElement('div');
        const title = document.createElement('h3');

        imgHolder.setAttribute('src', sections[i].cover);
        imgHolder.className = 'img-timeline';
        titleHolder.className = 'title-holder';
        sectionHolder.className = 'section-holder';

        if(i % 2 === 0){
            container.className = 'container left'
        }else{
            container.className = 'container right'
        }

        title.appendChild(document.createTextNode(sections[i].title));
        titleHolder.appendChild(title);
        sectionHolder.appendChild(imgHolder);
        sectionHolder.appendChild(titleHolder);
        container.appendChild(sectionHolder);
        timelineHolder.appendChild(container);
    }

    return timelineHolder;
}

/* Turn the hovering option of timeline on */
function hoverTimelineOn(sections) {
    if(sections[0].hoverable){
        return
    }

    const timelineHolder = document.querySelector('#timeline-holder');

    for(let i = 0; i < sections.length; i++){
        const sectionHolder = timelineHolder.children[i].children[0];

        const hoverHolder = document.createElement('div');
        const hoverImageHolder = document.createElement('div');
        const hoverImage = document.createElement('img');
        const hoverContentHolder = document.createElement('div');
        const hoverContent = document.createElement('p');
        const hoverCover = document.createElement('div');

        hoverCover.className = 'hover-cover';
        hoverContentHolder.className = 'hover-content-holder';
        hoverImage.className = 'hover-image';
        hoverImageHolder.className = 'hover-image-holder';
        hoverHolder.className = 'hover-holder';
        hoverImage.setAttribute('src', sections[i].cover)
        sectionHolder.classList.add('section-hover-holder')
        sectionHolder.classList.add('holder')

        hoverContent.appendChild(document.createTextNode(sections[i].content));
        hoverContentHolder.appendChild(hoverContent);
        hoverImageHolder.appendChild(hoverImage);
        hoverHolder.appendChild(hoverImageHolder);
        hoverHolder.appendChild(hoverContentHolder);

        sectionHolder.appendChild(hoverCover);
        sectionHolder.appendChild(hoverHolder);
        
    }
}

/* Turn the hovering option of timeline off */
function hoverTimelineOff(sections) {
    if(!sections[0].hoverable){
        return
    }

    const timelineHolder = document.querySelector('#timeline-holder');

    for(let i = 0; i < sections.length; i++){
        const sectionHolder = timelineHolder.children[i].children[0];

        sectionHolder.removeChild(sectionHolder.children[3]);
        sectionHolder.removeChild(sectionHolder.children[2]);
        sectionHolder.classList.remove('holder');
    }
}

/* Create a Frame Cycle */
function createFrames(frames){
    const pageHolder = document.createElement('div');
    pageHolder.id = 'page-holder';
    pageHolder.className = 'page-holder';

    let track = 0;

    for(let i = 0; i < 2; i++){
        const columnHolder = document.createElement('div');
        columnHolder.className = 'column-holder';

        while(track < frames.length) {
            const frameHolder = document.createElement('div');
            const frame = document.createElement('div');
            const frameFront = document.createElement('div');
            const frameBack = document.createElement('div');
            const title = document.createElement('h3');
            const imgHolder = document.createElement('div');
            const img = document.createElement('img');
            const contentHolder = document.createElement('div');

            img.setAttribute('src', frames[track].cover);
            img.className = 'img-frame';
            imgHolder.className = 'img-holder-frame';
            contentHolder.className = 'content-holder';
            frameFront.className = 'frame-face';
            title.className = 'title-frame';
            frameBack.className = 'frame-face frame-face-back';
            frame.className = 'frame';
            frameHolder.className = 'frame-holder'

            imgHolder.appendChild(img);
            contentHolder.appendChild(document.createTextNode(frames[track].content));
            frameFront.appendChild(imgHolder);
            frameFront.appendChild(contentHolder);
            title.appendChild(document.createTextNode(frames[i].title));
            frameBack.appendChild(title);
            frame.appendChild(frameFront);
            frame.appendChild(frameBack);
            frameHolder.appendChild(frame);
            columnHolder.appendChild(frameHolder);

            track += 2;
        }

        pageHolder.appendChild(columnHolder);
        track = 1;
    }

    return pageHolder
}

/* Turn the flipping option of frame cycle on */
function flipFramesOn(frames) {
    if(frames[0].flippable){
        return;
    }

    const pageHolder = document.querySelector('#page-holder');

    for(let i = 0; i < frames.length; i++){
        let frameHolder;
        if(i % 2 === 0){
            frameHolder = pageHolder.children[0].children[Math.floor(i/2)]
        }else {
            frameHolder = pageHolder.children[1].children[Math.floor(i/2)]
        }
        const frame = frameHolder.children[0]

        // Add hover message
        const hoverMessageHolder = document.createElement('div');
        const hoverMessage = document.createElement('p');

        hoverMessageHolder.className = 'hover-message-holder';

        hoverMessage.appendChild(document.createTextNode('Click to flip'));
        hoverMessageHolder.appendChild(hoverMessage);

        frameHolder.appendChild(hoverMessageHolder);

        // Add flipping feature
        frame.addEventListener( 'click', function() {
            frame.classList.toggle('is-flipped');

            // Set frame property based on flip
            if(frames[i].flipped){
                frames[i].flipped = false;
            }else{
                frames[i].flipped = true;
            }
        });
    }
}

/* Turn the flipping option of frames off */
function flipFramesOff(frames) {
    if(!frames[0].flippable) {
        return;
    }

    const pageHolder = document.querySelector('#page-holder');

    for(let i = 0; i < frames.length; i++){
        let frameHolder;
        if(i % 2 === 0){
            frameHolder = pageHolder.children[0].children[Math.floor(i/2)]
        }else {
            frameHolder = pageHolder.children[1].children[Math.floor(i/2)]
        }
        const frame = frameHolder.children[0]

        // Remove hover message
        frameHolder.removeChild(frameHolder.children[1]);

        // Remove flipping feature
        frame.addEventListener( 'click', function() {
            frame.classList.remove('is-flipped');

            // Set frame property based on flip
            if(frames[i].flipped){
                frames[i].flipped = false;
            }else{
                frames[i].flipped = true;
            }
        });
    }
}

/* Flip all the frames at once */
function flipAllFrames(frames) {

    const pageHolder = document.querySelector('#page-holder');

    for(let i = 0; i < frames.length; i++){
        let frameHolder;
        if(i % 2 === 0){
            frameHolder = pageHolder.children[0].children[Math.floor(i/2)]
        }else {
            frameHolder = pageHolder.children[1].children[Math.floor(i/2)]
        }
        const frame = frameHolder.children[0]

        frame.classList.toggle('is-flipped');
        frames[i].flipped = !frames[i].flipped;
    }
}

/* Reset all flipped frames to frame front */
function resetFrames(frames) {

    const pageHolder = document.querySelector('#page-holder');

    for(let i = 0; i < frames.length; i++){
        let frameHolder;
        if(i % 2 === 0){
            frameHolder = pageHolder.children[0].children[Math.floor(i/2)]
        }else {
            frameHolder = pageHolder.children[1].children[Math.floor(i/2)]
        }
        const frame = frameHolder.children[0]

        if(frames[i].flipped){
            frame.classList.toggle('is-flipped');
            frames[i].flipped = false;
        }
    }
}

/* Create a Cube Cycle */
function createCubeFaces(faces) {
   
    const cubeHolder = document.createElement('div');
    const cube = document.createElement('div');

    cube.className = 'cube';
    cubeHolder.className = 'cube-holder';

    for(let i = 0; i < faces.length; i++){
        const cubeFace = document.createElement('div');
        const faceLabelHolder = document.createElement('div');
        const faceLabel = document.createElement('h1');
        const hoverHolder = document.createElement('div');
        const hoverImageHolder = document.createElement('div');
        const hoverImage = document.createElement('img');
        const hoverContentHolder = document.createElement('div');
        const hoverContent = document.createElement('p');
        const hoverCover = document.createElement('div');

        hoverCover.className = 'hover-cover';
        hoverContentHolder.className = 'hover-content-holder';
        hoverImage.className = 'hover-image';
        hoverImageHolder.className = 'hover-image-holder';
        hoverHolder.className = 'hover-holder';
        hoverImage.setAttribute('src', faces[i].cover)
        faceLabelHolder.className = 'face-label-holder';
        cubeFace.className = 'cube-face cube-hover-holder holder';
        cubeFace.style.transform = (i == 4 || i == 5 ? 'rotateX(' : 'rotateY(') + faces[i].angle + 'deg) translateZ(' + faces[i].z_index + 'px)';
        cubeFace.style.background = 'hsla(' + 50*i + ', 100%, 50%, 0.7)';

        hoverContent.appendChild(document.createTextNode(faces[i].content));
        hoverContentHolder.appendChild(hoverContent);
        hoverImageHolder.appendChild(hoverImage);
        hoverHolder.appendChild(hoverImageHolder);
        hoverHolder.appendChild(hoverContentHolder);
        faceLabel.appendChild(document.createTextNode(faces[i].face));
        faceLabelHolder.appendChild(faceLabel);
        cubeFace.appendChild(faceLabelHolder);
        cubeFace.appendChild(hoverCover);
        cubeFace.appendChild(hoverHolder);
        cube.appendChild(cubeFace)
    }

    cubeHolder.appendChild(cube);

    return cubeHolder;
}

/* Rotate the cube to the required face */
function cubeRotate(faces, face) {
    const cube = document.querySelector('.cube');
    cube.style.transform = 'translateZ(-' + faces[face-1].z_index + 'px) ' + (face == 5 || face == 6 ? 'rotateX(' : 'rotateY(') + (-1*faces[face-1].angle) + 'deg)';
}

/* Create a Carousel Cycle */
function createCarouselCells(cells) {

    const carouselHolder = document.createElement('div');
    const carousel = document.createElement('div');

    carousel.className = 'carousel';
    carousel.style.transform = 'translateZ(-' + cells[1].z_index + 'px)';
    carouselHolder.className = 'carousel-holder';

    for(let i = 1; i < cells.length; i++){
        const cellHolder = document.createElement('div');
        const cell = document.createElement('div');
        const cellFront = document.createElement('div');
        const cellBack = document.createElement('div');
        const imgHolder = document.createElement('img');
        const number = document.createElement('h1');
        const hoverMessageHolder = document.createElement('div');
        const hoverMessage = document.createElement('p');

        hoverMessageHolder.className = 'hover-message-holder';
        imgHolder.setAttribute('src', cells[i].cover);
        imgHolder.className = 'img-cell';
        cellFront.className = 'cell-face';
        number.className = 'number-cell';
        cellBack.className = 'cell-face cell-face-back';
        cell.className = 'cell'
        cellHolder.className = 'carousel-cell';
        cellHolder.style.transform = 'rotateY(' + cells[i].angle +'deg) translateZ(' + cells[i].z_index + 'px)';

        hoverMessage.appendChild(document.createTextNode('Click to flip'));
        hoverMessageHolder.appendChild(hoverMessage);
        cellFront.appendChild(imgHolder);
        number.appendChild(document.createTextNode(cells[i].number));
        cellBack.appendChild(number);
        cell.appendChild(cellFront);
        cell.appendChild(cellBack);
        cellHolder.appendChild(cell);
        cellHolder.appendChild(hoverMessageHolder);
        carousel.appendChild(cellHolder);

        cell.addEventListener( 'click', function() {
            cell.classList.toggle('is-flipped');
        });
    }


    carouselHolder.appendChild(carousel);

    return carouselHolder;
}

/* Rotate the Carousel */
function carouselRotate(cells, angle){
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = 'translateZ(-' + cells[1].z_index + 'px) rotateY(' + angle +'deg)';
}
