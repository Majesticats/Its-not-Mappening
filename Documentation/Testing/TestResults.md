# CSCI 265 — Test Results  
**Project:** The Endless Chasm  
**Team:** Its-not-Mappening  

This document summarizes the results of both automated and manual tests performed on the project.

---

# 1. Automated Test Results

These tests were executed using the provided shell automation tools (`TesterII.sh`, `TestCollection.sh`).  
Results reflect the latest full test run.

| Test ID | Description | Result | Notes |
|---------|-------------|--------|-------|
| NAV-01 | Homepage loads | PASS | “Endless Chasm” detected |
| NAV-02 | Start page loads | FAIL | Page loads, but marker text not found (content wording differs) |
| SUD-01 | Sudoku page loads | PASS | Sudoku module detected |
| MEM-01 | Memory Match page loads | PASS | Memory Match page loaded correctly |
| TTT-01 | Tic-Tac-Toe page loads | PASS | Tic-Tac-Toe grid detected |
| JRN-01 | Journal page loads | PASS | Journal text area detected |

**Automated Summary:**  
- **Passed:** 5  
- **Failed:** 1  
- The single failure (NAV-02) is due only to marker-text mismatch, not a functional issue.

---

# 2. Manual Test Results — Navigation & Page Loading

| Test ID | Description | Result | Notes |
|---------|-------------|--------|-------|
| NAV-03 | Navigation buttons move between chambers | ___ | |
| NAV-04 | Puzzle links open correct modules | ___ | |

---

# 3. Manual Test Results — Sudoku Puzzle

| Test ID | Description | Result | Notes |
|---------|-------------|--------|-------|
| SUD-02 | Number input works | ___ | |
| SUD-03 | Reject invalid input (if applicable) | ___ | Mark N/A if Sudoku allows any input |
| SUD-04 | “Check Solution” detects correct solution | ___ | |
| SUD-05 | “Check Solution” detects incorrect solution | ___ | |

---

# 4. Manual Test Results — Memory Match Puzzle

| Test ID | Description | Result | Notes |
|---------|-------------|--------|-------|
| MEM-02 | Card flip works | ___ | |
| MEM-03 | Matching pairs stay revealed | ___ | |
| MEM-04 | Mismatched pairs flip back | ___ | |
| MEM-05 | Puzzle completion triggers success | ___ | |

---

# 5. Manual Test Results — Tic-Tac-Toe Puzzle

| Test ID | Description | Result | Notes |
|---------|-------------|--------|-------|
| TTT-02 | Player can place X | ___ | |
| TTT-03 | Alternating turns (if implemented) | ___ | Mark N/A if only X is used |
| TTT-04 | Win detection works | ___ | |
| TTT-05 | Draw detection works | ___ | |

---

# 6. Manual Test Results — Journal Tool

| Test ID | Description | Result | Notes |
|---------|-------------|--------|-------|
| JRN-02 | Writing text works | ___ | |
| JRN-03 | Editing text works | ___ | |
| JRN-04 | Persistence across refresh (if implemented) | ___ | Mark N/A if not implemented |

---

# 7. Manual Test Results — UI & General Behaviour

| Test ID | Description | Result | Notes |
|---------|-------------|--------|-------|
| UI-01 | Shared layout consistent across pages | ___ | |
| UI-02 | Image assets load correctly | ___ | |
| UI-03 | No JS console errors | ___ | |

---

# Final Summary

**Automated Tests:**  
- 5 PASS  
- 1 FAIL (marker mismatch only — not a functional bug)

**Manual Tests:**  
Pending execution.

Once manual tests are completed, update the PASS/FAIL entries and annotate any discovered defects.  
Any functional errors found should be recorded separately in *BugReport.md*.

---

# End of Test Results
