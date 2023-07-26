
import GameBoard from '../factories/GameBoard.js'
import { emptyBoard, boardWithPatrolBoatAlongX, boardWithPatrolBoatAlongY, boardWithSubmarineAlongX, boardWithBattleShipAlongX, boardWithDestroyerAlongX, boardWithCarrierAlongX, boardWithFiveShipsAlongX, boardWithFiveShipsAlongY, boardWithBattleShipAlongXWithOneHit, boardWithCarrierAtBottomRightHorizontal, boardWithCarrierAtBottomRightVertical } from './boards.js'

test('init empty board', () => {
  const expected = emptyBoard
  const gameBoard = GameBoard()
  const result = gameBoard.getBoard()
  expect(result).toEqual(expected)
})

test('place patrol boat along x axis', () => {
  const gameBoard = GameBoard()
  gameBoard.placeShip([0, 0], 'x', 'patrolBoat')
  const result = gameBoard.getBoard()
  const expected = boardWithPatrolBoatAlongX
  expect(result).toEqual(expected)
})

test('place patrol boat along y axis', () => {
  const gameBoard = GameBoard()
  gameBoard.placeShip([0, 0], 'y', 'patrolBoat')
  const result = gameBoard.getBoard()
  const expected = boardWithPatrolBoatAlongY
  expect(result).toEqual(expected)
})

test('place submarine along x axis', () => {
  const gameBoard = GameBoard()
  gameBoard.placeShip([0, 0], 'x', 'submarine')
  const result = gameBoard.getBoard()
  const expected = boardWithSubmarineAlongX
  expect(result).toEqual(expected)
})

test('place destroyer along x axis', () => {
  const gameBoard = GameBoard()
  gameBoard.placeShip([0, 0], 'x', 'destroyer')
  const result = gameBoard.getBoard()
  const expected = boardWithDestroyerAlongX
  expect(result).toEqual(expected)
})

test('place battleship along x axis', () => {
  const gameBoard = GameBoard()
  gameBoard.placeShip([0, 0], 'x', 'battleship')
  const result = gameBoard.getBoard()
  const expected = boardWithBattleShipAlongX
  expect(result).toEqual(expected)


})

test('place carrier along x axis', () => {
  const gameBoard = GameBoard()
  gameBoard.placeShip([0, 0], 'x', 'carrier')
  const result = gameBoard.getBoard()
  const expected = boardWithCarrierAlongX
  expect(result).toEqual(expected)
})

test('place all five ships along x', () => {
  const gameBoard = GameBoard()
  gameBoard.placeShip([0, 0], 'x', 'carrier')
  gameBoard.placeShip([1, 0], 'x', 'battleship')
  gameBoard.placeShip([2, 0], 'x', 'destroyer')
  gameBoard.placeShip([3, 0], 'x', 'submarine')
  gameBoard.placeShip([4, 0], 'x', 'patrolBoat')
  const result = gameBoard.getBoard()
  const expected = boardWithFiveShipsAlongX
  expect(result).toEqual(expected)

})

test('place all five ships along y', () => {
  const board = GameBoard()
  board.placeShip([0, 0], 'y', 'carrier')
  board.placeShip([0, 1], 'y', 'battleship')
  board.placeShip([0, 2], 'y', 'destroyer')
  board.placeShip([0, 3], 'y', 'submarine')
  board.placeShip([0, 4], 'y', 'patrolBoat')
  const result = board.getBoard()
  const expected = boardWithFiveShipsAlongY
  expect(result).toEqual(expected)
})

test('place 2 ships on top of each other along x', () => {
  const board = GameBoard()
  board.placeShip([0, 0], 'x', 'patrolBoat')
  board.placeShip([0, 1], 'x', 'patrolBoat')
  const result = board.getBoard()
  const expected = boardWithPatrolBoatAlongX
  expect(result).toEqual(expected)
})

test('place 2 ships on top of each other along y', () => {
  const board = GameBoard()
  board.placeShip([0, 0], 'y', 'patrolBoat')
  board.placeShip([1, 0], 'y', 'patrolBoat')
  const result = board.getBoard()
  const expected = boardWithPatrolBoatAlongY
  expect(result).toEqual(expected)
})

test('place ship out of bounds along x', () => {
  const board = GameBoard()
  board.placeShip([0, 9], 'x', 'carrier')
  const result = board.getBoard()
  const expected = emptyBoard
  expect(result).toEqual(expected)
})


test('place ship out of bounds along y', () => {
  const board = GameBoard()
  board.placeShip([9, 0], 'y', 'carrier')
  const result = board.getBoard()
  const expected = emptyBoard
  expect(result).toEqual(expected)
})

test('hit battleship once', () => {
  const board = GameBoard()
  board.placeShip([0, 0], 'x', 'battleship')
  board.receiveAttack([0, 0])
  const result = board.getBoard()
  const expected = boardWithBattleShipAlongXWithOneHit
  expect(result).toEqual(expected)
})

test('place vertical ship, then try placing horizontal ship on top', () => {
  const board = GameBoard()
  board.placeShip([0, 0], 'y', 'patrolBoat')
  board.placeShip([0, 0], 'x', 'patrolBoat')
  const result = board.getBoard()
  const expected = boardWithPatrolBoatAlongY
  expect(result).toEqual(expected)
})

test('place carrier at 9,5 horizontally', () => {
  const board = GameBoard()
  board.placeShip([9, 5], 'x', 'carrier')
  const expected = boardWithCarrierAtBottomRightHorizontal
  const result = board.getBoard()
  expect(result).toEqual(expected)
})

test('place carrier at 5,9 vertically', () => {
  const board = GameBoard()
  board.placeShip([5, 9], 'y', 'carrier')
  const expected = boardWithCarrierAtBottomRightVertical
  const result = board.getBoard()
  expect(result).toEqual(expected)
})