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
    'cruiser': 3,
    'submarine': 3,
    'destroyer': 2
  }

  // function addShip(shipName, length) {
  //   const ship = Ship(shipName, length)
  //   ships.push(ship)
  // }

  function placeShip(startCoord, axis, shipName) {
    const startX = startCoord[0]
    const startY = startCoord[1]

    if (axis === 'x') {
      for(let i = startY; i < startY + shipLengths[shipName]; i++) {
        board[startX][i] = shipName
      }
    } else if (axis === 'y') {
      for(let i = startX; i < startX + shipLengths[shipName]; i++) {
        board[i][startY] = shipName
      }
    }
  }

  function getBoard() {
    return board
  }


  // function getShips() {
  //   return ships
  // }

  return { getBoard, placeShip }
}

module.exports = { Ship, GameBoard }