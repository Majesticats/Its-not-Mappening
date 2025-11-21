//src/generator.js
import { hasUniqueSolution } from "./solver.js";

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function makeFullSolution() {
  //randomized backtracking that fills a blank board
  const grid = Array(81).fill(0);
  const digits = [1,2,3,4,5,6,7,8,9];

  function hasConflictAt(values, r, c, v) {
    //row
    for (let cc = 0; cc < 9; cc++) {
      if (cc !== c && values[r * 9 + cc] === v) return true;
    }
    //col
    for (let rr = 0; rr < 9; rr++) {
      if (rr !== r && values[rr * 9 + c] === v) return true;
    }
    //box
    const br = Math.floor(r / 3) * 3;
    const bc = Math.floor(c / 3) * 3;
    for (let rr = br; rr < br + 3; rr++) {
      for (let cc = bc; cc < bc + 3; cc++) {
        if ((rr !== r || cc !== c) && values[rr * 9 + cc] === v) return true;
      }
    }
    return false;
  }

  function dfs(i = 0) {
    if (i === 81) return true;
    if (grid[i] !== 0) return dfs(i + 1);

    const r = Math.floor(i / 9);
    const c = i % 9;
    const order = shuffle([...digits]);

    for (const d of order) {
      if (!hasConflictAt(grid, r, c, d)) {
        grid[i] = d;
        if (dfs(i + 1)) return true;
        grid[i] = 0;
      }
    }
    return false;
  }

  const ok = dfs(0);
  if (!ok) throw new Error("Failed to generate full solution");
  return grid;
}

export function generate(difficulty = "easy") {
  // 1) Build a full valid solution
  const full = makeFullSolution();

  // 2) Carve clues while preserving *unique* solution
  const puzzle = [...full];
  const idxs = shuffle([...Array(81).keys()]);

  // How aggressively to remove numbers (bigger = fewer givens)
  const removalsTarget =
    difficulty === "easy"   ? 40 :
    difficulty === "medium" ? 50 :
    /* hard */                58;

  let removed = 0;
  for (const i of idxs) {
    const keep = puzzle[i];
    puzzle[i] = 0;

    if (!hasUniqueSolution(puzzle)) {
      puzzle[i] = keep; 
    } else {
      removed++;
      if (removed >= removalsTarget) break;
    }
  }

  return puzzle;
}
