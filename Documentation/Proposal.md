
### CSCI 265 Initial Project Proposal

**Team name:** Its-not-Mappening

**Project/product name:** The Endless Chasm

**Members And Contact Email**

- Bruce Fernandes, [bruce2005.ind@gmail.com](mailto:bruce2005.ind@gmail.com) _Main contact_
- Gowan Cathers, [gowan.cathers@my.viu.ca](mailto:gowan.cathers@my.viu.ca)
- Md Zahidur Rahman Nabil, [zahidurrahmannabil@gmail.com](mailto:zahidurrahmannabil@gmail.com)
- Nguyen Du (MAX), [nguyentdu.work@gmail.com](mailto:nguyentdu.work@gmail.com)
- Olaleye Victor, [olaleyevictor51@gmail.com](mailto:olaleyevictor51@gmail.com)

---

### Project Overview

The Endless Chasm is a narrative-driven lore exploration game presented as an interactive website experience. Players traverse a vast supernatural cave world where reality is uncertain, the depth is infinite, and the path is non-linear. 

Players decide how they navigate wandering endlessly through branching chambers and tunnels. Throughout the journey the user will encounter skill-based mini-games, and interactive lore. There is no final prescribed ending — the experience is designed to let the player shape their own narrative direction.

This project focuses on immersion, lore depth, and open-ended discovery, rather than a fixed linear end-state. It is intended to be built using HTML, CSS, and JavaScript without external front-end frameworks, minimizing tool overhead and ensuring development feasibility within the semester.

---

### Target Audience and Motivation

This interactive experience is designed for players who enjoy:
- Exploring immersive fictional environments
- Discovering lore, world-building and role-playing environments
- Light puzzle and logic challenges
- Player-driven progression rather than fixed scripts

Motivation:
Our team wants to build a world that acts as a mental escape — an alternate universe where players can enjoy curiosity, problem-solving, and discovery at their own pace without real-world stress or strict goals. The project also lets us develop core web development skills & tools while have an opportunity to apply software engineering practices learnt from this course (CSCI 265).

---

### Primary Gameplay Functionality Loop

*The Endless Chasm* is built around an exploration-driven gameplay cycle in which the player gradually uncovers story-based elements while navigating through a network of interconnected cave chambers. Each chamber functions as a distinct unit that presents player with lore, visuals, interactive puzzles.

The core gameplay loop is structured as follows:

1️⃣ **Enter a Chamber**  
The player enters a new location represented by a webpage containing environment visual, narrative description and an associated puzzle game or mini-challenge.

2️⃣ **Explore and Interpret Lore**  
Each chamber presents atmospheric descriptions, world-building information.
Players may spend time read and interpret this content to better understand the lore, deepen their engagement with the story or move on to solve the challenges.

3️⃣ **Puzzle Interaction**  
Chamber include different puzzles or small logic challenges. The player may choose to:
- Attempt the puzzle to unlock progression or reveal additional lore
- Skip the puzzle and return to previous place to continue exploring a different chamber.
(This supports non-linear navigation.)

4️⃣ **Receive Feedback**  
When the player successfully completes a challenge: 
- A new story-branch of the cave may become accessible or
- A hidden lore message is revealed

5️⃣ **Progression**  
After (optionally) understanding the lore content of a chamber or successfully solve a challenge, the player selects the next direction to travel:
- Return to the previous place to discover other chambers from there or
- Move to a new revealed branch of the cave (if available).

This returns the player to step 1 with new narrative contents and exploration choices.
This loop emphasizes curiosity, narrative engagement, dopamine-release after solving challenges or discovering an interesting piece of information while maintaining an **achievable overall structure** and **appropriate scope** for the project.

--- 

### Nagivation System & World Structure

This section describes the structure of the cave system, answering the questions how player moves around and how the chambers are interconnected.

#### Nagivation System

**Navigation Method**
- Navigation Style: Clickable images
- Rationale: 

**Branching and Path Choices**
!!! (Ignored for now)

**Access Restrictions**
- Are some paths locked until a puzzle is solved? !!!
- Access logic description: !!!

--- 

#### World Structure

**Cave system structure**
- Number of main chambers: !!! 
- Chamber types include:
    Type A
    Type B
    !!!
- Chamber layout description:
!!! (briefly describe)

**World Map Summary**
!!! (One paragraph summarizing structure)

---

### Puzzle, mini-challenge Triggers and Progression Rules

This section describes how puzzles or mini-challenges (riddles, lore-based quizzes) appear in the website, how players interact with them and how these challenges generally influence navigation and story progression.
Because each puzzle is developed individually by different team members, this section defines the **shared system rules** rather than specific puzzle logic.

**Puzzle Placement**

Puzzles are distributed across selected chambers within the cave system. Each puzzle exists as a self-contained component developed by an individual developer in the team.

**Current planned puzzle & feature include**

- Tic-tac-toe
- Memory Card Matching 
- Sudoku
- Journal Writing feature

> *Exact puzzle types and locations are documented individually by each developer but integrated into the shared navigation system.*

**Puzzle Trigger Conditions**

A puzzle may be triggered under any of the following conditions:

- Automatically upon entering a chamber  
- When the player selects a specific interaction (e.g., “Inspect markings on the wall”)  
- After reading a lore segment

Each puzzle includes a **developer-defined trigger**, but all triggers conform to the global system:

```
(Optional) Trigger → Render Puzzle UI → Accept Player Input → Evaluate Outcome
```
--- 

### Preliminary Interface Sketches

Mock-ups of the main website page and some of the menus are shown below, though these are to be treated as *very* preliminary and will certainly change as we get deeper into the design process.

![alt text](https://github.com/Pulkman/VIU-3D-Map/blob/main/Doccumentation/Images/roles.jpeg)

![alt text](https://github.com/Pulkman/VIU-3D-Map/blob/main/Doccumentation/Images/sketch.jpeg)

--- 

### Scaling and Stretch Goals (Clarification Additions)

- Collectible pages of lore are considered a **stretch goal**, where players may optionally collect discoverable fragments of ancient history, recorded notes, or hidden world documentation as optional long-form progression rewards.
    
- These collectibles would be beyond the minimum viable scope and only implemented if core systems are completed and remaining development time permits.
### Risks, Limitations, and Concerns

Due to the conceptual scale of a world with potentially infinite expansion, there is significant risk related to scope management. The concept can expand endlessly, making it challenging to define a limit. Ensuring deliverables remain realistic while not sacrificing creative direction is a balancing challenge.

Additionally, the conceptual shift from the earlier VIU campus map idea to this fantasy exploration concept introduces potential redesign overhead. The team will need to commit to strong scope control and focus on core feature implementation, while leaving extension content for post-semester or stretch goal phases.