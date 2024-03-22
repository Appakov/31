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
const bntYellow = document.querySelector('.yellow-signal')
const bntGreen = document.querySelector('.green-signal')

bntRed.addEventListener('click', ()=> alert('Стоп'))
bntYellow.addEventListener('click', ()=> alert('Готовься'))
bntGreen.addEventListener('click', ()=> alert('езжай'))
