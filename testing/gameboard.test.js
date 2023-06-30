const { GameBoard } = require('./Factories.js')
const { emptyBoard, boardWithDestroyerAlongX, boardWithSubmarineAlongX, boardWithBattleShipAlongX } = require('./boards.js')

test('init empty board', () => {
  const expected = emptyBoard
  const board = GameBoard()
  const result = board.getBoard()
  expect(result).toEqual(expected)
})

// startCoord, axis, shipName
test('place destroyer along x axis', () => {
  const board = GameBoard()
  board.placeShip([0, 0], 'x', 'destroyer')
  const result = board.getBoard()
  const expected = boardWithDestroyerAlongX
  expect(result).toEqual(expected)
})

test('place submarine along x axis', () => {
  const board = GameBoard()
  board.placeShip([0, 0], 'x', 'submarine')
  const result = board.getBoard()
  const expected = boardWithSubmarineAlongX
  expect(result).toEqual(expected)
})

test('place battleship along x axis', () => { 
  const board = GameBoard()
  const result = board.getBoard()
  const expected = boardWithBattleShipAlongX

  expect(result).toEqual(expected)

 })