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
const shipLengths = {
  'carrier': 5,
  'battleship': 4,
  'destroyer': 3,
  'submarine': 3,
  'patrolBoat': 2
}

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

function generateCoordinates() {
  const coords = []
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      coords.push([i, j])
    }
  }
  const shuffledArray = shuffle(coords)
  return shuffledArray
}
function shuffle(array) {
  let currentIndex = array.length
  let randomIndex
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

const possibleComputerChoices = generateCoordinates()

async function computerTurn() {
  if (turn === "computer") {
    document.getElementById("instructions").textContent = ''
    await sleep(300)
    const randomChoice = possibleComputerChoices.pop()
    const x = randomChoice[0]
    const y = randomChoice[1]
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

function placeRandomShip(shipName) {
  let random = randomIntFromInterval(0, 1)
  let axis = random === 0 ? 'x' : 'y'
  let offset = shipLengths[shipName] - 1
  const computerBoard = computer.getGameBoard()
  if (axis === 'x') {
    let x = randomIntFromInterval(0, 9)
    let y = randomIntFromInterval(0, 9 - offset)
    let placement = computerBoard.placeShip([x, y], 'x', shipName)
    while (placement === undefined) {
      x = randomIntFromInterval(0, 9)
      y = randomIntFromInterval(0, 9 - offset)
      placement = computerBoard.placeShip([x, y], 'x', shipName)
    }
  } else if (axis === 'y') {
    let x = randomIntFromInterval(0, 9 - offset)
    let y = randomIntFromInterval(0, 9)
    let placement = computerBoard.placeShip([x, y], 'y', shipName)
    while (placement === undefined) {
      x = randomIntFromInterval(0, 9 - offset)
      y = randomIntFromInterval(0, 9)
      placement = computerBoard.placeShip([x, y], 'y', shipName)
    }
  }
}

function startGame() {
  document.getElementById('axis').style.display = 'none'
  document.getElementById('axisButton').style.display = 'none'
  placeRandomShip("carrier")
  placeRandomShip("battleship")
  placeRandomShip("destroyer")
  placeRandomShip("submarine")
  placeRandomShip("patrolBoat")
  renderComputerBoard()
  play = true
  document.getElementById("instructions").textContent = 'Your turn!'
}

window.addEventListener('DOMContentLoaded', createInitialBoards)