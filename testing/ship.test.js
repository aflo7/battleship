// const {Ship} = require('./Factories.js')
import { Ship } from "./Factories"

test('create ships', () => {
  const carrier = Ship("carrier", 5)
  const battleship = Ship("battleship", 4)
  const cruiser = Ship("cruiser", 3)
  const submarine = Ship("submarine", 3)
  const destroyer = Ship("destroyer", 2)
  expect(carrier.getLength()).toBe(5)
  expect(battleship.getLength()).toBe(4)
  expect(cruiser.getLength()).toBe(3)
  expect(submarine.getLength()).toBe(3)
  expect(destroyer.getLength()).toBe(2)
})

test('ship is not sunk', () => {
  const carrier = Ship("carrier", 5)
  carrier.hit()
  carrier.hit()
  carrier.hit()
  expect(carrier.isSunk()).toBe(false)
  expect(carrier.getHits()).toBe(3)
})

test('carrier is sunk', () => {
  const carrier = Ship("carrier", 5)
  carrier.hit()
  carrier.hit()
  carrier.hit()
  carrier.hit()
  carrier.hit()
  expect(carrier.isSunk()).toBe(true)
  expect(carrier.getHits()).toBe(5)
})

test('patrolBoat is sunk', () => {
  const patrolBoat = Ship("patrolBoat", 2)
  patrolBoat.hit()
  patrolBoat.hit()
  expect(patrolBoat.isSunk()).toBe(true)
  expect(patrolBoat.getHits()).toBe(2)
})