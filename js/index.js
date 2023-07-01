const playerContainer = document.getElementById('player')
const computerContainer = document.getElementById('computer')
import Player from '../factories/Player.js'
let placedShips = 0
const shipsToPlace = ['carrier',
  'battleship',
  'destroyer',
  'submarine',
  'patrolBoat']
let axis = 'x'
const axisButton = document.getElementById('axisButton')
axisButton.addEventListener("click", () => {
  axis = axis === 'x' ? 'y' : 'x'
})
const player = Player("Andres")
const computer = Player("computer")

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    const playerBox = document.createElement('div')
    playerBox.id = `[${i},${j}]`
    playerBox.addEventListener('click', () => {
      const placement = player.getGameBoard().placeShip([i, j], axis, shipsToPlace[placedShips])
      if (placement) {
        console.log('true')
        placedShips++
        renderPlayerBoard()
      }
      if (placedShips === 5) {
        startGame()
      }
    })
    playerContainer.appendChild(playerBox)
    const computerBox = document.createElement('div')
    computerBox.id = `c[${i},${j}]`
    computerContainer.appendChild(computerBox)
  }
}

function renderPlayerBoard() {
  const theBoard = player.getGameBoard().getBoard()
  for (let i = 0; i < theBoard.length; i++) {
    for (let j = 0; j < theBoard.length; j++) {
      const box = document.getElementById(`[${i},${j}]`)
      if (theBoard[i][j] === 'o') {
        box.className = 'miss'
      } else if (theBoard[i][j] === 'x') {
        box.className = 'hit'
      } else if (theBoard[i][j] !== "") {
        box.className = 'ship'
      }
    }
  }
}

function renderComputerBoard() {
  const theBoard = computer.getGameBoard().getBoard()
  for (let i = 0; i < theBoard.length; i++) {
    for (let j = 0; j < theBoard.length; j++) {
      const box = document.getElementById(`c[${i},${j}]`)
      if (theBoard[i][j] === 'o') {
        box.className = 'miss'
      } else if (theBoard[i][j] === 'x') {
        box.className = 'hit'
      } else if (theBoard[i][j] !== "") {
        box.className = 'ship'

      }
    }
  }
}

function startGame() {
  const computerBoard = computer.getGameBoard()
  computerBoard.placeShip([0, 0], 'x', 'carrier')
  computerBoard.placeShip([1, 0], 'x', 'battleship')
  computerBoard.placeShip([2, 0], 'x', 'destroyer')
  computerBoard.placeShip([3, 0], 'x', 'submarine')
  computerBoard.placeShip([4, 0], 'x', 'patrolBoat')
  renderComputerBoard()
  // alert('starting game')
}