 
    // Basic player model
    const players = { X: {name:'Player X', symbol:'X'}, O: {name:'Player O', symbol:'O'} };

    // Game state
    let current = players.X; // start X by default
    let board = Array(9).fill(null); // 0..8
    let running = true;

    // Winning lines (indices)
    const wins = [
      [0,1,2],[3,4,5],[6,7,8], // rows
      [0,3,6],[1,4,7],[2,5,8], // cols
      [0,4,8],[2,4,6]          // diags
    ];
    
    // create board UI
    const boardEl = document.getElementById('board'); 
    const statusEl = document.getElementById('status');
    const restartBtn = document.getElementById('restartBtn');
    const swapBtn = document.getElementById('swapBtn');

    // creaate board cells
    function createBoard(){
      boardEl.innerHTML = ''; // clear existing if any
      for(let i=0;i<9;i++){
        const cell = document.createElement('div'); // create a variable cell and create a dive element
        cell.className = 'cell';
        cell.dataset.index = i;
        cell.setAttribute('role','button');
        cell.setAttribute('aria-label', `Cell ${i+1}`);
        cell.addEventListener('click', () => handleClick(i));
        boardEl.appendChild(cell);
      }
    }

    function handleClick(index){ // when a cell is clicked
      if(!running) return;
      if(board[index] !== null) return;
      
      // mark the board
      board[index] = current.symbol;
      renderCell(index);
      
      // check for win or tie
      const winnerInfo = checkWinner(current.symbol);
      if(winnerInfo.win){
        running = false;
        statusEl.textContent = `${current.name} wins!`;
        highlightWin(winnerInfo.line);
        disableBoard();
        return;
      }

      // if the board is full, it's a tie
      if(isBoardFull()){
        running = false;
        statusEl.textContent = `It's a tie!`;
        return;
      }

      // switch player
      current = (current.symbol === 'X') ? players.O : players.X;
      statusEl.textContent = `${current.name}'s Turn`;
    }
    
    function renderCell(i){
      const el = boardEl.children[i]; // get the cell element
      el.textContent = board[i] || ''; // set text to X or O
      if(board[i]) el.classList.add('disabled'); // diable if occupied with X or O
      else el.classList.remove('disabled'); // enable if empty
    }

    // check if current player has won
    function checkWinner(symbol){
      for(const line of wins){
        const [a,b,c] = line;
        if(board[a] === symbol && board[b] === symbol && board[c] === symbol){
          return {win:true, line};
        }
      }
      return {win:false, line:null};
    }

    // check if board is full
    function isBoardFull(){
      return board.every(cell => cell !== null);
    }

    // diable board interaction after tie or win
    function disableBoard(){
      for(const cell of boardEl.children){
        cell.classList.add('disabled');
      }
    }

    // highlight winning line
    function highlightWin(line){
      for(const idx of line){
        boardEl.children[idx].classList.add('win');
      }
    }
    // reset the game if restart is clicked 
    function resetGame(){
      board = Array(9).fill(null);
      running = true;
      // reset DOM cells
      for(let i=0;i<9;i++){
        const el = boardEl.children[i];
        el.textContent = '';
        el.classList.remove('disabled','win');
      }
      current = players.X;
      statusEl.textContent = `${current.name}'s Turn`;
    }

    // Swap starting player between X and O (optional feature)
    function swapStartingPlayer(){
      if(current.symbol === 'X'){
        current = players.O;
        swapBtn.textContent = 'Start as X';
      } else {
        current = players.X;
        swapBtn.textContent = 'Start as O';
      }
      statusEl.textContent = `${current.name}'s Turn`;
    }

    // Wire up buttons
    restartBtn.addEventListener('click', resetGame);
    swapBtn.addEventListener('click', swapStartingPlayer);

    // Initialize
    createBoard();

