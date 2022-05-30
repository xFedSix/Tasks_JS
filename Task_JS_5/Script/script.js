// Task_1

// let students = [ 
// {name: 'Alexey', id: 123, marks : 9 }, 
// {name: 'Vitalik', id: 101, marks : 5 }, 
// {name: 'Tanya', id: 200, marks : 7 }, 
// {name: 'Sasha', id: 115, marks : 10 },
// ];

// let getBadStudents = [];

// students.forEach(item =>{
//     if (item.marks < 8) getBadStudents.push(item.name);
// });
// console.log(getBadStudents);

// let getBadStudentsReduce = students.reduce((acc, item) => {
//     if (item.marks < 8) acc.push(item.name);
//     return acc;
// },[]);
// console.log(getBadStudentsReduce);

// Task_2
// function getAverage(students){
// let sum = 0;
// let count = 0;
//   students.forEach(item => {
//     if (item.id > 120)
//     sum += item.marks, count++;
//   });
//   return sum/count;
  
// };
// console.log(getAverage(students));


// let count = 0;
// let averageMarks = students.reduce((acc, item) => {
    
//     if (item.id > 120) {
//         acc += item.marks, count++;
//         return acc/count;
//       } else {
//         return acc;
//       };
//     },0);
//console.log(averageMarks);


// Task_3

// let students = [ 
//     {name: 'Alexey', id: 123, marks : 9 }, 
//     {name: 'Vitalik', id: 101, marks : 5 }, 
//     {name: 'Tanya', id: 200, marks : 7 }, 
//     {name: 'Sasha', id: 115, marks : 10 },
//     {name: 'Kolya', id: 440, marks : 5 }, 
//     {name: 'Dima', id: 170, marks : 7 },
//     ];

// let filterStudents = students.filter(item => {
//     return (item.marks > 5 && item.id < 200);
// }).map(item => item.name);
// let result = filterStudents;
// console.log(result);
