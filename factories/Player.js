import GameBoard from "./GameBoard"
function Player(name) {
  const gameBoard = GameBoard()


  function getName() {
    return name
  }

  function getGameBoard() {
    return gameBoard
  }

  return { getGameBoard, getName }

}

export default Player