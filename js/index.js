const playerContainer = document.getElementById('player')
const computerContainer = document.getElementById('computer')
function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}
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
  document.getElementById('axis').textContent = `${axis}-axis`
})
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const player = Player("Andres")
const computer = Player("computer")
let play = false
let turn = "player"

function createInitialBoards() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const playerBox = document.createElement('div')
      playerBox.id = `[${i},${j}]`
      playerBox.addEventListener('click', () => {
        const placement = player.getGameBoard().placeShip([i, j], axis, shipsToPlace[placedShips])
        if (placement) {
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
      box.style.cursor = 'pointer'
      box.addEventListener('click', () => {
        if (!play) return
        if (box.className === 'hit' || box.className === "miss") {
          return
        }
        if (turn === 'player') {
          computer.getGameBoard().receiveAttack([i, j])
          renderComputerBoard()

          const allSunk = computer.getGameBoard().allSunk()
          if (allSunk) {
            alert('You win!')
            play = false
            document.getElementById("instructions").textContent = 'You win!'
            return
          }

          turn = 'computer'
          computerTurn()
        }
      })
    }
  }
}

async function computerTurn() {
  if (turn === "computer") {
    document.getElementById("instructions").textContent = ''
    await sleep(10)
    const x = randomIntFromInterval(0, 9)
    const y = randomIntFromInterval(0, 9)
    player.getGameBoard().receiveAttack([x, y])
    renderPlayerBoard()
    const allSunk = player.getGameBoard().allSunk()
    if (allSunk) {
      alert('You lose!')
      play = false
      document.getElementById("instructions").textContent = 'You lose!'
      return
    }

    turn = 'player'
    document.getElementById("instructions").textContent = 'Your turn!'
  }
}

function startGame() {
  document.getElementById('axis').style.display = 'none'
  document.getElementById('axisButton').style.display = 'none'
  const computerBoard = computer.getGameBoard()
  computerBoard.placeShip([0, 0], 'x', 'carrier')
  computerBoard.placeShip([1, 0], 'x', 'battleship')
  computerBoard.placeShip([2, 0], 'x', 'destroyer')
  computerBoard.placeShip([3, 0], 'x', 'submarine')
  computerBoard.placeShip([4, 0], 'x', 'patrolBoat')
  renderComputerBoard()
  play = true
  document.getElementById("instructions").textContent = 'Your turn!'
}

window.addEventListener('DOMContentLoaded', createInitialBoards)