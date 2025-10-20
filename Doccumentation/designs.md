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

# Context Diagram (Top Level DFD):
Player
   ↓↑
Browser Game Interface
   ↓↑
Game Logic Engine → Quiz/Riddle Data
   ↓↑
Progress Save System (localStorage)

## The logical design

# System Decomposition
The system follows a layered, modular web-based design:

# Root Directory Structure
root/
├── styles/        → CSS files used globally across pages
├── scripts/       → JavaScript files controlling logic, animation, and interactivity
└── pages/
    ├── markup/    → Individual HTML files (menu, game, quiz)
    └── styles/    → Page-specific CSS files

## Preliminary thoughts on the transition from the logical design to an implementation

## A glossary: This is optional but often nice to have: if a term is specific to the product or is unlikely to be known by the average reader (e.g. a random second year CS student) then include an entry for it

## Appendix
