//Imports
import { mountBoard, setValues, getValues, resetBoard, loadPuzzle } from "./board.js";
import { isSolved } from "./validate.js";
import { solve } from "./solver.js";
import { generate } from "./generator.js";


//constant and save
const PUZZLE = [
  5,3,0, 0,7,0, 0,0,0,
  6,0,0, 1,9,5, 0,0,0,
  0,9,8, 0,0,0, 0,6,0,
  8,0,0, 0,6,0, 0,0,3,
  4,0,0, 8,0,3, 0,0,1,
  7,0,0, 0,2,0, 0,0,6,
  0,6,0, 0,0,0, 2,8,0,
  0,0,0, 4,1,9, 0,0,5,
  0,0,0, 0,8,0, 0,7,9
];

const STORAGE_KEY = "sudoku.save.v1";

const statusEl = document.getElementById("status");
const boardEl  = document.getElementById("board");

//track which puzzle is “current” so Reset + save/load work
let currentPuzzle = PUZZLE;


// save and load helper
function saveGame() {
  try {
    const data = {
      currentPuzzle,
      values: getValues()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    //ignore storage errors 
    console.error("Save failed:", e);
  }
}

function loadGame() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const data = JSON.parse(raw);
    if (!data || !Array.isArray(data.values) || data.values.length !== 81) return false;

    //restore puzzle & values
    if (Array.isArray(data.currentPuzzle) && data.currentPuzzle.length === 81) {
      currentPuzzle = data.currentPuzzle;
    } else {
      currentPuzzle = PUZZLE;
    }

    //first set givens from starting puzzle, then fill in player's values
    loadPuzzle(currentPuzzle);
    setValues(data.values);
    resetBoard();
    return true;
  } catch (e) {
    console.error("Load failed:", e);
    return false;
  }
}


// Intialize board
mountBoard(boardEl, PUZZLE);

// tries to restore a saved game
if (loadGame()) {
  statusEl.textContent = "Restored saved game.";
}

//save on tab close / reload
window.addEventListener("beforeunload", saveGame);


// Check Button
document.getElementById("btn-check").addEventListener("click", () => {
  const vals = getValues();
  const ok = isSolved(vals);
  statusEl.textContent = ok ? "🎉 Correct!" : "Not solved yet.";
  saveGame();
});


// Solve Button
const solveBtn = document.createElement("button");
solveBtn.id = "btn-solve";
solveBtn.textContent = "Solve";
document.querySelector(".panel").appendChild(solveBtn);

solveBtn.addEventListener("click", () => {
  const sol = solve(getValues());
  if (sol) {
    setValues(sol);
    statusEl.textContent = "Solved.";
  } else {
    statusEl.textContent = "No solution for this grid.";
  }
  saveGame();
});


// Difficulty + New Game
const panel = document.querySelector(".panel");

// Difficulty selector
const sel = document.createElement("select");
sel.id = "difficulty";
["easy","medium","hard"].forEach(d => {
  const o = document.createElement("option");
  o.value = d;
  o.textContent = d[0].toUpperCase() + d.slice(1);
  sel.appendChild(o);
});
panel.prepend(sel);

// New Game button
const newBtn = document.createElement("button");
newBtn.id = "btn-new";
newBtn.textContent = "New Game";
panel.prepend(newBtn);

newBtn.addEventListener("click", () => {
  const p = generate(sel.value);
  currentPuzzle = p;
  loadPuzzle(p);
  statusEl.textContent = `New ${sel.value} puzzle loaded.`;
  saveGame();
});


// reset button
document.getElementById("btn-reset").addEventListener("click", () => {
  loadPuzzle(currentPuzzle ?? PUZZLE);
  resetBoard();
  statusEl.textContent = "Board reset.";
  saveGame();
});

// keypad
const keypad = document.createElement("div");
keypad.className = "keypad";
keypad.setAttribute("role","group");
keypad.setAttribute("aria-label","Number keypad");

// Create keypad buttons
["1","2","3","4","5","6","7","8","9","Erase"].forEach(label => {
  const b = document.createElement("button");
  if (label === "Erase") {
    b.dataset.action = "erase";
    b.textContent = "Erase";
  } else {
    b.dataset.digit = label;
    b.textContent = label;
  }
  keypad.appendChild(b);
});

document.querySelector(".app").appendChild(keypad);


// Keypad Logic 
keypad.addEventListener("click", (e) => {
  const b = e.target;
  if (b.tagName !== "BUTTON") return;

  // Use the currently selected cell 
  const active = document.querySelector(".cell.selected");
  if (!active) return;

  const i = Number(active.dataset.index);

  // Don't edit givens
  if (active.classList.contains("given")) return;

  if (b.dataset.action === "erase") {
    setDigit(i, 0);
  } else if (b.dataset.digit) {
    setDigit(i, Number(b.dataset.digit));
  }
});


// helper
function setDigit(i, d) {
  const vals = getValues();
  vals[i] = d;
  setValues(vals);
  statusEl.textContent = d ? `Placed ${d}.` : "Cleared cell.";
  saveGame();
}
