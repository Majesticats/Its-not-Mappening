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
│   ├── tic_tac_toe/
│       └── ...
│   ├── memory_match/
│       └── ...
│   ├── sudoku/
│       └── ...
│   └── journal/
│       └── ...
│   └── Website/
│       └── ...
│
├── Documentation/
│   ├── Charter.md
│   ├── Proposal.md
│   ├── Requirements/
│       └── Requirements.md
│   ├── DocsAssets/
│       └── ...(img)
│   ├── Design/
│       └── Design.md
│   ├── Standards/
│       └── Standards.md
│   └── Updates/
│
├── Assets/
│   ├── Mockups/
│   └── Release/
│
├── Testing/
│
├── README.md
└── index.html
```

## Instructions for working within the repo separated by task

### 🔧 Development Setup
Clone the repo and enter  the new directory to start working.

**Example Commandline Inputs/Steps** 
```
git clone https://github.com/Majesticats/Its-not-Mappening --branch [developer name]
cd Its-not-Mappening  
```
### Feature done
To merge a finished local branch with the main branch, send a message in the team Discord that you want to make a merge request. Then pull the latest version of the main branch from the remote repo to check that you are up to date. Go to your feature branch and merge the main branch with your local named branch.

Fix any merge conflicts if necessary and commit the fixes.

Push your merged branch to the remote repo. Then go to GitHub and make a merge request to merge your feature branch with the main branch. The Repo manager will check the request and approve it if everything is correct.

**Example Commandline Inputs/Steps**
```
git pull origin main
git checkout featurename
git status
git merge main
//
~fix merge conflict
git status
git add .
git commit -m "message"
//
~go to GitHub
~make pull request to merge feature with main
~merge approved
~close branch
git pull origin main
```

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
