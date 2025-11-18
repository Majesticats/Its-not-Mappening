@ Dave Wessels
The main branch of the repo is always the most up-to-date branch. Please refer to this branch when grading our group project. All Markdown files for the different phases can be found in the "Documentation" folder.

# The Endless Chasm
Interactive Lore-Driven Exploration Website • CSCI 265 – Software Engineering Project

## 🕳️ Overview
The Endless Chasm is a narrative-driven exploration experience presented as an interactive website. Players travel through themed chambers within a cave system, uncovering lore, solving puzzles, and progressing based on their own choices.

The focus is on:
- immersive worldbuilding
- lore exploration supported by visual & descriptive storytelling
- puzzle-based, problem-solving interactions

Developed using HTML, CSS, and JavaScript — without external front-end frameworks.

## 🎮 Core Features

### 🧭 Non-Linear Exploration
- Players choose between different branching paths leading to unique chambers
- Each chamber presents distinct visuals, lore, and interactive challenges
- No single “correct” path — exploration is flexible and open-ended  

### 📘 Lore Discovery
- Environmental storytelling through descriptive text
- High emphasis on visual assets to support immersion

### 🧩 Puzzle & Mini-challenges
Each puzzle provides optional progression depending on the chamber:

- Tic-Tac-Toe  
- Memory Card Game  
- Sudoku  

Puzzles may:
- unlock new routes  
- reveal new lore   
- provide clues  

### 🛠 Tools 
- Journal writing

## 🗺️ World Structure
- The cave system is divided into **chambers**, each represented by an HTML page or component.  
- Players move using **clickable images** that represent available paths.  
- Chamber → Lore → Optional Puzzle → Path Choice → Next Chamber.

## 📂 Repository Structure
```
Its-not-Mappening/
│
├── Code/
│   ├── index.html
│   ├── styles/
│   ├── scripts/
│   └── puzzles/
│       ├── tictactoe/
│       ├── memory/
│       ├── sudoku/
│       └── journal/
│
├── Documentation/
│   ├── Charter/
│       └── Charter.md
│   ├── Proposal/
│       └── Proposal.md
│   ├── Requirements/
│   ├── Design/
│   ├── Standards/
│   ├── TestPlan/
│   └── Updates/
│
├── Assets/
│   ├── Images/
│   ├── Mockups/
│   └── Lore/
│
└── README.md
```

## 🔧 Development Setup


## 🧪 Testing
Testing uses:
- `TesterII.sh`  
- `TestCollection.sh`

Covers:
- navigation  
- puzzle behavior  
- tool gating  
- lore triggering  

Full Test Plan is in `Documentation/TestPlan/`.

## 👥 Team Members
- Bruce Fernandes 
- Gowan Cathers  
- Md Zahidur Rahman Nabil  
- Nguyen Du (MAX)  
- Olaleye Victor  

## 📄 License
This project is part of **CSCI 265 – Software Engineering** at Vancouver Island University.
