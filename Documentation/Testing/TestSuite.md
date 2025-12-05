# CSCI 265 — Test Suite  
**Project:** The Endless Chasm  
**Team:** Its-not-Mappening  

This Test Suite lists all test cases for the project, organized by feature group.  
Each test case contains a unique ID, objective, prerequisites, test steps, and expected results.

---

# 1. Navigation & Page Loading

## **NAV-01 — Homepage Loads**
**Objective:** Verify that the homepage (`index.html`) loads correctly.  
**Prerequisites:** Local server running.  
**Steps:**  
1. Navigate to `http://localhost:8000/index.html`.  
**Expected Result:**  
- Page loads without errors  
- Title or heading displays “The Endless Chasm”

---

## **NAV-02 — Start Page Loads**
**Objective:** Verify that the Start page loads from `Code/Website/Pages/start.html`.  
**Steps:**  
1. Navigate to `http://localhost:8000/Code/Website/Pages/start.html`.  
**Expected Result:**  
- Page loads successfully  
- Lore text or introductory content appears

---

## **NAV-03 — Navigation Links Work**
**Objective:** Confirm that clicking navigation links moves the user to correct pages.  
**Steps:**  
1. On the Start page, click any navigation option (e.g., “Forward”, “Descend”, etc.).  
**Expected Result:**  
- Corresponding chamber/location page loads  
- No 404 or missing file errors

---

## **NAV-04 — Puzzle Links**
**Objective:** Ensure puzzle links open their respective modules.  
**Steps:**  
1. From any chamber, click the link to a puzzle (Sudoku, Memory, Tic-Tac-Toe).  
**Expected Result:**  
- Puzzle page loads immediately and displays puzzle UI

---

# 2. Sudoku Puzzle

## **SUD-01 — Sudoku Page Loads**
**Objective:** Ensure Sudoku module loads correctly.  
**Steps:**  
1. Navigate to `/Code/sudoku/index.html`.  
**Expected Result:**  
- Sudoku grid is displayed  
- No missing scripts or CSS

---

## **SUD-02 — Input Accepts Numbers**
**Objective:** Verify cells accept valid input.  
**Steps:**  
1. Click a cell  
2. Enter a number between 1–9  
**Expected Result:**  
- Entered number appears in the cell

---

## **SUD-03 — Reject Invalid Input (If Implemented)**
**Objective:** Ensure invalid characters are rejected.  
**Steps:**  
1. Try entering “A”, “@”, or other invalid keys  
**Expected Result:**  
- Cell ignores invalid characters  
*(If Sudoku allows any input, mark N/A)*

---

## **SUD-04 — Correct Solution Detection**
**Objective:** Verify puzzle success condition.  
**Steps:**  
1. Fill the grid with the correct solution  
2. Click “Check Solution”  
**Expected Result:**  
- Message confirms completion (e.g., “Correct!”)

---

## **SUD-05 — Incorrect Solution Handling**
**Objective:** Validate incorrect feedback.  
**Steps:**  
1. Fill incorrect numbers  
2. Click “Check Solution”  
**Expected Result:**  
- Error message appears (“Incorrect”, “Try again”)

---

# 3. Memory Match Puzzle

## **MEM-01 — Memory Match Loads**
**Objective:** Ensure the Memory Match page loads.  
**Steps:**  
1. Navigate to `/Code/memory_match/index.html`.  
**Expected Result:**  
- All cards appear face-down

---

## **MEM-02 — Card Flip Behaviour**
**Objective:** Verify a card flips when clicked.  
**Steps:**  
1. Click any card  
**Expected Result:**  
- Card flips to show its face image

---

## **MEM-03 — Matching Pair Logic**
**Objective:** Confirm matched cards stay revealed.  
**Steps:**  
1. Click a matching pair  
**Expected Result:**  
- Both cards remain face-up  
- No visual reset

---

## **MEM-04 — Mismatched Pair Logic**
**Objective:** Check card reset behaviour.  
**Steps:**  
1. Flip two non-matching cards  
**Expected Result:**  
- Cards flip back after short delay

---

## **MEM-05 — Puzzle Completion**
**Objective:** Ensure end-of-game logic triggers.  
**Steps:**  
1. Match all card pairs  
**Expected Result:**  
- Completion message appears  
- Optional: Unlocks lore or link returns to chamber

---

# 4. Tic-Tac-Toe Puzzle

## **TTT-01 — Tic-Tac-Toe Loads**
**Objective:** Ensure puzzle loads correctly.  
**Steps:**  
1. Navigate to `/Code/tic_tac_toe/index.html`  
**Expected Result:**  
- 3×3 grid visible

---

## **TTT-02 — Player Input Works**
**Objective:** Ensure user can place Xs.  
**Steps:**  
1. Click any empty cell  
**Expected Result:**  
- “X” appears in the cell

---

## **TTT-03 — Alternating Moves (If Implemented)**
**Objective:** Ensure turn alternation if AI or two-player mode.  
**Steps:**  
1. Place X  
2. Observe next marker  
**Expected Result:**  
- Next move is O (if implemented)

---

## **TTT-04 — Win Detection**
**Objective:** Verify win detection logic.  
**Steps:**  
1. Create a winning line  
**Expected Result:**  
- “You Win” (or similar) displayed

---

## **TTT-05 — Draw Detection**
**Objective:** Confirm draw condition is handled.  
**Steps:**  
1. Fill grid without any 3-in-a-row  
**Expected Result:**  
- Message indicates draw (“Tie Game”)

---

# 5. Journal Tool

## **JRN-01 — Journal Loads**
**Objective:** Ensure the journal page loads.  
**Steps:**  
1. Navigate to `/Code/journal/index.html`  
**Expected Result:**  
- Text input area visible

---

## **JRN-02 — Writing Text Works**
**Objective:** Verify user can write notes.  
**Steps:**  
1. Type any text  
**Expected Result:**  
- Text appears in the journal area

---

## **JRN-03 — Editing Works**
**Objective:** Confirm user can modify previous input.  
**Steps:**  
1. Type text  
2. Add or delete characters  
**Expected Result:**  
- All edits appear correctly

---

## **JRN-04 — Persistence (If Implemented)**
**Objective:** Check session persistence using local storage.  
**Steps:**  
1. Type text  
2. Refresh page  
**Expected Result:**  
- Text remains (if designed to persist)

---

# 6. UI & General Behaviour

## **UI-01 — Shared Layout Loads**
**Objective:** Confirm UI styling appears across all pages.  
**Steps:**  
1. Navigate through multiple pages  
**Expected Result:**  
- Fonts, colors, headers/footers consistent

---

## **UI-02 — Image Assets Load**
**Objective:** Ensure images display correctly.  
**Steps:**  
1. Inspect chambers and puzzle screens  
**Expected Result:**  
- No broken images

---

## **UI-03 — No Console Errors**
**Objective:** Basic error check.  
**Steps:**  
1. Open Developer Tools → Console  
2. Navigate pages  
**Expected Result:**  
- No red JS errors

---

# End of Test Suite
