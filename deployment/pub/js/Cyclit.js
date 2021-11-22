"use strict";

const body = $('body');

/* User API */
function CyclitGenerator() {
    this.cards = []
    this.timelineSecs = []
    this.frames = []
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
        }
        else if(e.classList.contains('page-holder')){
            flipFramesOn(this.frames);
        }
    },

    turnOnHover: function(e){
        if(e.classList.contains('timeline-holder')){
            hoverTimelineOn(this.timelineSecs)
        }
    },

    makeTimeline: function(images, n, titles, contents) {
        for(let i = 0; i < n; i++){
            const newSection = new TimelineSection(images[i], titles[i], contents[i]);
            this.timelineSecs.push(newSection);
        }
        return createTimeline(this.timelineSecs);
    },

    makeFrames: function(images, n, titles, contents){
        for(let i = 0; i < n; i++){
            const newFrame = new Frame(images[i], titles[i], contents[i]);
            this.frames.push(newFrame)
        }
        return createFrames(this.frames);
    }

}

/* JS Object */
class Card {
    constructor(cover) {
        this.cover = cover;
    }
}

class TimelineSection {
    constructor(cover, title, content) {
        this.cover = cover;
        this.title = title;
        this.content = content;
    }
}

class Frame {
    constructor(cover, title, content) {
        this.cover = cover;
        this.title = title;
        this.content = content;
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
        const imgHolder = document.createElement('img');


        imgHolder.setAttribute('src', cards[i].cover);
        imgHolder.className = 'img-card';
        cardFront.className = 'card-face';
        card.className = 'card';
        cardHolder.className = 'card-holder';

        cardFront.append(imgHolder);
        card.appendChild(cardFront);
        cardHolder.append(card);

        newCardsHolder.appendChild(cardHolder);
    }

    body.append(newCardsHolder)

    return newCardsHolder;
}

/* Turn the flipping option of cards on */
function flipCardsOn(cards) {
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
        const cardBack = document.createElement('div');

        cardBack.className = 'card-face card-face-back';
        card.addEventListener( 'click', function() {
            card.classList.toggle('is-flipped');
        });

        card.appendChild(cardBack);
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

    body.append(timelineHolder);

    return timelineHolder;
}

/* Turn the hovering option of timeline on */
function hoverTimelineOn(sections) {
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

        hoverContent.appendChild(document.createTextNode(sections[i].content));
        hoverContentHolder.appendChild(hoverContent);
        hoverImageHolder.appendChild(hoverImage);
        hoverHolder.appendChild(hoverImageHolder);
        hoverHolder.appendChild(hoverContentHolder);

        sectionHolder.appendChild(hoverCover);
        sectionHolder.appendChild(hoverHolder);
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
            const imgHolder = document.createElement('div');
            const img = document.createElement('img');
            const contentHolder = document.createElement('div');

            img.setAttribute('src', frames[track].cover);
            imgHolder.className = 'img-holder-frame';
            contentHolder.className = 'content-holder';
            frameFront.className = 'frame-face';
            frame.className = 'frame';
            frameHolder.className = 'frame-holder'

            imgHolder.appendChild(img);
            contentHolder.appendChild(document.createTextNode(frames[track].content));
            frameFront.appendChild(imgHolder);
            frameFront.appendChild(contentHolder);
            frame.appendChild(frameFront);
            frameHolder.appendChild(frame);
            columnHolder.appendChild(frameHolder);

            track += 2;
        }

        pageHolder.appendChild(columnHolder);
        track = 1;
    }

    body.append(pageHolder)

    return pageHolder
}

/* Turn the flipping option of frame cycle on */
function flipFramesOn(frames) {
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
        const frameBack = document.createElement('div');
        const title = document.createElement('h3');

        title.className = 'title-frame';
        frameBack.className = 'frame-face frame-face-back';
        frame.addEventListener( 'click', function() {
            frame.classList.toggle('is-flipped');
        });

        title.appendChild(document.createTextNode(frames[i].title));
        frameBack.appendChild(title);
        frame.appendChild(frameBack);
    }
}
