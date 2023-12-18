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

const hornSound = new Audio('../assets/audio/horn.wav')
const meowSound = new Audio('../assets/audio/meow.wav')
const laserSound = new Audio('../assets/audio/laser.wav')
hornSound.volume = 0.3
meowSound.volume = 0.3
laserSound.volume = 0.3

/*----- Variables (state) -----*/

let board, turn, winner, tie



/*----- Cached Element References -----*/

const squareEls = document.querySelectorAll('.sqr')
// console.log(squareEls)
const messageEl = document.getElementById('message')
// console.log(messageEl)
const resetBtnEl = document.getElementById('reset')
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
  const sqIdx = parseInt(evt.target.id.replace('sq', ''))
  if (board[sqIdx] || winner) {
    //add in buzzer noise to stop user from clicking sq
    return
  }
  placePiece(sqIdx)
  console.log(board)
  checkForWinner()
  checkForTie()
  switchPlayerTurn()
  render()
}

function placePiece(idx) {
  board[idx] = turn
  laserSound.play()
}

function checkForTie() {
  if (board.includes(null)) {
    return
  } else {
    tie = true
    setTimeout(() => {meowSound.play()}, 500);
    meowSound.play()
  }
}

function checkForWinner() {
  winningCombos.forEach(combo => {
    // console.log('winner function running')
    if (Math.abs(board[combo[0]] + board[combo[1]] + board[combo[2]]) === 3) {
      // console.log(turn)
      winner = true
      setTimeout(() => {hornSound.play()}, 750);
      hornSound.play()
      confetti.start(2000)
    }
  })
}

function switchPlayerTurn() {
  if (!winner) {
    turn *= -1
  }
}

function updateBoard() {
  // step 4c starts here
  board.forEach(function(sqrVal, idx) {
    if (sqrVal === 1) {
      // put an X in the square
      squareEls[idx].textContent = `X`
      squareEls[idx].style.backgroundColor = `#F95738`
      squareEls[idx].classList.add('animate__animated', 'animate__jello')
      // console.log(`X in this square`)
    } 
    if (sqrVal === -1) {
      // put a Y in the square
      squareEls[idx].textContent = `O`
      squareEls[idx].style.backgroundColor = `#0D3B66`
      squareEls[idx].style.color = `#FAF0CA`
      squareEls[idx].classList.add('animate__animated', 'animate__jello')
      // console.log(`O in this square`)
    } 
    if (sqrVal === null){
      // Must display empty square so that board can be reset
      squareEls[idx].textContent = ``
      squareEls[idx].style.backgroundColor = `#F4D35E`
      squareEls[idx].classList.remove('animate__animated', 'animate__jello')
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

