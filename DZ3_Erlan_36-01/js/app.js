// var numArray = [34, 54, 1, 23, 678, 72, 9, 10, 5, 89, 900]
// var minNum = numArray[0]
// var maxNum = numArray[0]
// for (var i = 1; i < numArray.length; i++) {
//     if (numArray[i] < minNum) {
//         minNum = numArray[i]
//     } else if (numArray[i] > maxNum) {
//         maxNum = numArray[i]
//     }
// }
// console.log(`Наименьшее число ${minNum}`);
// console.log(`Наибольшее число ${maxNum}`);

// var enterNum = Number(prompt('Введите число для генерации таблицы умножения:').trim())

// for (var i = 1; i <= 10; i++) {
//     var result = enterNum * i
//     i !== 0 ? console.log(`${enterNum} * ${i}  = ${result}`) : console.error('нельзя вводить пустоту, выше 10 и и меньше 1, текст');
// }


// var enterNum = Number(prompt('Введите число для генерации таблицы умножения:').trim());

// for (var i = 1; i <= 10; i++) {
//     if (enterNum !== 0 && !isNaN(enterNum) && enterNum <= 10) {
//         var result = enterNum * i;
//         console.log(`${enterNum} * ${i} = ${result}`);
//     } else {
//         console.log('Нельзя вводить пустоту, вводить 0 и выше 10');
//     }
// }

var enterWord = prompt('Введите слово').trim()
if (isNaN(enterWord) && enterWord !== '') {

    function renderReturn(inputString) {

        var allVowels = 'аяуюоеёэиыАЯУЮОЕЁЭИЫ'
        var count = 0
        for (var i = 0; i < inputString.length; i++) {
            if (allVowels.includes(inputString[i])) {
                count++
            }
        }
        return count
    }
    var str = renderReturn(enterWord)
    console.log(`Количество гласных букв в слове: ${str}`)
} else {
    console.error('Нельзя вводить цифры и пустоту или другие недопустимые символы.');
}
