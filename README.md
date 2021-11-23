# Cyclit
https://cyclit-library.herokuapp.com/

## Description 
The purpose of this library is to allow developers to provide information specifically on a life cycle for anything, 
such as a branch of a tree, a production of parts, or a flow of a team project. On most current websites regarding a 
cycle process, the information is purely images and texts. Sometimes information is presented in a cyclic manner, 
but that includes some trivial web coding. The pieces are not organized in a presentable way for end users 
(someone who wants to understand how something works from the start to the end) and they even need to do their own 
research. There are different forms to present a cycle each has its own type of interactions users can make, such as 
flipping over, hovering over, or dragging and moving. The developers can choose to present these features by 
calling the API with their own elements. Flipping and hovering will be pure information fetch for users. To interact 
with the cycle in a quiz-like manner, a user can drag elements around and will be prompted once they are placed in the 
correct order.

## Features

### Cycle Type
I implemented three of the four types of cycles I intend to make - card cycle, timeline cycle, and frame cycle.
### Cycle Interaction
Right now the only two types of interactions are flipping over a card/frame or hovering over a timeline section. 
### Cycle Incorporation
For the demo, I used 5 groups of information for each type of the cycle. Although the library does support different
lengths of groups, the exact adjustment responding to each length is not implemented yet. For example, a card in a 
group of 4 cards should have a longer width than a card in a group of 5 cards. Features like this are not finished yet.

## Deployment
Link: https://cyclit-library.herokuapp.com/

On the website, there are three types of cycles. The first one is a row of cards. To make the cycle implementation
easier, a developer can simply pass in a group of images and the length of the group to generate a set of cards. These
cards have a flipping feature which can be enabled/disabled by calling the corresponding function. A user can 
enable/disable the flipping option by clicking on the buttons. When one hover over a flippable card, a hint message 
will be shown.

The second one on the website is a timeline cycle. Sections are placed on left and right in a swapping manner. 
Similarly, a developer just need to pass in some information to generate a timeline - pictures, titles, and 
descriptions for each section. Each section will only show the picture and the title. To see the descriptions, the 
user needs to enable the hovering option by clicking on the button.
(Note: For some reasons the 'Disable Hover' button needs to be clicked twice to disable. I haven't fixed the problem
yet.)

The third one is a frame cycle. The information are presented in a story like manner. The way to generate a frame cycle 
is the same as generating a timeline cycle but calling a different function. Each frame only shows the picture and the
description. To see the title, a user needs to click on the buttons to enable the feature.

(Note: Sometimes the flipping is stuck. Simply refresh the page to try out the feature.)

## JS Objects
The object for creating a cycle generator is CyclitGenerator. Each generator can store one instance of each type of 
cycle. Each storage is repsented as a list of cycle elements. There are three JS objects corresponding to the three 
cycle elements, respectively - a Card object, a Timeline object, and a
Frame object. All of them store a cover image. The latter two also store a title and a description. A Card object and a
Frame object has a 'flippable' property while a Timeline object has a 'hover' property. 

### CyclitGenerator
{ cards: [Card, Card]; timelineSecs: [TimelineSection, TimelineSection]; frames: [Frame, Frame]}
### Card
{ cover: 'pic1.jpg'; flippable: false; }
### TimelineSection
{  cover: 'pic1.jpg'; title: 'Baby Tree'; description: 'A baby tree is 1-3 months old.'; hover: false; }
### Frame
{  cover: 'pic1.jpg'; title: 'Baby Tree'; description: 'A baby tree is 1-3 months old.'; flippable: false; }

When a user clicks on the enable/disable button, it will change the flip/hover property within these objects. 
Once the property is changed, a pre-created DOM element and function will be enabled accordingly. In addition to that, a 
hint message on hover will be added to each of the instances. On disable, the elements and functions will be removed.

## API 
- to create a new CyclitGenerator

`new CyclitGenerator()`

- to create a new card cycle

`makeCards(covers, length)`

- to create a new timeline cycle

`makeTimeline(covers, length, titles, contents)`

- to create a new frame cycle

`makeFrames(covers, length, titles, contents)`

- to turn the flipping option on

`turnOnFlip(object)`

- to turn the flipping option off

`turnOffFlip(object)`

- to turn the hovering option on

`turnOnHover(object)`

- to turn the hovering option off

`turnOffHover(object)`

## Future Implementation

### Cycle Type
I still one more cycle type to implement which is the circle cycle. This cycle will have a circle of circles with 
corresponding cover and content.
### Cycle Interaction
In addition to flipping and hovering, I also want to implement a dragging/reordering feature for the cycles for more 
user interactions. I also want to make it in a quiz-like manner so users can be notified whether they ordered the 
elements in the cycle correctly. I also want to allow users to modify the title and contents for each element in the 
cycle. For easy styling options, I'll add choices for the developers to change the color of the element borders and
backgrounds. 
### Cycle Parameter
Right now each cycle has 5 elements. Although they do support different lengths of groups, the styling is not responsive
yet. For example, a card in a group of four cards should be wider than a card in a group of five cards. I'll be fixing 
these details for the final submission.

I think the most challenging part for me is to incorporate the circle cycle. With various length, the elements will be 
placed at different spots to make the cycle looks like a circle. I think there is some width/height calculation involved
but I haven't figured out an efficient way to accomplish it.