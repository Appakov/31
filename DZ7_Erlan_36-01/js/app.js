
// const randomNumber = Math.floor(Math.random() * 100)
// console.log(randomNumber);

// Реализуйте мини-игру:
// 1) Сверстайте инпут, куда пользователь будет вводить цифры от 1 до 100, также кнопку "Проверить". При клике на кнопку, программа должна сравнивать число, которую ввел пользователь и число, которую сгенерировала сама программа. Если число от пользователя будет меньше, чем сгенерированное число, то выведите на экране подсказу "Загаданное число больше", также наоборот.
// 2) Для генерации рандомных чисел используйте то, что на уроке показала 
// 3) Сделайте проверку:
// - в инпут нельзя вводить буквы и числа больше 100 и меньше 1
// - если введенное число меньше загаданного, то выводить текст зеленым цветом (Загаданное число больше)
// - если введенное число больше загаданного, то выводить текст красным цветом (Загаданное число меньше)
// - если пользователь отгадал загаданное число, то вывести текст "Вы угадали"

// const input = Number(document.querySelector('.input').value.trim())
// const text = document.querySelector('.text')
// const btnVerify = document.querySelector('.btn-verify')
// const randomNum = Math.floor(Math.random() * 100) + 1
// const verify = () => {
//     if (!isNaN(input) || input < 1 || input > 100) {
//         text.innerHTML = 'Нельзя вводить буквы и числа больше 100 и меньше 1 и пустоту';
//     } else if (input < randomNum) {
//         text.innerHTML = 'Загаданное число больше';
//         text.style.color = 'green'
//     } else if (input > randomNum) {
//         text.innerHTML = 'Загаданное число меньше'
//         text.style.color = 'red'
//     }
//     else {
//         text.innerHTML = "Вы угадали"
//     }
// }

// btnVerify.addEventListener('click', () => {
//     verify()
// })

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