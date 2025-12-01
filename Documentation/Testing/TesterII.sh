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

#####################################
# Navigation Tests (Shortened)
#####################################

NAV-01)
  OUT=$(curl -s "$BASE_ROOT/index.html" | grep -i "Endless Chasm")
  [ -n "$OUT" ] && pass "Homepage loads correctly" \
                || fail "Homepage missing expected text"
  ;;

NAV-02)
  OUT=$(curl -s "$BASE_CODE/Website/Pages/start.html" | grep -Ei "Chasm|Journey|Start")
  [ -n "$OUT" ] && pass "Start page loads" \
                || fail "Start page missing expected content marker"
  ;;

#####################################
# Sudoku
#####################################

SUD-01)
  OUT=$(curl -s "$BASE_CODE/sudoku/index.html" | grep -i "sudoku")
  [ -n "$OUT" ] && pass "Sudoku page loads" \
                || fail "Sudoku page missing expected marker"
  ;;

#####################################
# Memory Match
#####################################

MEM-01)
  OUT=$(curl -s "$BASE_CODE/memory_match/index.html" | grep -Ei "memory|card")
  [ -n "$OUT" ] && pass "Memory Match loads" \
                || fail "Memory Match page missing expected marker"
  ;;

#####################################
# Tic-Tac-Toe
#####################################

TTT-01)
  OUT=$(curl -s "$BASE_CODE/tic_tac_toe/index.html" | grep -Ei "tic|toe|grid")
  [ -n "$OUT" ] && pass "Tic-Tac-Toe loads" \
                || fail "Tic-Tac-Toe page missing expected marker"
  ;;

#####################################
# Journal
#####################################

JRN-01)
  OUT=$(curl -s "$BASE_CODE/journal/index.html" | grep -Ei "journal|note|write")
  [ -n "$OUT" ] && pass "Journal loads" \
                || fail "Journal page missing expected marker"
  ;;

#####################################
# Unknown Test
#####################################

*)
  echo "Unknown TEST_ID: $TEST_ID"
  exit 1
  ;;
esac
