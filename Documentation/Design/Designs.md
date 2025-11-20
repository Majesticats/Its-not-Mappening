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
Cave Diving is a 2D browser based game filled with many adventures. Players will be exploring cave enviorments, solve riddles and complete puzzles to unlock upper levels. Our main focus is education through exploration. Players will learn several concepts of math and others by interacting with in-game challenges.  
System Context

Core Concept:
The cave world acts as a hub, with various “chambers” where players can:
1. Play puzzle mini-games (Sudoku, Snake, Minesweeper, etc.)
2. Solve riddles or lore-based questions to progress
3.  Defeat the Big Bad Boss, a math-based challenge at the end

Users: General players and students 
External systems: Browser runtime (HTML/CSS/JS), local storage for progress, optional quiz API (future).

Learning Goal: Engage players through problem-solving and critical thinking while maintaining a fun, interactive design.

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
root/styles/ = CSS files used globally across pages
root/scripts/ = JavaScript files controlling logic, animation, and interactivity
roots/pages/
roots/pages/markup/ = HTML pages (main hub, mini-games, tools)
roots/pages/styles/ = Page-specific CSS files

Subsystems:
1. Main Hub = Central cave environment where players choose which chamber/game to enter
2. Mini-Games = Each chamber houses one puzzle or challenge.	
3. Riddle & Quiz System	= Handles multiple-choice and lore-based questions.	
4. Boss Battle	= Final math-based challenge with score tracking.	
5. Tools Suite	= Optional utility section for players: text editor, journal, calculator.	
6. Data & Progress = Local storage system to track completed levels and unlocked chambers.
   
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
1. Chamber = A specific mini-game or challenge room in the cave
2. Lore = Background story revealed through riddles or journals
3. Tool Suite = Helper programs (editor, journal, calculator) used in-game
4. Big Bad Boss = Final level where players solve math problems to win
5. Save State = Local data containing progress and unlocked areas
## Appendices
Appendix A – Folder Structure Diagram
Root connects to styles, scripts, and pages (which further splits into markup and styles).

Appendix B – Mini-Game Descriptions
1. Sudoku = Logic puzzle; fill grid with numbers 1–9.
2. Minesweeper = click tiles, avoid hidden traps.
3. Snake	= Classic arcade game controlled by arrow keys.
4. Riddles = Text-based puzzles with answer input.
5. Multiple Choice = Quizzes testing memory of lore or math.
6. Lore Questions = Recall questions from earlier discoveries.
7. Big Bad Boss = Math battle—solve equations before time runs out.
   
Appendix C – Tool Descriptions
1. Text Editor = Write notes or decode clues.
2. Journal = Stores lore pieces or player notes.
3. Calculator = Helps with math puzzles and the boss fight.
