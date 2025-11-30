// Tic-Tac-Toe Game Logic
class TicTacToe {
  constructor(boardElement, statusElement, resetButton, onWinCallback, userSymbol = "X") {
    this.board = ["", "", "", "", "", "", "", "", ""]
    this.currentPlayer = "X"
    this.gameActive = true
    this.boardElement = boardElement
    this.statusElement = statusElement
    this.resetButton = resetButton
    this.onWinCallback = onWinCallback
    this.userSymbol = userSymbol // 'X' or 'O'
    this.computerSymbol = this.userSymbol === "X" ? "O" : "X"

    this.winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ]

    this.init()
  }

  init() {
    this.renderBoard()
    this.updateStatus()
    this.resetButton.addEventListener("click", () => this.reset())
    // If computer starts (user chose O), make the computer move immediately
    if (this.currentPlayer === this.computerSymbol) {
      this.updateStatus("Consulting the fates...")
      setTimeout(() => this.makeComputerMove(), 500)
    }
  }

  renderBoard() {
    this.boardElement.innerHTML = ""
    this.board.forEach((cell, index) => {
      const cellElement = document.createElement("div")
      cellElement.classList.add("game-cell")
      cellElement.dataset.index = index

      if (cell === "X") {
        const img = document.createElement("img")
        img.src = "../../ImageAssets/X-Tile.png"
        img.alt = "X"
        cellElement.appendChild(img)
      } else if (cell === "O") {
        const img = document.createElement("img")
        img.src = "../../ImageAssets/O-Tile.png"
        img.alt = "O"
        cellElement.appendChild(img)
      }

      if (cell) {
        cellElement.classList.add("taken")
        cellElement.classList.add(`player-${cell.toLowerCase()}`)
      }

      cellElement.addEventListener("click", () => this.handleCellClick(index))
      this.boardElement.appendChild(cellElement)
    })
  }

  handleCellClick(index) {
    if (this.board[index] !== "" || !this.gameActive) return

    this.board[index] = this.currentPlayer
    this.renderBoard()
    this.checkResult()
  }

  checkResult() {
    let roundWon = false
    let winningCombination = null

    for (let i = 0; i < this.winningConditions.length; i++) {
      const [a, b, c] = this.winningConditions[i]
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        roundWon = true
        winningCombination = [a, b, c]
        break
      }
    }

    if (roundWon) {
      this.gameActive = false

      // Highlight winning cells
      if (winningCombination) {
        const cells = this.boardElement.querySelectorAll(".game-cell")
        winningCombination.forEach((index) => {
          cells[index].classList.add("winning")
        })
      }

      if (this.currentPlayer === this.userSymbol) {
        this.updateStatus("You Win! Path Unlocked!", "winner")
        if (this.onWinCallback) this.onWinCallback()
      } else {
        this.updateStatus("You Lose. Try Again.", "loser")
      }
      return
    }

    if (!this.board.includes("")) {
      this.gameActive = false
      this.updateStatus("The fates deny you… again.")
      return
    }

    this.currentPlayer = this.currentPlayer === "X" ? "O" : "X"

    if (this.currentPlayer === this.computerSymbol) {
      this.updateStatus("Consulting the fates...")
      setTimeout(() => this.makeComputerMove(), 500)
    } else {
      this.updateStatus(`Your turn (${this.userSymbol})`)
    }
  }

  makeComputerMove() {
    const makeRandomMove = Math.random() < 0.4

    let move
    if (makeRandomMove) {
      // Make a random move
      const availableMoves = this.board
        .map((cell, index) => (cell === "" ? index : null))
        .filter((index) => index !== null)
      move = availableMoves[Math.floor(Math.random() * availableMoves.length)]
    } else {
      // Play strategically — prefer winning for computer, block user, otherwise strategy
      move = this.findWinningMove(this.computerSymbol) || this.findWinningMove(this.userSymbol) || this.findStrategicMove()
    }

    if (move !== null) {
      this.board[move] = this.computerSymbol
      this.renderBoard()
      this.checkResult()
    }
  }

  findWinningMove(player) {
    for (const condition of this.winningConditions) {
      const [a, b, c] = condition
      const cells = [this.board[a], this.board[b], this.board[c]]

      if (cells.filter((cell) => cell === player).length === 2 && cells.includes("")) {
        return condition[cells.indexOf("")]
      }
    }
    return null
  }

  findStrategicMove() {
    // Prefer center, then corners, then edges
    if (this.board[4] === "") return 4

    const corners = [0, 2, 6, 8]
    const availableCorners = corners.filter((i) => this.board[i] === "")
    if (availableCorners.length > 0) {
      return availableCorners[Math.floor(Math.random() * availableCorners.length)]
    }

    const edges = [1, 3, 5, 7]
    const availableEdges = edges.filter((i) => this.board[i] === "")
    if (availableEdges.length > 0) {
      return availableEdges[Math.floor(Math.random() * availableEdges.length)]
    }

    return null
  }

  updateStatus(message, className = "") {
    this.statusElement.textContent = message
    this.statusElement.className = "game-status " + className
  }

  reset() {
    this.board = ["", "", "", "", "", "", "", "", ""]
    this.currentPlayer = "X"
    this.gameActive = true
    this.renderBoard()
    this.updateStatus(`Your turn (${this.userSymbol})`)
    // If computer should start (user chose O), make computer move
    if (this.currentPlayer === this.computerSymbol) {
      this.updateStatus("Consulting the fates...")
      setTimeout(() => this.makeComputerMove(), 500)
    }
  }

  // Allow changing which symbol the human plays
  setUserSymbol(symbol) {
    if (symbol !== "X" && symbol !== "O") return
    this.userSymbol = symbol
    this.computerSymbol = this.userSymbol === "X" ? "O" : "X"
    this.reset()
  }
}

// Initialize game when page loads
document.addEventListener("DOMContentLoaded", () => {
  const boardElement = document.getElementById("game-board")
  const statusElement = document.getElementById("game-status")
  const resetButton = document.getElementById("game-reset")
  const lockedButtons = document.querySelectorAll(".btn.locked")

  const playerToggle = document.getElementById("player-toggle")

  // Ensure unlock message is hidden on page load
  const unlockMsg = document.getElementById("unlock-message")
  if (unlockMsg) {
    unlockMsg.style.display = "none"
  }

  if (boardElement && statusElement && resetButton) {
    // Check if path is already unlocked
    const pathUnlocked = localStorage.getItem("pathUnlocked") === "true"

    if (pathUnlocked) {
      unlockPaths()
    }

    // Determine initial player symbol (default X)
    const initialSymbol = playerToggle && playerToggle.textContent.includes("O") ? "O" : "X"

    const game = new TicTacToe(boardElement, statusElement, resetButton, () => {
      // Save unlock state
      localStorage.setItem("pathUnlocked", "true")
      unlockPaths()
    }, initialSymbol)
    

    // Wire up the player toggle button if present
    if (playerToggle) {
      // Ensure the button label matches current choice
      playerToggle.textContent = `Play as: ${game.userSymbol}`
      playerToggle.addEventListener("click", () => {
        const newSymbol = game.userSymbol === "X" ? "O" : "X"
        game.setUserSymbol(newSymbol)
        playerToggle.textContent = `Play as: ${newSymbol}`
        playerToggle.setAttribute("aria-pressed", newSymbol === "O")
      })
    }
  }

  function unlockPaths() {
    const lockedButtons = document.querySelectorAll(".btn.locked")
    lockedButtons.forEach((btn) => {
      btn.classList.remove("locked", "disabled")
      btn.style.pointerEvents = "auto"
    })

    // Show unlock message
    const unlockMsg = document.getElementById("unlock-message")
    if (unlockMsg) {
      unlockMsg.style.display = "block"
    }
  }
})
