//checks if placing value v at (r,c) causes a conflict
export function hasConflictAt(values, r, c, v) {
  //row
  for (let cc = 0; cc < 9; cc++) {
    if (cc !== c && values[r * 9 + cc] === v) return true;
  }

  //column
  for (let rr = 0; rr < 9; rr++) {
    if (rr !== r && values[rr * 9 + c] === v) return true;
  }

  //3×3 box
  const br = Math.floor(r / 3) * 3;
  const bc = Math.floor(c / 3) * 3;
  for (let rr = br; rr < br + 3; rr++) {
    for (let cc = bc; cc < bc + 3; cc++) {
      if ((rr !== r || cc !== c) && values[rr * 9 + cc] === v) return true;
    }
  }

  return false;
}


//checks if the entire 81-cell puzzle is solved correctly
export function isSolved(values) {
  if (!values || values.length !== 81) return false;

  //Must contain only 1–9 (no empty cells)
  if (values.some(v => v === 0)) return false;

  //checks that no placement violates Sudoku rules
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const i = r * 9 + c;
      const v = values[i];
      const copy = [...values];
      copy[i] = 0;

      if (hasConflictAt(copy, r, c, v)) return false;
    }
  }

  return true;
}
