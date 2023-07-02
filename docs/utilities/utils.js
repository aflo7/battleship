function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function randomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export {sleep, randomIntBetween}