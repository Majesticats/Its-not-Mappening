#!/bin/bash
# TestCollection.sh - Run all automated tests for The Endless Chasm

TESTS=(
  NAV-01
  NAV-02
  SUD-01
  MEM-01
  TTT-01
  JRN-01
)

LOG="test_results.log"

echo "======================================" | tee "$LOG"
echo " Automated Test Suite - The Endless Chasm" | tee -a "$LOG"
echo "======================================" | tee -a "$LOG"
echo "" | tee -a "$LOG"

for T in "${TESTS[@]}"; do
  echo "Running $T..."
  ./TesterII.sh "$T"
  RESULT=$?

  if [ $RESULT -eq 0 ]; then
    echo "$T : PASS" | tee -a "$LOG"
  else
    echo "$T : FAIL" | tee -a "$LOG"
  fi

  echo "" | tee -a "$LOG"
done

echo "--------------------------------------" | tee -a "$LOG"
echo "All tests completed. Results saved to $LOG" | tee -a "$LOG"
echo "--------------------------------------" | tee -a "$LOG"
