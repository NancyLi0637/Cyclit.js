# Cyclit.js
https://cyclit-library.herokuapp.com/

## Description 
The purpose of this library is to allow developers to provide information specifically on a cycle for anything, 
such as a branch of a tree, a production of parts, or a flow of a team project. On most current websites regarding a 
cycle process, the information is purely images and texts. Sometimes information is presented in a cyclic manner, 
but that includes some trivial web coding. The pieces are not organized in a presentable way for end users 
(someone who wants to understand how something works from the start to the end) and they even need to do their own 
research. There are different forms to present a cycle each has its own type of interactions users can make, such as 
flipping over, hovering over, or rotating. The developers can choose to present these features by 
calling the API with their own elements. 

## Features

### Cycle Type
Card Cycle, Timeline Cycle, Frame Cycle, Cube Cycle, Carousel Cycle. 
### Cycle Interaction
Card, Frame: Flippable (if enabled) / Timeline: Hoverable (if enabled) / Cube: Rotatable, Hoverable / Carousel: Rotatable, Flippable
### Cycle Incorporation
In my original proposal, I intended to createa a circle like cycle and cards with swapping features. As I was working on my project, 
I actually found another library that can produce a circle cycle and uses very complex math calculations to achieve a nice visual effect.
Therefore, I changed my mind and implemented Cube and Carousel Cycle. Swapping wouldn't work as smoothly as I like so I didn't implement that feature.

## Deployment
Link: https://cyclit-library.herokuapp.com/

Documentation: https://cyclit-library.herokuapp.com/api-cyclit

## Getting Started

A quick start guide for using Cyclit.js.
Note: This library is intended for Vanilla JS.

### Setting Up 
To use this library, simply include "Cyclit.js" and "Cyclit.css" in your HTML file.

If you don't have jQuery as one of your scripts, include jQuery as well.

`<link rel="stylesheet" type="text/css" href="js/Cyclit.css">`   
`<script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>`
`<script defer type="text/javascript" src='js/Cyclit.js'></script>`

In order to access the functionalities in this library, always start by initiating a `CyclitGenerator`.

`const cycleGenerator = new CyclitGenerator();`

Cyclit.js is a library that provides 5 different types of pre-made cycle graphs where each type supports different combinations of information format.
Each CyclitGenerator can create one Card Cycle, one Timeline Cycle, one Frame Cycle, one Cube Cycle, and one Carousel Cycle. The instructions on the usage will be included in the Methods Section.

To test that the library is succesfully included, call the `connect()` function in your own javascript file and check the correct output is printed in the console.

`cycleGenerator.connect()`

If your console prints `Successfully included!` then the library is set up successfully.