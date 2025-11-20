import { hasConflictAt } from "./validate.js";

let state = {
  values: [],
  given: [],
  cells: [],
  root: null,
};

let selectedIndex = null;

// Public API
export function mountBoard(root, puzzle) {
  state.root = root;
  state.values = [...puzzle];
  state.given = puzzle.map(v => v !== 0);
  selectedIndex = null;
  render();
}

export function setValues(arr) {
  state.values = [...arr];
  render();
}

export function getValues() {
  return [...state.values];
}

export function resetBoard() {
  updateConflicts();
}

export function loadPuzzle(puzzle) {
  state.given = puzzle.map(v => v !== 0); //which cells are fixed
  state.values = [...puzzle];             //current values
  selectedIndex = null;
  render();
}


//Internal helpers

function boxBorders(r, c) {
  return `${(c % 3 === 0 ? " bL" : "")}${(c % 3 === 2 ? " bR" : "")}${(r % 3 === 0 ? " bT" : "")}${(r % 3 === 2 ? " bB" : "")}`;
}

function render() {
  state.root.innerHTML = "";
  state.cells = [];

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const i = r * 9 + c;
      const cell = document.createElement("div");
      cell.className = `cell${state.given[i] ? " given" : ""}${boxBorders(r, c)}`;
      cell.setAttribute("role", "gridcell");
      cell.dataset.index = i;
      cell.tabIndex = 0; //focusable for selection

      cell.textContent = state.values[i] || "";

      cell.addEventListener("click", () => selectCell(i));
      cell.addEventListener("focus", () => selectCell(i));
      cell.addEventListener("keydown", (e) => {
        const k = e.key;

        if (/^[1-9]$/.test(k)) {
          if (state.given[i]) return; //block editing givens
          state.values[i] = Number(k);
          cell.textContent = k;
          updateConflicts();
          updateHighlights();
        } else if (k === "Backspace" || k === "Delete" || k === "0") {
          if (state.given[i]) return;
          state.values[i] = 0;
          cell.textContent = "";
          updateConflicts();
          updateHighlights();
        } else if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(k)) {
          e.preventDefault();
          moveFocus(i, k);
        }
      });

      state.root.appendChild(cell);
      state.cells.push(cell);
    }
  }

  updateConflicts();
  updateHighlights();
}

function selectCell(i) {
  selectedIndex = i;
  updateHighlights();
}

function moveFocus(i, k) {
  let r = Math.floor(i / 9);
  let c = i % 9;

  const step = { ArrowUp: [-1, 0], ArrowDown: [1, 0], ArrowLeft: [0, -1], ArrowRight: [0, 1] }[k];
  if (!step) return;

  let tries = 0;
  while (tries < 81) {
    r = (r + step[0] + 9) % 9;
    c = (c + step[1] + 9) % 9;
    const ni = r * 9 + c;
    if (!state.given[ni]) {
      state.cells[ni].focus();
      return;
    }
    tries++;
  }
}

export function updateConflicts() {
  state.cells.forEach(c => c.classList.remove("conflict"));

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const i = r * 9 + c;
      const v = state.values[i];
      if (!v) continue;
      if (hasConflictAt(state.values, r, c, v)) {
        state.cells[i].classList.add("conflict");
      }
    }
  }
}

function valueAt(i) {
  return state.values[i] || null;
}

function updateHighlights() {
  // clear old classes
  state.cells.forEach(c => c.classList.remove("selected", "peer", "same"));

  if (selectedIndex == null) return;

  const i = selectedIndex;
  const r = Math.floor(i / 9);
  const c = i % 9;
  const v = valueAt(i);

  // selected
  state.cells[i].classList.add("selected");

  // peers (same row, col, box)
  for (let cc = 0; cc < 9; cc++) state.cells[r * 9 + cc].classList.add("peer");
  for (let rr = 0; rr < 9; rr++) state.cells[rr * 9 + c].classList.add("peer");

  const br = Math.floor(r / 3) * 3;
  const bc = Math.floor(c / 3) * 3;
  for (let rr = br; rr < br + 3; rr++) {
    for (let cc = bc; cc < bc + 3; cc++) {
      state.cells[rr * 9 + cc].classList.add("peer");
    }
  }

  // same numbers
  if (v) {
    for (let k = 0; k < 81; k++) {
      if (state.values[k] === v) {
        state.cells[k].classList.add("same");
      }
    }
  }
}