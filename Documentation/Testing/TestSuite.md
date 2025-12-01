# CSCI 265 — Test Suite  
**Project:** The Endless Chasm  
**Team:** Its-not-Mappening  

This Test Suite lists all key test cases for the project, organized by feature group.  
Each test case contains a unique ID, objective, and expected behavior.

---

# 1. Navigation & Page Loading

## **NAV-01 — Homepage Loads**
**Objective:** Verify that the homepage loads correctly.  
**Steps:**  
1. Open `index.html`.  
**Expected Result:**  
- Page loads without errors  
- “The Endless Chasm” is visible

---

## **NAV-02 — Start Page Loads**
**Objective:** Verify that the Start page loads.  
**Steps:**  
1. Open `Code/Website/Pages/start.html`.  
**Expected Result:**  
- Lore text appears  
- Page loads with no broken elements

---

## **NAV-03 — Navigation Buttons Work**
**Objective:** Confirm that clicking navigation buttons moves the user between chambers.  
**Steps:**  
1. On the home page, click “Embark” or any movement option.  
**Expected Result:**  
- Correct chamber/location page loads  
- No 404 or missing file errors

---

# 2. Sudoku Puzzle

## **SUD-01 — Sudoku Page Loads**
**Objective:** Ensure that the Sudoku module loads.  
**Steps:**  
1. Open `/Code/sudoku/index.html`.  
**Expected Result:**  
- 9×9 grid appears  
- No missing CSS/JS elements

---

## **SUD-02 — Number Input Works**
**Objective:** Confirm that players can input numbers.  
**Steps:**  
1. Click a cell  
2. Enter a number from 1–9  
**Expected Result:**  
- Entered number visible in the cell

---

## **SUD-03 — Check Solution Button Works**
**Objective:** Verify the solution-checking mechanism.  
**Steps:**  
1. Enter values in the grid  
2. Click “Check Solution”  
**Expected Result:**  
- Displays either “Correct” or “Incorrect” feedback

---

# 3. Memory Match Puzzle

## **MEM-01 — Memory Match Loads**
**Objective:** Ensure the Memory Match page loads.  
**Steps:**  
1. Open `/Code/memory_match/index.html`.  
**Expected Result:**  
- All cards appear face-down

---

## **MEM-02 — Card Flips**
**Objective:** Verify card flip interaction.  
**Steps:**  
1. Click any card  
**Expected Result:**  
- Card flips to reveal its face

---

## **MEM-03 — Matching Pairs Stay Revealed**
**Objective:** Ensure matching logic works.  
**Steps:**  
1. Select two matching cards  
**Expected Result:**  
- Both remain face-up upon matching

---

# 4. Tic-Tac-Toe Puzzle

## **TTT-01 — Game Loads**
**Objective:** Ensure Tic-Tac-Toe loads correctly.  
**Steps:**  
1. Open `/Code/tic_tac_toe/index.html`.  
**Expected Result:**  
- 3×3 grid visible

---

## **TTT-02 — Player Places X**
**Objective:** Verify basic input.  
**Steps:**  
1. Click any empty cell  
**Expected Result:**  
- “X” appears in the selected cell

---

## **TTT-03 — Win Detection**
**Objective:** Ensure win conditions work.  
**Steps:**  
1. Create a winning line  
**Expected Result:**  
- Win message appears

---

# 5. Journal Tool

## **JRN-01 — Journal Loads**
**Objective:** Confirm the journal module loads.  
**Steps:**  
1. Open `/Code/journal/index.html`.  
**Expected Result:**  
- Text input area visible

---

## **JRN-02 — Writing Works**
**Objective:** Verify that users can enter notes.  
**Steps:**  
1. Type text in the journal  
**Expected Result:**  
- Text appears normally

---

## **JRN-03 — Editing Works**
**Objective:** Ensure editing functionality.  
**Steps:**  
1. Type text  
2. Add or remove characters  
**Expected Result:**  
- Journal updates correctly

---

# 6. UI & General Behaviour

## **UI-01 — Shared Layout Loads**
**Objective:** Verify consistent UI across pages.  
**Steps:**  
1. Navigate through multiple pages  
**Expected Result:**  
- Colors, fonts, and layout consistent

---

## **UI-02 — No Console Errors**
**Objective:** Check for JavaScript errors.  
**Steps:**  
1. Open DevTools → Console  
2. Navigate the site  
**Expected Result:**  
- No red error messages appear

---

# End of Test Suite
