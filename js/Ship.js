export default function Ship(name, length) {

  function isSunk() {
    return length <= 0
  }
  function hit() {
    length -= 1
  }


  function getName() {
    return name
  }

  function getLength() {
    return length
  }


  return {
    getName, getLength, isSunk
  }

}