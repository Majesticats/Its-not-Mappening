
## CSCI 265 Project Test Plan

**Team name:** Its-not-Mappening

**Project/product name:** The Endless Chasm

**Main Contact person and email**

- Bruce Fernandes, [bruce2005.ind@gmail.com](mailto:bruce2005.ind@gmail.com) _Main contact_

---

## Introduction

The Endless Chasm is a narrative-driven lore exploration game presented as an interactive website experience. Players navigate through multiple cave location pages that present narrative lore and dialogues, and encounter integrated puzzles (Sudoku, Tic-Tac-Toe, Memory Match) along the way. A simple journal-writing tool is also provided for the player to record notes or story fragments.

This project focuses on immersion, lore depth, and open-ended discovery, rather than a fixed linear end-state. It is intended to be built using HTML, CSS, and JavaScript without external front-end frameworks, minimizing tool overhead and ensuring development feasibility within the semester.

---

## Scope

**In-Scope:**

This test plan outlines the strategy and cases for verifying that all major features of The Endless Chasm function correctly in a web browser environment. We aim to ensure that navigation flows, puzzle mechanics, and the journal tool behave as expected and meet the project requirements. The testing will primarily cover system testing (end-to-end use of the game in a browser) under normal use scenarios, since the entire game runs as an integrated client-side application. 

We will verify that each page and puzzle can be accessed and used properly, that puzzles yield the correct outcomes, and that the user interface is consistent and free of critical bugs. 

**Out-of-Scope:**
- Internal unit tests  
- Performance/load testing  
- Security testing  
- Legacy platform/browser compatibility  
- Creative content accuracy 

There is no server-side logic, multi-player mode, or network features in this project, so such aspects will not be tested (they do not exist in the implementation). 

Performance testing, security testing, and cross-browser compatibility beyond the primary test environment are also outside the current scope

---

## Test Items (Features to be Tested)

The following is a list of software items and features that will be tested under this plan. Each corresponds to a major component or functionality of The Endless Chasm.

Each of these test items will have specific test cases designed to validate both normal operation and some edge cases (such as incorrect puzzle inputs or navigating in an unintended order) where applicable. The goal is to cover all core game interactions a player might perform.

### Location Pages & Navigation

Verify each lore location page loads correctly with its narrative content and that all navigation links between locations function properly. This includes the transitions through the cave (e.g. moving from one chamber to another via clickable links styled as buttons). We will test navigation sequences through all available paths (there are three main lore locations to traverse) and ensure no broken links or incorrect page loads occur.

---

### Puzzle Modules (Sudoku, Tic-Tac-Toe, Memory Match)

Each puzzle is an independent module with its own HTML/CSS/JS, accessed via links from certain location pages. We will test that each puzzle page opens and runs correctly when triggered, and that the puzzle can be interacted with (e.g. numbers can be entered in Sudoku, moves can be made in Tic-Tac-Toe, cards can be flipped in Memory Match). 

Each puzzle's win/lose conditions and any corresponding messages or UI changes will be validated.

---

### Journal-Writing Tool

Verify the in-game journal feature allows the player to record notes. This includes testing that the journal interface can be opened (via a menu or icon, if provided), text can be entered and edited, and that the entered text persists appropriately (at least for the duration of the session, or across pages). 

If the journal is supposed to save content (e.g. in local storage) so it remains available after navigating away or refreshing, we will test that functionality.

---

### User Interface & Shared Elements

Verify the shared UI layout is consistent across pages (e.g. header, navigation controls, dialogue sidebar). This includes checking that the global CSS styling is applied on all pages for a uniform look and feel, and that common interface elements (like navigation buttons or the journal tool link) appear in the correct location on each page. 

We will also check for responsiveness of UI elements (ensuring clickable areas respond, text is readable, etc.) in a normal desktop browser window. Minor cosmetic issues will be noted but functional correctness is the priority.

---

## Test Approach

Our overall test approach combines manual exploratory testing with selective automated testing to ensure thorough coverage and efficient regression testing. All testing will be done on the client side by interacting with the web pages, since there is no server component.

### Manual Testing Approach

Most of the test cases will be executed manually by a tester using a web browser. Manual testing is appropriate here due to the interactive and visual nature of the game. A tester will navigate through the game as a player would, following the predefined test case steps and verifying that the actual behavior and outputs match the expected results. This includes observing page content, clicking links, solving puzzles, and recording outcomes.  Manual verification is crucial for aspects like UI layout, visual feedback (e.g. seeing a lore text appear), and usability.

Manual testing will cover:

1. **Navigation Flows**

The tester will click through each navigation path (e.g. from the entrance to other locations) and confirm correct page transitions and content.

2. **Puzzle Interaction**

The tester will attempt to solve each puzzle (entering values in Sudoku, playing Tic-Tac-Toe moves, matching cards in Memory) to confirm that the puzzles function correctly. Both successful completion and failure (when applicable) will be tried to verify the game responds as expected in each case.

3. **Journal Usage**

The tester will open the journal, type sample text, and check if the text remains accessible. They will also try typical actions like editing the text or closing and reopening the journal to ensure no data loss within a session.

4. **UI/UX checks**

The tester will visually inspect each page for the presence of required elements (narrative text, dialogue sidebar, navigation links, puzzle links, etc.) and note any anomalies (e.g. missing text, misaligned buttons, broken images).

Throughout manual testing, any discrepancies or bugs will be documented. Given that manual testing can be time-consuming and error-prone if repeated often, we plan to supplement it with automation for regression tests.

---

### Automated Testing Approach

Automated testing supplements manual testing using shell scripts:

- Navigation validation  
- Puzzle logic verification  
- Tool gating checks  
- Regression detection via batch execution 

Scripts such as `TesterII.sh` and `TestCollection.sh` simulate user actions and check expected outputs. They reset between test cases to avoid state contamination and ensure consistent results.

---

