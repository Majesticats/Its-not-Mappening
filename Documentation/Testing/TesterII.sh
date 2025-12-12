#!/bin/bash
# TesterII.sh - Run a single automated test for The Endless Chasm
# Usage: ./TesterII.sh <TEST_ID>

BASE_ROOT="http://localhost:8000"
BASE_CODE="http://localhost:8000/Code"
TEST_ID="$1"

if [ -z "$TEST_ID" ]; then
  echo "Usage: ./TesterII.sh <TEST_ID>"
  exit 1
fi

pass() { echo "PASS: $1"; exit 0; }
fail() { echo "FAIL: $1"; exit 1; }

case "$TEST_ID" in

# Test homepage, which is at the ROOT folder
NAV-01)
  OUT=$(curl -s "$BASE_ROOT/index.html" | grep -i "Endless Chasm")
  [ -n "$OUT" ] && pass "Homepage loads correctly" || fail "Homepage missing expected text"
  ;;

# Test start page inside Code/Website/Pages
NAV-02)
  OUT=$(curl -s "$BASE_CODE/Website/Pages/start.html" | grep -i "Chasm")
  [ -n "$OUT" ] && pass "Start page loads" || fail "Start page missing expected text"
  ;;

# Sudoku test
SUD-01)
  OUT=$(curl -s "$BASE_CODE/sudoku/index.html" | grep -i "Sudoku")
  [ -n "$OUT" ] && pass "Sudoku page loads" || fail "Sudoku page missing expected marker"
  ;;

# Memory Match test
MEM-01)
  OUT=$(curl -s "$BASE_CODE/memory_match/index.html" | grep -i "Memory")
  [ -n "$OUT" ] && pass "Memory Match loads" || fail "Memory Match page missing expected marker"
  ;;

# Tic Tac Toe test
TTT-01)
  OUT=$(curl -s "$BASE_CODE/tic_tac_toe/index.html" | grep -i "Tic")
  [ -n "$OUT" ] && pass "TicTacToe loads" || fail "TicTacToe page missing expected marker"
  ;;

# Journal test
JRN-01)
  OUT=$(curl -s "$BASE_CODE/journal/index.html" | grep -i "Journal")
  [ -n "$OUT" ] && pass "Journal loads" || fail "Journal page missing expected marker"
  ;;

# Unknown ID
*)
  echo "Unknown TEST_ID: $TEST_ID"
  exit 1
  ;;
esac
