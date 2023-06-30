const { Player } = require('./Factories.js')
const { emptyBoard,boardWithFiveSunkShipsAlongX, boardWithBattleShipAlongX, boardWithBattleShipAlongXWithOneHit, boardWithSunkBattleShipAlongX } = require('./boards.js')

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

test('create player, place 5 ships, and sink them', () => { 
  const player = Player("Andres")
  const gameBoard = player.getGameBoard()
  gameBoard.placeShip([0, 0], 'x', 'carrier')
  gameBoard.placeShip([1, 0], 'x', 'battleship')
  gameBoard.placeShip([2, 0], 'x', 'destroyer')
  gameBoard.placeShip([3, 0], 'x', 'submarine')
  gameBoard.placeShip([4, 0], 'x', 'patrolBoat')
  gameBoard.receiveAttack([0, 0]);
  gameBoard.receiveAttack([0, 1]);
  gameBoard.receiveAttack([0, 2]);
  gameBoard.receiveAttack([0, 3]);
  gameBoard.receiveAttack([0, 4]);
  gameBoard.receiveAttack([1, 0]);
  gameBoard.receiveAttack([1, 1]);
  gameBoard.receiveAttack([1, 2]);
  gameBoard.receiveAttack([1, 3]);
  gameBoard.receiveAttack([2, 0]);
  gameBoard.receiveAttack([2, 1]);
  gameBoard.receiveAttack([2, 2]);
  gameBoard.receiveAttack([3, 0]);
  gameBoard.receiveAttack([3, 1]);
  gameBoard.receiveAttack([3, 2]);
  gameBoard.receiveAttack([4, 0]);
  gameBoard.receiveAttack([4, 1]);
  expect(gameBoard.getBoard()).toEqual(boardWithFiveSunkShipsAlongX)
  expect(gameBoard.allSunk()).toBe(true)
 })
