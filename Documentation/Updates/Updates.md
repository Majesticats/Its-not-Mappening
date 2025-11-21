# CSCI 265 -- Project Update Document

**Team name:** Its-not-Mappening

**Project/product name:** The Endless Chasm

**Main Contact Person:**

    - Bruce Fernandes, bruce2005.ind@gmail.com

---

This document summarizes the team’s progress, changes, challenges, and outstanding tasks across all four phases of the CSCI 265 project.

---

# Phase 1 — Initiation (Charter & Proposal)

### Deliverables
- Project Team Charter  
- Preliminary Project Proposal 

### Completed Work
- Finalized the **Team Charter**, including team roles & individual responsibilites, communication methods, and conflict-resolution processes.  
- Produced the **Preliminary Proposal**, defining:  
  - the core game concept (*The Endless Chasm*)  
  - core features (lore system, puzzle modules)  
  - chosen technology stack (HTML, CSS, JavaScript)  
- Delivered an early **Phase 1 presentation** to introduce our idea and gather feedback from our instructor and other classmates.

### Changes
- Team membership changed early, significantly influencing project scope and team vision.
- Original concept was shifted to our current product *The Endless Chasm* after team evaluation.
- Roles and timeline were adjusted and given to reflect our strengths and scheduling constraints.

### Challenges
- Aligning the team's direction and expectations required several meetings and weeks.
- Drafting the Team Charter required consensus on team processes (e.g. decision making and conflict resolution), which we established early to set a strong foundation for the team.

### Outstanding Tasks
- Detailed software requirements and certain parts of lore concepts were deferred to Phase 2.

---

# Phase 2 — Planning (Standards & Requirements)

### Deliverables
- Team Standards & Processes document  
- Software Requirements Specification

### Completed Work
- Created and configured the team’s **Git repository**, hosted on GitHub.  
- Established project-wide **Team Standards** in *Standards.md*  for
    - workflow 
    - version control strategy
    - coding styles
    - documentation conventions
- Produced a **Software Requirements Specification (Requirements.md)** covering:  
  - logical requirements  
  - navigation and game flow metehod
  - use cases 
  - scope definitions  
- Delivered a Phase 2 plan presentation outlining the team’s approach.

### Changes
- During requirements development, several features were re-scoped, including:  
  - removal of some planned features including a complex inventory system, some puzzle ideas  
  - simplification of puzzle win conditions  
- Revisions were made to keep the requirements aligned with team capacity and timeline.

### Challenges
- Precisely defining requirements for an exploratory lore-based game required significant iteration.  
- Early difficulties regarding setting up environment and using Git collaboratively led to merge conflicts and workflow adjustments.

### Outstanding Tasks
- After Phase 2, we had a solid requirements baseline, however:
    - Some technical design questions (e.g., puzzle-lore integration method, game-state handling) were reserved for Phase 3 design work.

---

# Phase 3 — Design & Prototyping

### Deliverables
- Design Overview Document (system architecture + diagrams)  
- Initial prototype implementations

### Completed Work
- Delivered a detailed **Design Document (Design.md)** to illustrate how all pages and puzzle modules interact including:  
  - system architecture  
  - module diagrams  
  - UI layout structures  
  - navigation flow diagrams  
  - site map  
- Built a **prototype website**, including:  
  - navigation skeleton  
  - placeholder UI components  
  - early puzzle integration 
- Validated design feasibility through prototype testing.

### Changes
- The design phase prompted some revisions to earlier documents.
    - Added a **global UI component** (persistent header/tools panel) not initially defined in requirements.  
    - Updated requirements to reflect gameplay and UI insights gained from design.  
    - Decision made to separate puzzles into their own dedicated pages for cleaner structure and maintainability.
- All these changes were documented to keep requirements and design in sync.

### Challenges
- Phase 3’s challenges centered on coordination and technical design:
    - Maintaining consistency across design sections required regular team reviews.  
    - Creating diagrams also required tight communication.
- Technically, initial JavaScript prototypes revealed performance issues, prompting optimizations such as code refractor, and simpler data structure usage.
- Team required time to learn formal design practices (diagrams, architecture documentation).

### Outstanding Tasks
- Full implementation of remaining puzzles (Sudoku, memory-matching, tic-tac-toe), 
    - lore content (descriptive texts, location visuals), 
    - and UI polish was reserved for Phase 4.
left for Phase 4, but these were enhancements rather than unknown risks.

---


# Phase 4 — Implementation, Testing & Enhancement

### Deliverables
- Fully integrated system  
- Complete Test Plan and test results  
- Final consolidated Project Update Document (**Updates.md**)  

### Completed Work
- Implemented and integrated all puzzles: **Sudoku**, **Tic-Tac-Toe**, **Memory Match** and a Tool **Journal-writing**  
- Completed all **location pages**, **navigation paths**, **lore content** and **context visuals**.  
- Conducted extensive testing following the test plan, covering:  
  - navigation flow  
  - puzzle logic  
  - UI behavior  
- Compiled the complete **Updates.md** summarizing all phases.

### Changes
- Improved UI styling (font size, contrast, color palette) for readability and consistency.  
- Minor refinements to page layouts and puzzle transitions for smoother user experience.

### Challenges
- Encountered merge conflicts during integration; resolved via Git best practices.  
- Cross-browser CSS issues required additional debugging.  
- Deadline pressure required prioritizing critical fixes and optimizations.

---

# Project Summary

Across Phases 1–4 of the CSCI 265 project, we believd our team tried the our best to design, implement, and deliver *The Endless Chasm*, a fully functional, lore-driven exploration experience. The project began with major scope changes and team restructuring but stabilized through clear communication, adjusted roles, and realistic planning.  

Phase 1 established foundational direction and team structure. Phase 2 formalized requirements and standards that guided all development. Phase 3 produced a validated system design and prototype, setting technical clarity for implementation. Phase 4 delivered the full product, completing all puzzles, navigation flows, and lore content, supported by a comprehensive Test Plan and multiple rounds of debugging.

---

