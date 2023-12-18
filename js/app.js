/*----- Constants -----*/
// Step 5 - Define the required constants
  // 5a) In a constant called `winningCombos` define the eight possible winning combinations as an array of arrays.
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
// Step 1 - Define the required variables used to track the state of the game
  // 1a) Use a variable named `board` to represent the state of the squares on the board.
  // 1b) Use a variable named `turn` to track whose turn it is.
  // 1c) Use a variable named `winner` to represent if anyone has won yet.
  // 1d) Use a variable named `tie` to represent if the game has ended in a tie.
let board, turn, winner, tie



/*----- Cached Element References -----*/
// Step 2 - Store cached element references.
  // 2a) In a constant called `squareEls`, store the nine elements representing the squares on the page.
  // 2b) In a constant called `messageEl`, store the element that displays the game's status on the page.
const squareEls = document.querySelectorAll('.sqr')
// console.log(squareEls)
const messageEl = document.getElementById('message')
// console.log(messageEl)

/*----- Event Listeners -----*/
// Step 6 - Handle a player clicking a square with a `handleClick` function
  // 6a) Create a function called `handleClick`. It will have an `evt` parameter.
  // 6b) Attach an event listener to the game board (you can do this to each one of the existing `squareEls` with a `forEach` loop OR add a new cached element reference that will allow you to take advantage of event bubbling). On the `'click'` event, it should call the `handleClick` function you created in 6a.
  // 6c) Obtain the index of the square that was clicked by "extracting" the index from an `id` assigned to the target element in the HTML. Assign this to a constant called `sqIdx`.
  // 6d) If the `board` has a value at the `sqIdx`, immediately `return` because that square is already taken. Also, if `winner` is `true` immediately `return` because the game is over.


// Step 6.1 - `placePiece`
  // 6.1a) Create a function named placePiece that accepts an `idx` parameter.
  // 6.1b) Update the `board` array at the `idx` so that it is equal to the current value of `turn`.


// 6.2 - `checkForTie`
  // 6.2a) Create a function named `checkForTie`.
  // 6.2b) Check if the `board` array still contains any `null` elements. If it does, we can leave `tie` as false. Otherwise, set `tie` to true.


// 6.3 - `checkForWinner`
  // 6.3a) Create a function called `checkForWinner`
  // 6.3b) Determine if a player has won using one of the two options below. Option 1 is a more elegant method that takes advantage of the `winningCombos` array you wrote above in step 5. Option 2 might be a little simpler to comprehend, but you'll need to write more code. This option won't take advantage of the winningCombos array, but using it as a reference will help you build a solution. Ensure you choose only one path.
  //       Option 1) Loop through each of the winning combination arrays defined in the `winningCombos` array. Total up the three board positions using the three indexes in the current combo. Convert the total to an absolute value (convert any negative total to  positive). If the total equals 3, we have a winner, and can set `winner` to true.
  //       Option 2) For each one of the winning combinations you wrote in step 5, find the total of each winning combination. Convert the total to an absolute value (convert any negative total to positive). If the total equals 3, we have a winner, and can set `winner` to true.


// 6.4 - `switchPlayerTurn`
  // 6.4a) Create a function called `switchPlayerTurn`.
  // 6.4b) If `winner` is true, return out of the function - we don’t need to switch the turn anymore!
  // 6.4c) If `winner` is false, change the turn by multiplying `turn` by `-1` (this flips a `1` to `-1`, and vice-versa).


// 6.5 - Tying it all together
  // 6.5a) In our `handleClick` function, call `placePiece`, `checkForTie`, `checkForWinner`, and `switchPlayerTurn`. Don’t forget that `placePiece` needs `sqIdx` as an argument! 
  // 6.5b) Finally, now that all the state has been updated we need to render that updated state to the user by calling the `render` function that we wrote earlier.

  
// Step 7 - Create Reset functionality
  // 7a) Add a reset button to the HTML document.
  // 7b) Store the new reset button element as a cached element reference in a constant named `resetBtnEl`.
  // 7c) Attach an event listener to the `resetBtnEl`. On the `'click'` event it should call the `init` function you created in step 3.


/*----- Functions -----*/
// Step 3 - Upon loading, the game state should be initialized, and a function should be called to render this game state.
  // 3a) Create a function called `init`.
  // 3b) Call this `init` function when the app loads.
  // 3c) Set the `board` variable to an array containing nine `null`s to represent empty squares.
  // 3d) Set the `turn` to `1` - which will represent player X.
  // 3e) Set the `winner` to false.
  // 3f) Set `tie` to false.
  // 3g) Call a function called `render` at the end of the `init` function.

init() /* <-- call function to test `init` */

function init() {
  board = [null, -1, 1, null, null, null, null, null, null]
  turn = 1
  winner = false
  tie = false
  render()
}

// Step 4 - The state of the game should be rendered to the user
  // 4a) Create a function called `render`, then set it aside for now.
  // 4b) Create a function called `updateBoard`.
  // 4c) In the `updateBoard` function, loop over `board` and for each element:
  //     - Use the current index of the iteration to access the corresponding square in the `squareEls` node list (array-like structure).
  //     - Style that square however you wish, dependent on the value contained in the current cell being iterated over (`-1`, `1`, or `null`). To keep it simple, start with just putting a letter in each square depending on what the the value of each cell is.
  // 4d) Create a function called `updateMessage`
  // 4e) In the `updateMessage` function, render a message based on the current game state:
  //     - If both `winner` and `tie` have a value of false (meaning the game is still in progress), render whose turn it is.
  //     - If `winner` is false, but `tie` is true, render a tie message.
  //     - Otherwise, render a congratulatory message to the player that has won.
  // 4f) Invoke both the `updateBoard` and the `updateMessage` functions inside of your `render` function.

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
// updateBoard() /* <-- call function to test `updateBoard` */

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
// updateMessage() /* <-- call function to test `updateMessage` */

function render() {
  updateBoard()
  // this is for later during step 4f
  updateMessage()
  // console.log(`Mulder it's rendering time`)
}
// render() /* <-- call function to test `render` */

/* ------------------
STARTER PSEUDOCODE FROM LAB INSTRUCTIONS BELOW --> steps will be moved into their respective sections as each step is completed 
------------------- */

