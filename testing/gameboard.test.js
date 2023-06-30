const { GameBoard } = require('./Factories.js')
const { emptyBoard, boardWithPatrolBoatAlongX, boardWithPatrolBoatAlongY, boardWithSubmarineAlongX, boardWithBattleShipAlongX, boardWithDestroyerAlongX, boardWithCarrierAlongX, boardWithFiveShipsAlongX, boardWithFiveShipsAlongY, boardWithBattleShipAlongXWithOneHit } = require('./boards.js')

// placeShip() tests
// startCoord, axis, shipName
test('init empty board', () => {
  const expected = emptyBoard
  const board = GameBoard()
  const result = board.getBoard()
  expect(result).toEqual(expected)
})

test('place patrol boat along x axis', () => {
  const board = GameBoard()
  board.placeShip([0, 0], 'x', 'patrolBoat')
  const result = board.getBoard()
  const expected = boardWithPatrolBoatAlongX
  expect(result).toEqual(expected)
})

test('place patrol boat along y axis', () => {
  const board = GameBoard()
  board.placeShip([0, 0], 'y', 'patrolBoat')
  const result = board.getBoard()
  const expected = boardWithPatrolBoatAlongY
  expect(result).toEqual(expected)
})

test('place submarine along x axis', () => {
  const board = GameBoard()
  board.placeShip([0, 0], 'x', 'submarine')
  const result = board.getBoard()
  const expected = boardWithSubmarineAlongX
  expect(result).toEqual(expected)
})

test('place destroyer along x axis', () => {
  const board = GameBoard()
  board.placeShip([0, 0], 'x', 'destroyer')
  const result = board.getBoard()
  const expected = boardWithDestroyerAlongX
  expect(result).toEqual(expected)
})

test('place battleship along x axis', () => {
  const board = GameBoard()
  board.placeShip([0, 0], 'x', 'battleship')
  const result = board.getBoard()
  const expected = boardWithBattleShipAlongX
  expect(result).toEqual(expected)


})

test('place carrier along x axis', () => {
  const board = GameBoard()
  board.placeShip([0, 0], 'x', 'carrier')
  const result = board.getBoard()
  const expected = boardWithCarrierAlongX
  expect(result).toEqual(expected)

})

test('place all five ships along x', () => {
  const board = GameBoard()
  board.placeShip([0, 0], 'x', 'carrier')
  board.placeShip([1, 0], 'x', 'battleship')
  board.placeShip([2, 0], 'x', 'destroyer')
  board.placeShip([3, 0], 'x', 'submarine')
  board.placeShip([4, 0], 'x', 'patrolBoat')
  const result = board.getBoard()
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
  board.receiveAttack([0,0])
  const result = board.getBoard()
  const expected = boardWithBattleShipAlongXWithOneHit
  expect(result).toEqual(expected)
 })

 test('miss the battleship', () => { 
  const board = GameBoard()
  board.placeShip([0, 0], 'x', 'battleship')
  board.receiveAttack([3,3])
  const result = board.getBoard()
  const expected = boardWithBattleShipAlongX
  expect(result).toEqual(expected)
 })