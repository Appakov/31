
const text = document.querySelector('.text')
const btnVerify = document.querySelector('.btn-verify')
const verify = () => {
    const input = Number(document.querySelector('.input').value.trim())
    const randomNum = Math.floor(Math.random() * 100) + 1

    if (isNaN(input) || input < 1 || input > 100) {
        text.innerHTML = 'Нельзя вводить буквы и числа больше 100 и меньше 1 и пустоту';
    } else if (input < randomNum) {
        text.innerHTML = 'Загаданное число больше';
        text.style.color = 'green'
    } else if (input > randomNum) {
        text.innerHTML = 'Загаданное число меньше'
        text.style.color = 'red'
    } else {
        text.innerHTML = "Вы угадали"
    }
}

btnVerify.addEventListener('click', () => {
    verify()
})