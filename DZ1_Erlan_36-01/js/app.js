var firstNum = Number(prompt('Введите первое число'))
var secondNum = Number(prompt('Введите второе число'))

var begin = prompt('Что вы хотите сделать?')

if (begin === '+') {
    console.log(firstNum + secondNum);
} else if (begin === '-') {
    console.log(firstNum - secondNum);
} else if (begin === '*') {
    console.log(firstNum * secondNum);
} else if ((firstNum <= 0 || secondNum <= 0) && begin === '/') {
    console.error('Не делить отрицательные числа и на ноль')
} else if (begin === '/') {
    console.log(firstNum / secondNum);
}else{
    alert('Введите корректные данные')
}

// var seasonYear = prompt('Введите месяц').toLowerCase()
// if (seasonYear === 'декабрь' || seasonYear === 'январь' || seasonYear === 'февраль') {
//     console.log('Зима')
// } else if (seasonYear === 'март' || seasonYear === 'апрель' || seasonYear === 'май') {
//     console.log('Весна');
// } else if (seasonYear === 'июнь' || seasonYear === 'июль' || seasonYear === 'август') {
//     console.log('Лето');
// } else if (seasonYear === 'сентябрь' || seasonYear === 'октябрь' || seasonYear === 'ноябрь') {
//     console.log('Осень');
// } else {
//     console.error('Введите корректный месяц');
// }