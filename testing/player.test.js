const { Player } = require('./Factories.js')
const { emptyBoard, boardWithBattleShipAlongX, boardWithFiveShipsAlongX, boardWithBattleShipAlongXWithOneHit } = require('./boards.js')

test('create player and verify getName works', () => {
  const player = Player("Andres")
  expect(player.getName()).toBe("Andres")
})

test('create player and verify player\'s board is empty', () => {
  const player = Player("Andres")
  expect(player.getGameBoard().getBoard()).toEqual(emptyBoard)
})

test('create a player, and place a ship', () => {
  const player = Player("Andres")
  const gameBoard = player.getGameBoard()
  gameBoard.placeShip([0, 0], 'x', 'battleship')
  const expected = boardWithBattleShipAlongX
  expect(player.getGameBoard().getBoard()).toEqual(expected)
})

test('create a player, place a ship, and receive one attack', () => {
  const player = Player("Andres")
  const gameBoard = player.getGameBoard()
  gameBoard.placeShip([0, 0], 'x', 'battleship')
  gameBoard.receiveAttack([0,0])
  const expected = boardWithBattleShipAlongXWithOneHit
  expect(player.getGameBoard().getBoard()).toEqual(expected)
})
