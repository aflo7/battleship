function Ship(name, length) {
  let hits = 0

  function isSunk() {
    return hits >= length
  }

  function hit() {
    hits += 1
  }


  function getName() {
    return name
  }

  function getLength() {
    return length
  }

  function getHits() {
    return hits
  }

  return {
    getName, getLength, isSunk, hit, getHits
  }
}

function GameBoard() {
  const board = [...Array(10)].map(e => Array(10).fill(""));
  const shipLengths = {
    'carrier': 5,
    'battleship': 4,
    'destroyer': 3,
    'submarine': 3,
    'patrolBoat': 2
  }
  const ships = new Set(['carrier', 'battleship', 'destroyer', 'submarine', 'patrolBoat'])

  function receiveAttack([x, y]) {
    const ship = board[x][y]
    if (ships.has(ship)) {
      board[x][y] = 'x'
      return true
    } else {
      board[x][y] = ''
      return false
    }
  }

  function checkWin() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const ship = board[i][j]
        if (ships.has(ship)) {
          return false
        }
      }
    }
    return true
  }

  function placeShip([x, y], axis, shipName) {
    if (axis === 'x') {
      if (y + shipLengths[shipName] > 9) return
      // scan from startCoord along x, make sure spots are empty
      for (let i = y; i < y + shipLengths[shipName]; i++) {
        if (board[x][i] !== "") return
      }

      for (let i = y; i < y + shipLengths[shipName]; i++) {
        board[x][i] = shipName
      }
    } else if (axis === 'y') {
      if (x + shipLengths[shipName] > 9) return

      // scan from startCoord along y, make sure spots are empty
      for (let i = x; i < x + shipLengths[shipName]; i++) {
        if (board[i][y] !== "") return
      }

      for (let i = x; i < x + shipLengths[shipName]; i++) {
        board[i][y] = shipName
      }
    }
  }

  function getBoard() {
    return board
  }


  return { getBoard, placeShip, receiveAttack, checkWin }
}

module.exports = { Ship, GameBoard }