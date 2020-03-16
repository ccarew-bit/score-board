const main = () => {
  console.log('hello,world')
}

const calculateaddScore = addScoreAmount => {
  console.log(addScoreAmount + 'button clicked')
  const total = 'team-1-score' + 1
  const scoreTotal = parseFloat(total)
  console.log(scoreTotal)
}

const calculateMinusScore = minusScoreAmount => {
  console.log(addScoreAmount + 'button clicked')
  const total = 'team-1-score' - 1
  const scoreTotal = parseFloat(total)
  console.log(scoreTotal)
}

// const addOne = () => {
//   calculateaddScore()
// }

// const minusOne = () => {
//   calculateMinusScore()
// }

document.addEventListener('DOMContentLoaded', main)

document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', calculateaddScore)

document
  .querySelector('team-1-subtract-1-button')
  .addEventListener('click', calculateMinusScore)
