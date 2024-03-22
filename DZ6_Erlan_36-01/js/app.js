const input = document.querySelector('.input')
const btnPlus = document.querySelector('.plus')
const btnMinus = document.querySelector('.minus')
const btnZero = document.querySelector('.zero')

const renderColor = () => {
  if (input.value > 0) {
    input.style.color = 'green'
  } else if (input.value < 0) {
    input.style.color = 'red'
  }
  else {
    input.style.color = 'grey'
  }
}

btnPlus.addEventListener('click', () => {
  input.value++
  renderColor()
})

btnMinus.addEventListener('click', () => {
  input.value--
  renderColor()
})

btnZero.addEventListener('click', () => {
  input.value = 0
  renderColor()
})

const bntRed = document.querySelector('.red-signal')
const textStop = document.querySelector('.stop')
const bntYellow = document.querySelector('.yellow-signal')
const getReady = document.querySelector('.getReady')
const bntGreen = document.querySelector('.green-signal')
const go = document.querySelector('.go')

bntRed.addEventListener('click', () => textStop.innerHTML = 'Стоп')
bntYellow.addEventListener('click', () => getReady.innerHTML = 'Готовься')
bntGreen.addEventListener('click', () => go.innerHTML = 'езжай')
