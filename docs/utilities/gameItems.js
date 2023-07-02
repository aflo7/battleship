const shipLengths = {
  'carrier': 5,
  'battleship': 4,
  'destroyer': 3,
  'submarine': 3,
  'patrolBoat': 2
}
const ships = ['carrier',
  'battleship',
  'destroyer',
  'submarine',
  'patrolBoat']

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

export { shipLengths, ships, generateCoordinates }