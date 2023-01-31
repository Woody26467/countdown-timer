const slider = document.querySelector('#slider')
const timeLeftText = document.querySelector('#time-left')
const startCount = 5
let timeLeft = startCount

const timerId = setInterval(() => {
  timeLeft--
  timeLeftText.textContent = timeLeft
  if (timeLeft <= 0) {
    clearInterval(timerId)
    timeLeftText.textContent = 'FIN!'
  }
}, 1000)
