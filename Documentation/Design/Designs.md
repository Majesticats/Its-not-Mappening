# CSCI 265 Project Design Document

## Team name: It's Not Mappening

## Project/product name: The Endless Chasm

## Main Contact person and email
Bruce Fernandes, bruce2005.ind@gmail.com 

--- 

## Table of contents
1. System Architecture Design
    - 1.1 Location Page System
    - 1.2 Puzzle System
    - 1.3 Navigation System
    - 1.4 Shared UI layout

--- 

## 1. System Architecture Design
The Endless Chasm is implemented as a modular, page-based 2D browser exploration system. Each major component is responsible for one part of the game experience.   

Together, these components form the structural foundation of navigation, lore delivery, and puzzles experience.

Below is a breakdown of each component included in the current architecture.

--- 

### **1.1 Location Page System**

Each area or location in the cave world is distinct and represented as a separate HTML page. These pages form the primary content of the website and contain:

- **Main textboxes** displaying lore and environmental descriptions.
- **A character dialogue sidebar** for character dialogue
- **Optional interactive items** which update player state
- **Navigation links** leading to other locations or puzzle modules  

This system forms the core of the website’s world structure.

--- 

### **1.2 Puzzle System**

Puzzles are implemented as fully independent modules, each containing its own HTML, CSS, and JavaScript logic implementation. 
Location pages link to puzzle modules when appropriate through navigation system.

Puzzle modules:

- run separately in its own page
- return success/failure outcomes
- support modular development (each teammate builds their own puzzle)

This modular design ensures puzzles do not interfere with narrative structure and remain easy to maintain.

--- 

### **1.3 Navigation System**

Navigation is handled through clickable elements that move the user between location pages. The navigation system supports:
- branching paths
- puzzles access
Navigation logic is implemented in shared JavaScript components.

### **1.4 Shared UI Layout**

A consistent user interface is shared across all pages.

The shared layout includes:

- **Global CSS styling** for typography, visual layout, and html structure  
- **A universal header or sidebar** that may display tools
- **Navigation controls** consistent on all pages  

Sharing the UI layout ensures visual consistency, reusability, and maintainability.

## Section 2: Site Map Design

## 2. Site Map Design

The site map defines the structural layout of all included pages within the project **The Endless Chasm** and illustrates the navigating behaviors of players in the cave system. The website uses a non-linear exploration model: each location page possibly branches into multiple possible paths.

---

## 2.1 Page categories

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

## 2.2 Site Map Overview (Abstract Layout)

```
Home Page
   ↓
Entrance Chamber
   ├── Narrow Passage
   │       └── Crystal Hall
   │               └── Puzzle: Sudoku → Unlock Page
   └── Water Cavern
           └── Dark Sanctum
                   └── Puzzle: Memory → Unlock Page
```

This structure represents the conceptual navigation model.  
Actual area names may change as the narrative is finalized.

## 3. Navigation Flow Design

The navigation flow describes how player behaviors including: moving between pages, interacting with puzzles, and accessing additional lore. The flow applies consistently to all location pages within **The Endless Chasm**.

Navigation is currently implemented using stylized `<a>` tags that visually resemble buttons. These links direct the player to different areas, puzzle modules, or shared pages.

---

### 3.1 Navigation Steps (High-Level Flow)

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

### 3.3 Current Navigation Implementation

- Navigation is handled using **stylized anchor tags** (`<a>`), not images or scripts.
- Puzzles **do not unlock new areas**, only **lore fragments**.
- Some areas may have **multiple branching paths**, others may be linear.
- Shared UI is partially consistent due to a global CSS palette, but HTML structure varies between pages.
