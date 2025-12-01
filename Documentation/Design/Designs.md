# CSCI 265 Project Design Document

## Team name: It's Not Mappening

## Project/product name: The endless Chasm

## Main Contact person and email
Bruce Fernandes, bruce2005.ind@gmail.com 

--- 

## Table of Contents
1. System Overview  
2. High-Level Architecture  
   - 2.1 Location Page System  
   - 2.2 Puzzle System  
   - 2.3 Navigation System  
   - 2.4 Shared UI Layout  
3. Site Map & Navigation Flow  
   - 3.1 Page Types  
   - 3.2 Site Map (Abstract)  
   - 3.3 Navigation Flow  
4. Module Designs  
   - 4.1 Location Pages  
   - 4.2 Sudoku Module  
   - 4.3 Memory Match Module  
   - 4.4 Tic-Tac-Toe Module  
   - 4.5 Journal Module  
5. Data & State Design  
6. Design Decisions & Rationale  

--- 

## 1. System Overview

The Endless Chasm is a 2D, browser-based exploration experience built with HTML, CSS, and JavaScript.  
Players travel through cave-like “chambers,” each represented as an individual web page.  
Lore descriptions, environmental text, and character dialogue set the atmosphere and guide exploration.  
Some chambers include links to puzzle modules (Sudoku, Memory Match, Tic-Tac-Toe). A journal tool allows players to record personal notes.

The system is intentionally modular:

- Each location is a standalone HTML page.  
- Each puzzle is an independent module with its own HTML/CSS/JS.  
- Navigation is page-based using stylized links.  
- All visuals share a common CSS theme.

This design supports maintainability and parallel development among team members.

---

## 2. High-Level Architecture

The system consists of four major subsystems:

- **Location Page System**  
- **Puzzle System**  
- **Navigation System**  
- **Shared UI Layout**

### Folder Structure (Simplified)

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

### 2.1 Location Page System

Each area or location in the cave world is distinct and represented as a separate HTML page. These pages form the primary content of the website and contain:

- **Main textboxes** displaying lore and environmental descriptions.
- **A character dialogue sidebar** for character dialogue
- **Optional interactive items** which update player state
- **Navigation links** leading to other locations or puzzle modules  

This system forms the core of the website’s world structure.

### 2.2 Puzzle System

Each puzzle exists as a self-contained module:

- Sudoku  
- Memory Match  
- Tic-Tac-Toe  

Characteristics:

- Each puzzle runs entirely in its own page.  
- Each has its own HTML, CSS, and JS logic.  
- Puzzles provide success or failure messages.  
- They do not directly change global navigation.  
- After completing or exiting a puzzle, players return to a location page.  

### 2.3 Navigation System

Navigation is handled through clickable elements that move the user between location pages. The navigation system supports:
- branching paths
- puzzles access
Navigation logic is implemented in shared JavaScript components.

### 2.4 Shared UI Layout

Shared visual components include:

- Global CSS for fonts, color palette, and spacing  
- Consistent layout pattern: lore area + dialogue sidebar  
- Standardized link/button styling  

Not all location pages share identical structures, but the visual style remains consistent across. Sharing the UI layout ensures visual consistency, reusability, and maintainability.

---

## 3. Site Map & Navigation Flow

### 3.1 Page Types

- **Home Page** — entry point  
- **Location Pages** — exploration chambers  
- **Puzzle Pages** — Sudoku, Memory Match, Tic-Tac-Toe  
- **Journal Page** — standalone writing tool  

---

### 3.2 Site Map (Abstract)

The project includes the following major page types:

- **Location Pages:** 
    CCore exploration pages representing each distinct area in the cave. 
    Each contains descriptive lore text, images, navigation links, and character dialogue.

- **Puzzle Pages:** 
    Fully independent modules accessed from specific locations.
    These include independent HTML/CSS/JS implementations.

- **Shared Pages:** 
    Includes global or non-location pages such as the home page, UI elements or any general information page.

---

### 3.2 Site Map (Abstract)

```
Home Page (index.html)
   ↓
Start / Entrance Location
   ├── Branch A → Location(s) → Puzzle: Sudoku
   ├── Branch B → Location(s) → Puzzle: Memory Matc
   │               └── Puzzle: Sudoku → Unlock Page
   └── Branch C → Location(s) → Puzzle: Tic-Tac-Toe

```

This structure represents the conceptual navigation model.  
Actual area names may change as the narrative is finalized.

### 3.3 Navigation Flow

The navigation flow describes how player behaviors including: moving between pages, interacting with puzzles, and accessing additional lore. The flow applies consistently to all location pages within **The Endless Chasm**.

Navigation is currently implemented using stylized `<a>` tags that visually resemble buttons. These links direct the player to different areas, puzzle modules, or shared pages.

1. **Enter Location Page**
   - The player arrives at a location page containing:
     - descriptive lore text
     - character dialogue sidebar
     - navigation links styled as buttons
     - optional puzzle link

2. **Read and Interpret Lore**
   - The Textboxes provide environmental descriptions.
   - The sidebar offers one-way character dialogue for context or hints.

3. **Optional Puzzle Interaction**
   - Some pages include a link to a puzzle module (e.g., Sudoku, Memory Match).

4. **Puzzle Outcome**
   - **Success:** unlocks a small piece of lore (e.g., "paper strip" content).
   - **Failure:** player may retry or simply return to exploration.

5. **Return to Location Page**
   - After the puzzle, players return to the originating location page.

6. **Choose Next Path**
   - The player selects one of the available stylized navigation links and moves to another location and repeat the process.

---

### 3.2 Navigation Flow Diagram (Abstract)

```
           +---------------------------+
           |      Enter Location       |
           +-------------+-------------+
                         |
                         v
           +---------------------------+
           |   Read Lore + Dialogue    |
           +-------------+-------------+
                         |
         +---------------+---------------+
         |                               |
         v                               v
+-------------------+         +-------------------------+
|   No Puzzle Here  |         |   Optional Puzzle Link  |
| (Continue Exploring)        +-----------+-------------+
+-----------+-------+                     |
            |                             |
            v                             v
 +----------------------+       +------------------------+
 | Select Navigation     |       |   Solve Puzzle Page   |
 | (Stylized <a> tag)    |       +-----------+------------+
 +-----------+-----------+                   |
             |                               |
             v                         +-----+-------+
   +----------------------+            | Success      |
   |   Go To Next Page    |            | → Unlock lore|
   +----------------------+            +-----+--------+
                                              |
                                              v
                                    +--------------------+
                                    | Return to Location |
                                    +--------------------+
```

---

## 4. Module Designs

### 4.1 Location Pages

**Purpose:** Deliver story content and navigation options.  
Elements:

- Lore text area  
- Dialogue sidebar  
- Navigation buttons/links  
- Optional puzzle access link  

### 4.2 Sudoku Module

**Location:** `Code/sudoku/index.html`

Key elements:

- A 9×9 grid  
- Input cells  
- “Check/Solution/Reset/Solve/New” button  s
- Feedback for correct/incorrect entries  

### 4.3 Memory Match Module

**Location:** `Code/memory_match/index.html`

Key elements:

- Grid of face-down cards  
- Click-to-flip mechanic  
- Matching detection  
- Completion message  

### 4.4 Tic-Tac-Toe Module

**Location:** `Code/tic_tac_toe/index.html`

Key elements:

- 3×3 board  
- Clickable cells  
- Win/draw detection  
- Simple success message  

### 4.5 Journal Module

**Location:** `Code/journal/index.html`

Key elements:

- Large text area  
- Free-form note entry  
- Editable text  
- (Optional) session persistence via `localStorage`  

---

## 5. Data & State Design

The system uses **client-side state only**.

- **Location state:** determined by current HTML page  
- **Sudoku:** cell values, solution grid  
- **Memory Match:** card states, matched pairs  
- **Tic-Tac-Toe:** board state, turn logic  
- **Journal:** user input text (stored in memory or localStorage)  

No server-side processing or database is used.

---

## 6. Design Decisions & Rationale

- **Page-based structure** — simpler, easier to test and maintain  
- **Independent puzzle modules** — supports parallel development  
- **Anchor-based navigation** — no frameworks required  
- **Shared CSS** — consistent UI and maintainable styling  
- **Minimal state** — avoids complexity and fits project scope  

This design provides a modular, maintainable structure suitable for a student project while supporting an exploratory storytelling experience.

---

End of Design Document
