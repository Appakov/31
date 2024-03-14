var tagsArray = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br']
var object = {}
for (var tagCount of tagsArray) {
    object.hasOwnProperty([tagCount]) ? object[tagCount] += 1 : object[tagCount] = 1
}
console.log(object);

// var arrayOne = [1, 2, 3, 45, 32, 56, 61, 23, 12, 2, 34, 5, 6, 3, 76, 67, 87, 76]
// var arrayTwo = [1, 45, 32, 3, 4, 2, 56, 76, 67, 87, 89, 8, 56, 54]

// var ourArray = arrayOne.filter(num => arrayTwo.includes(num))
// console.log(ourArray);


// var arrayNums = [2, -78, 45, 4, -7, -6, -10, 26, 30, 8]
// var sum = 0
// var filterNum = arrayNums.filter(num => {
//     var filtResult = num >= 0

//     return filtResult += sum
// })

// console.log(filterNum);

// var arrayNums = [2, -78, 45, 4, -7, -6, -10, 26, 30, 8,];
// var sum = 0;
// var count = 0;

// for (var arrayNum of arrayNums) {
//     if (arrayNum >= 0) {
//         sum += arrayNum
//         count++
//     }
// }
// var average = count > 0 ? sum / count : 0;
// console.log(`Среднее арифметическое положительных чисел: ${average}`);



// var arrayFilter = ['text', 'frontend', 'apple', 'Apple', 'C++', 'C#', 'C++'];
// var resultArray = arrayFilter.filter(elem => {
//     elem = elem.toLowerCase()
//     if (elem.includes('t') || elem.includes('a')) {
//         return elem
//     }
// })
// console.log(resultArray);