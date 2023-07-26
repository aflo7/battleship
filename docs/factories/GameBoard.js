import Ship from "./Ship.js";
import { randomIntBetween } from "../utilities/utils.js";
function GameBoard() {
  const board = [...Array(10)].map(e => Array(10).fill(""));
  const shipLengths = {
    'carrier': 5,
    'battleship': 4,
    'destroyer': 3,
    'submarine': 3,
    'patrolBoat': 2
  }
  const ships = {
    'carrier': Ship('carrier', 5),
    'battleship': Ship('battleship', 4),
    'destroyer': Ship('destroyer', 3),
    'submarine': Ship('submarine', 3),
    'patrolBoat': Ship('patrolBoat', 2)
  }
  const shipSet = new Set(['carrier', 'battleship', 'destroyer', 'submarine', 'patrolBoat'])

  function placeRandomShip(shipName) {
    let random = randomIntBetween(0, 1)
    let axis = random === 0 ? 'x' : 'y'
    let offset = shipLengths[shipName] - 1
    if (axis === 'x') {
      let x = randomIntBetween(0, 9)
      let y = randomIntBetween(0, 9 - offset)
      let placement = placeShip([x, y], 'x', shipName)
      while (placement === undefined) {
        x = randomIntBetween(0, 9)
        y = randomIntBetween(0, 9 - offset)
        placement = placeShip([x, y], 'x', shipName)
      }
    } else if (axis === 'y') {
      let x = randomIntBetween(0, 9 - offset)
      let y = randomIntBetween(0, 9)
      let placement = placeShip([x, y], 'y', shipName)
      while (placement === undefined) {
        x = randomIntBetween(0, 9 - offset)
        y = randomIntBetween(0, 9)
        placement = placeShip([x, y], 'y', shipName)
      }
    }
  }

  function receiveAttack([x, y]) {
    const ship = board[x][y]
    if (shipSet.has(ship)) {
      board[x][y] = 'x'
      ships[ship].hit()
      return true
    } else {
      board[x][y] = 'o'
      return false
    }
  }

  function allSunk() {
    for (const ship of Object.values(ships)) {
      if (!ship.isSunk()) {
        return false
      }
    }
    return true
  }

  function placeShip([x, y], axis, shipName) {
    if (axis === 'x') {
      if (y + shipLengths[shipName] > 10) return
      // scan from startCoord along x, make sure spots are empty
      for (let i = y; i < y + shipLengths[shipName]; i++) {
        if (board[x][i] !== "") return
      }

      for (let i = y; i < y + shipLengths[shipName]; i++) {
        board[x][i] = shipName
      }
    } else if (axis === 'y') {
      if (x + shipLengths[shipName] > 10) return

      // scan from startCoord along y, make sure spots are empty
      for (let i = x; i < x + shipLengths[shipName]; i++) {
        if (board[i][y] !== "") return
      }

      for (let i = x; i < x + shipLengths[shipName]; i++) {
        board[i][y] = shipName
      }
    }
    return true
  }

  function getBoard() {
    return board
  }


  return { getBoard, placeShip, receiveAttack, allSunk, placeRandomShip }
}

export default GameBoard