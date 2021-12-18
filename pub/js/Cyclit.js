"use strict";

(function(global, document) {
    
    /* Developer API */
    function CyclitGenerator() {
        this.cards = []           // Card Cycle
        this.timelineSecs = []    // Timeline Cycle
        this.frames = []          // Frame Cycle
        this.cubeFaces = []       // Cube Cycle
        this.carouselCells = []   // Carousel Cycle

        this.cardsHolder = null;
        this.pageHolder = null;
    }

    CyclitGenerator.prototype = {

        /* Make a Card Cycle */
        makeCards: function(images, n, backColor) {
            for(let i = 0; i < n; i++){
                const newCard = new Card(images[i], backColor);
                this.cards.push(newCard);
            }
            this.cardsHolder = _createCards(this.cards);
            return this.cardsHolder;
        },

        /* Turn on Card/Frame Flipping feature */
        turnOnFlip: function(e){
            if(e.classList.contains('default-cards-holder')){
                _flipCardsOn(this.cards, this.cardsHolder);
                for(let i = 0; i < this.cards.length; i++){
                    this.cards[i].flippable = true;
                }
            }
            else if(e.classList.contains('page-holder')){
                _flipFramesOn(this.frames, this.pageHolder);
                for(let i = 0; i < this.frames.length; i++){
                    this.frames[i].flippable = true;
                }
            }
        },

        /* Turn off Card/Frame Flipping feature */
        turnOffFlip: function(e) {
            if(e.classList.contains('default-cards-holder')){
                _flipCardsOff(this.cards, this.cardsHolder);
                for(let i = 0; i < this.cards.length; i++){
                    this.cards[i].flippable = false;
                }
            }
            else if(e.classList.contains('page-holder')){
                _flipFramesOff(this.frames, this.pageHolder);
                for(let i = 0; i < this.frames.length; i++){
                    this.frames[i].flippable = false;
                }
            }
        },

        /* Flip all cards/frames */
        flipAll: function(e){
            if(e.classList.contains('default-cards-holder')){
                _flipAllCards(this.cards, this.cardsHolder);
            }else if(e.classList.contains('page-holder')){
                _flipAllFrames(this.frames, this.pageHolder);
            }
        },

        /* Reset all cards/frames to front face */
        resetAll: function(e){
            if(e.classList.contains('default-cards-holder')){
                _resetCards(this.cards, this.cardsHolder);
            }else if(e.classList.contains('page-holder')){
                _resetFrames(this.frames, this.pageHolder);
            }
        },

        /* Make a Timeline Cycle */
        makeTimeline: function(images, n, titles, contents) {
            for(let i = 0; i < n; i++){
                const newSection = new TimelineSection(images[i], titles[i], contents[i]);
                this.timelineSecs.push(newSection);
            }
            return _createTimeline(this.timelineSecs);
        },

        /* Turn on the hovering feature of a timeline section */
        turnOnHover: function(e){
            if(e.classList.contains('timeline-holder')){
                _hoverTimelineOn(this.timelineSecs)
                for(let i = 0; i < this.timelineSecs.length; i++){
                    this.timelineSecs[i].hoverable = false;
                }
            }
        },

        /* Turn off the hovering feature of a timeline section */
        turnOffHover: function(e) {
            if(e.classList.contains('timeline-holder')){
                _hoverTimelineOff(this.timelineSecs)
                for(let i = 0; i < this.timelineSecs.length; i++){
                    this.timelineSecs[i].hoverable = true;
                }
            }
        },

        /* Make a Frame Cycle */
        makeFrames: function(images, n, backColor, titles, contents){
            for(let i = 0; i < n; i++){
                const newFrame = new Frame(images[i], backColor, titles[i], contents[i]);
                this.frames.push(newFrame)
            }
            this.pageHolder = _createFrames(this.frames);
            return this.pageHolder;
        },

        /* Make a Cube Cycle */
        makeCube: function(images, n, contents){
            // All face orders are front(1), back(2), left(3), right(4), top(5), bottom(6)
            const angles = [0, 180, -90, 90, 90, -90]
            for(let i = 0; i < n; i++){
                const newFace = new CubeFace(images[i], i+1, 100, angles[i], contents[i]);
                this.cubeFaces.push(newFace);
            }
            return _createCubeFaces(this.cubeFaces);
        },

        /* Rotate to a certain face of the Cube */
        rotateCube: function(e, face){
            if(e.classList.contains('cube-holder')){
                _cubeRotate(this.cubeFaces, face);
            }
        },

        /* Make a Carousel Cycle */
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
            return _createCarouselCells(this.carouselCells);
        },

        /* Rotate right of the Carousel */
        previousCarousel: function(e){
            if(e.classList.contains('carousel-holder')){
                this.carouselCells[0]--;
                const angle = this.carouselCells[0] / (this.carouselCells.length-1) * (-360);
                _carouselRotate(this.carouselCells, angle);
            }
        },

        /* Rotate left of the Carousel */
        nextCarousel: function(e) {
            if(e.classList.contains('carousel-holder')){
                this.carouselCells[0]++;
                const angle = this.carouselCells[0] / (this.carouselCells.length-1) * (-360);
                _carouselRotate(this.carouselCells, angle);
            }
        }

    }

    ///////////////////////////// Private Objects and Functions Below /////////////////////////////////

    /* JS Object */
    class Card {
        constructor(cover, back) {
            this.cover = cover;
            this.back = back;
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
        constructor(cover, back, title, content) {
            this.cover = cover;
            this.back = back;
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
    function _createCards(cards){
        const newCardsHolder = document.createElement("div");
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
            cardBack.style.borderColor = cards[i].back;
            cardBack.style.background = cards[i].back;
            card.className = 'card';
            cardHolder.className = 'card-holder';
            cardHolder.style.borderColor = cards[i].back;

            cardFront.appendChild(imgHolder);
            card.appendChild(cardFront);
            card.appendChild(cardBack);
            cardHolder.appendChild(card);

            newCardsHolder.appendChild(cardHolder);
        }

        return newCardsHolder;
    }

    /* Turn the flipping option of cards on */
    function _flipCardsOn(cards, cardsHolder) {
        if(cards[0].flippable) {
            return;
        }

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
    function _flipCardsOff(cards, cardsHolder) {
        if(!cards[0].flippable) {
            return;
        }

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
    function _flipAllCards(cards, cardsHolder) {
    
        for(let i = 0; i < cards.length; i++){
            const cardHolder = cardsHolder.children[i]
            const card = cardHolder.children[0];

            card.classList.toggle('is-flipped');
            cards[i].flipped = !cards[i].flipped;
        }
    }

    /* Reset all flipped cards to card front */
    function _resetCards(cards, cardsHolder) {

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
    function _createTimeline(sections){
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
    function _hoverTimelineOn(sections) {
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
    function _hoverTimelineOff(sections) {
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
    function _createFrames(frames){
        const pageHolder = document.createElement('div');
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
                frameBack.style.background = frames[track].back;
                frame.className = 'frame';
                frame.style.background = frames[track].back;
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
    function _flipFramesOn(frames, pageHolder) {
        if(frames[0].flippable){
            return;
        }

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
    function _flipFramesOff(frames, pageHolder) {
        if(!frames[0].flippable) {
            return;
        }

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
    function _flipAllFrames(frames, pageHolder) {

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
    function _resetFrames(frames, pageHolder) {

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
    function _createCubeFaces(faces) {
    
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
    function _cubeRotate(faces, face) {
        const cube = document.querySelector('.cube');
        cube.style.transform = 'translateZ(-' + faces[face-1].z_index + 'px) ' + (face == 5 || face == 6 ? 'rotateX(' : 'rotateY(') + (-1*faces[face-1].angle) + 'deg)';
    }

    /* Create a Carousel Cycle */
    function _createCarouselCells(cells) {

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
    function _carouselRotate(cells, angle){
        const carousel = document.querySelector('.carousel');
        carousel.style.transform = 'translateZ(-' + cells[1].z_index + 'px) rotateY(' + angle +'deg)';
    }

    ///////////////////////////// End of Private Objects and Functions /////////////////////////////////

    global.CyclitGenerator = global.CyclitGenerator || CyclitGenerator

})(window, window.document);