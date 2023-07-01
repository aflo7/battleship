const playerContainer = document.getElementById('player')
const computerContainer = document.getElementById('computer')

import Player from '../factories/Player.js'
import { sleep, randomIntBetween } from '../utilities/utils.js'
import { shipLengths, ships } from '../utilities/gameItems.js'
let placedShips = 0
let axis = 'x'
const axisButton = document.getElementById('axisButton')
axisButton.addEventListener("click", () => {
  axis = axis === 'x' ? 'y' : 'x'
  document.getElementById('axis').textContent = `${axis}-axis`
})


const player = Player("Andres")
const computer = Player("Computer")
let play = false
let turn = "player"

function createInitialBoards() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const playerBox = document.createElement('div')
      playerBox.id = `[${i},${j}]`
      playerBox.addEventListener('click', () => {
        const placement = player.getGameBoard().placeShip([i, j], axis, ships[placedShips])
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
  const board = player.getGameBoard().getBoard()
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const box = document.getElementById(`[${i},${j}]`)
      if (board[i][j] === 'o') {
        box.className = 'miss'
      } else if (board[i][j] === 'x') {
        box.className = 'hit'
      } else if (board[i][j] !== "") {
        box.className = 'ship'
      }
    }
  }
}

function renderComputerBoard() {
  const board = computer.getGameBoard().getBoard()
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const box = document.getElementById(`c[${i},${j}]`)
      if (board[i][j] === 'o') {
        box.className = 'miss'
      } else if (board[i][j] === 'x') {
        box.className = 'hit'
      } else if (board[i][j] !== "") {
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
  let random = randomIntBetween(0, 1)
  let axis = random === 0 ? 'x' : 'y'
  let offset = shipLengths[shipName] - 1
  const computerBoard = computer.getGameBoard()
  if (axis === 'x') {
    let x = randomIntBetween(0, 9)
    let y = randomIntBetween(0, 9 - offset)
    let placement = computerBoard.placeShip([x, y], 'x', shipName)
    while (placement === undefined) {
      x = randomIntBetween(0, 9)
      y = randomIntBetween(0, 9 - offset)
      placement = computerBoard.placeShip([x, y], 'x', shipName)
    }
  } else if (axis === 'y') {
    let x = randomIntBetween(0, 9 - offset)
    let y = randomIntBetween(0, 9)
    let placement = computerBoard.placeShip([x, y], 'y', shipName)
    while (placement === undefined) {
      x = randomIntBetween(0, 9 - offset)
      y = randomIntBetween(0, 9)
      placement = computerBoard.placeShip([x, y], 'y', shipName)
    }
  }
}

function startGame() {
  document.getElementById('axis').style.display = 'none'
  document.getElementById('axisButton').style.display = 'none'
  ships.forEach(ship => placeRandomShip(ship))
  renderComputerBoard()
  play = true
  document.getElementById("instructions").textContent = 'Your turn!'
}

window.addEventListener('DOMContentLoaded', createInitialBoards)