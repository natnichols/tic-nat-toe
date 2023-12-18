/*----- Constants -----*/

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

/*----- Variables (state) -----*/

let board, turn, winner, tie



/*----- Cached Element References -----*/

const squareEls = document.querySelectorAll('.sqr')
// console.log(squareEls)
const messageEl = document.getElementById('message')
// console.log(messageEl)
const resetBtnEl = document.querySelector('button')
// console.log(resetBtnEl)

/*----- Event Listeners -----*/

squareEls.forEach(function(squareEl) {
  squareEl.addEventListener('click', handleClick)
})

resetBtnEl.addEventListener('click', init)


/*----- Functions -----*/

init() /* <-- call function to test `init` */

function init() {
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = false
  tie = false
  render()
}

function handleClick(evt) {
  const sqIdx = parseInt(evt.target.id.replace('sq', ' '))
  if (board[sqIdx] || winner) return
  placePiece(sqIdx)
  checkForTie()
  checkForWinner()
  switchPlayerTurn()
  render()
}

function placePiece(idx) {
  board[idx] = turn
}

function checkForTie() {
  if (board.includes(null)) return
  tie = true
}

function checkForWinner() {
  winningCombos.forEach(function(combo) {
    if (Math.abs(board[combo[0]] + board[combo[1]] + board[combo[2]] === 3)) {
      winner = true
    }
  })
}

function switchPlayerTurn() {
  if (winner) return
  turn *= -1
}

function updateBoard() {
  // step 4c starts here
  board.forEach(function(sqrVal, idx) {
    if (sqrVal === 1) {
      // put an X in the square
      squareEls[idx].textContent = `X`
      squareEls[idx].style.backgroundColor = `indigo`
      // console.log(`X in this square`)
    } else if (sqrVal === -1) {
      // put a Y in the square
      squareEls[idx].textContent = `O`
      squareEls[idx].style.backgroundColor = `lightseagreen`
      // console.log(`O in this square`)
    } else {
      // Must display empty square so that board can be reset
      squareEls[idx].textContent = ``
      squareEls[idx].style.backgroundColor = `grey`

      // console.log(`Mulder it's a null square`)
    }
  })
}

function updateMessage() {
  // console.log(`Mulder it's me updating the message`)
  // step 4d starts here
  if (!winner && !tie) {
    messageEl.textContent = `It's ${turn === 1 ? 'X' : 'O'}'s turn!`
  } else if (!winner && tie) {
    messageEl.textContent = `It's a tie! That's called a Cat's Game! 🐈‍⬛`
  } else {
    messageEl.textContent = `Congratulations, ${turn === 1 ? 'X' : 'O'} wins Tic-Tac-Toe!`
  }
}

function render() {
  updateBoard()
  // this is for later during step 4f
  updateMessage()
  // console.log(`Mulder it's rendering time`)
}

