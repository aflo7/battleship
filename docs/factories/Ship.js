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

export default Ship