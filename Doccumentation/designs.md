# CSCI 265 Project Design document

## Team name: It's Not Mappening

## Project/product name: Cave Diving

## Contact person and email
Bruce Fernandes, bruce2005.ind@gmail.com 

## Table of contents
1. Design Overview
2. Logical Design
3. Transition to Implementation
4. Glossary
5. Appendix

##  Design overview
Cave Diving is a 2D browser based game filled with many adventures and riddles. Players will be exploring cave enviorments, solve riddles and complete puzzles to unlock upper levels. Our main focus is education through exploration. Players will learn several concepts of math and others by interacting with in-game challenges.  
System Context
Users: General players and students 
External systems: Browser runtime (HTML/CSS/JS), local storage for progress, optional quiz API (future).

Context Diagram (Top Level DFD):
Player
   ↓↑
Browser Game Interface
   ↓↑
Game Logic Engine → Quiz/Riddle Data
   ↓↑
Progress Save System (localStorage)

## The logical design
System Decomposition:
The system follows a layered, modular web-based design:

Root Directory Structure:
root/
├── styles/        → CSS files used globally across pages
├── scripts/       → JavaScript files controlling logic, animation, and interactivity
└── pages/
    ├── markup/    → Individual HTML files (menu, game, quiz)
    └── styles/    → Page-specific CSS files

Interactions:
Player ↔ UI Renderer: Inputs (keyboard/mouse), outputs (display updates).
UI Renderer ↔ Game Engine: Scene updates, event handling.
Game Engine ↔ Quiz Manager: Trigger riddles or quiz pop-ups when reaching checkpoints.
Quiz Manager ↔ Progress Tracker: Saves results and unlocks new levels.

## Transition from the logical design to an implementation
Languages: HTML 5, CSS 3, JavaScript (ES6)
Tools: 
Repository Structure: root/styles, root/scripts, root/pages/markup, root/pages/styles
Interfaces: 

Example File List:	
/scripts/game.js = main loop and rendering	
/scripts/quiz.js = quiz logic	
/scripts/save.js = progress storage	
/pages/markup/index.html = home screen	
/pages/markup/game.html = main game	
/styles/global.css = shared UI styling	
/pages/styles/game.css = level-specific styling

## A glossary: This is optional but often nice to have: if a term is specific to the product or is unlikely to be known by the average reader (e.g. a random second year CS student) then include an entry for it
HUD: Heads-Up Display showing score or hints.
Checkpoint: In-game location that triggers a quiz/riddle.
LocalStorage: Browser storage API used to save data locally.
Riddle Node: Interactive object that opens a puzzle UI.

## Appendix
