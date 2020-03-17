const main = () => {
  console.log('hello,world')
}

const calculateaddScoreone = addScoreAmount => {
  console.log(addScoreAmount + 'button clicked')
  const teamOneScore = document.querySelector('.team-1-score').textContent
  let total = parseFloat(teamOneScore) + 1
  if (total >= 21) {
    total = 21
  }
  console.log(total)
  document.querySelector('.team-1-score').textContent = total
}

const calculateMinusScoreone = minusScoreAmount => {
  console.log(minusScoreAmount + 'button clicked')
  const teamOneScore = document.querySelector('.team-1-score').textContent
  let total = parseFloat(teamOneScore) - 1
  if (total <= 0) {
    total = 0
  }
  console.log(total)
  document.querySelector('.team-1-score').textContent = total
}

const calculateaddScoretwo = addScoreAmount => {
  console.log(addScoreAmount + 'button clicked')
  const teamtwoScore = document.querySelector('.team-2-score').textContent
  let total = parseFloat(teamtwoScore) + 1
  if (total >= 21) {
    total = 21
  }
  console.log(total)
  document.querySelector('.team-2-score').textContent = total
}

const calculateMinusScoretwo = minusScoreAmount => {
  console.log(minusScoreAmount + 'button clicked')
  const teamtwoScore = document.querySelector('.team-2-score').textContent
  let total = parseFloat(teamtwoScore) - 1
  if (total <= 0) {
    total = 0
  }
  console.log(total)
  document.querySelector('.team-2-score').textContent = total
}

const teamOneName = teamOne => {
  console.log(teamOne + 'button clicked')
  const newName = document.querySelector('.team-1-input').value
  console.log(newName)
  document.querySelector('.team-1-name').textContent = newName
}

const teamTwoName = teamOne => {
  console.log(teamOne + 'button clicked')
  const newName = document.querySelector('.team-2-input').value
  console.log(newName)
  document.querySelector('.team-2-name').textContent = newName
}

document.addEventListener('DOMContentLoaded', main)

document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', calculateaddScoreone)

document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', calculateMinusScoreone)

document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', calculateaddScoretwo)

document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', calculateMinusScoretwo)

document
  .querySelector('.update-team-1-name')
  .addEventListener('click', teamOneName)

document
  .querySelector('.update-team-2-name')
  .addEventListener('click', teamTwoName)
