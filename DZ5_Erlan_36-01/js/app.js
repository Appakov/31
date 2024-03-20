

// const tagsArray = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br']
// const object = {}
// for (var tagCount of tagsArray) {

//     if (object.hasOwnProperty([tagCount])) {
//         object[tagCount] += 1
//     } else {
//         object[tagCount] = 1
//     }
// }
// const transformation = Object.entries(object)
// transformation.sort((a, b) => b[1] - a[1])

// console.log(transformation);





// const filterBooks = (...books) => {
//     const booksWithTheLetterU = []
//     const otherBooks = []
//     for (let book of books) {
//         if (book.toLowerCase().includes('у')) {
//             booksWithTheLetterU.push(book);
//         } else {
//             otherBooks.push(book);
//         }
//     }
//     console.log(`Книги с буквой У: ${booksWithTheLetterU}`);
//     console.log(`Остальные книги: ${otherBooks}`);
// }
// filterBooks("Улисс", "Война и мир", "Гордость и предубеждение", "1984", "Три товарища", "Повесть о настоящем человеке");



// const courses = [
//     {
//         courseName: 'JavaScript',
//         students: [
//             { name: 'John', grades: [60, 55, 95] },
//             { name: 'Jack', grades: [59, 90, 95] }
//         ]
//     },
//     {
//         courseName: 'Python',
//         students: [
//             { name: 'Mark', grades: [78, 82, 80] },
//             { name: 'Alice', grades: [85, 88, 90] }
//         ]
//     }
// ];
// const result = courses.map(course => {
//     
//     const studentsWithAvgGrades = course.students.map(student => {
//         const averageGrade = student.grades.reduce((total, grade) => total + grade, 0) / student.grades.length;
//         return {
//             name: student.name,
//             averageGrade: averageGrade
//         };
//     });
//     return {
//         courseName: course.courseName,
//         students: studentsWithAvgGrades
//     };
// });

// console.log(result);
