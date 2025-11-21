// src/solver.js
import { hasConflictAt } from "./validate.js";

function findEmpty(values) {
  const i = values.indexOf(0);
  return i === -1 ? null : { i, r: Math.floor(i / 9), c: i % 9 };
}

export function solve(values) {
  if (!values || values.length !== 81) return null;

  const arr = [...values]; //don’t mutate caller

  function dfs() {
    const slot = findEmpty(arr);
    if (!slot) return true; //solved

    const { i, r, c } = slot;
    for (let d = 1; d <= 9; d++) {
      if (!hasConflictAt(arr, r, c, d)) {
        arr[i] = d;
        if (dfs()) return true;
        arr[i] = 0;
      }
    }
    return false; //dead end
  }

  const ok = dfs();
  return ok ? arr : null;
}

export function hasUniqueSolution(values) {
  //counts up to 2 solutions
  if (!values || values.length !== 81) return false;

  const arr = [...values];
  let count = 0;

  function dfs() {
    if (count > 1) return; //early exit

    const i = arr.indexOf(0);
    if (i === -1) {
      count++;
      return;
    }

    const r = Math.floor(i / 9);
    const c = i % 9;

    for (let d = 1; d <= 9; d++) {
      if (!hasConflictAt(arr, r, c, d)) {
        arr[i] = d;
        dfs();
        arr[i] = 0;
        if (count > 1) return;
      }
    }
  }

  dfs();
  return count === 1;
}
