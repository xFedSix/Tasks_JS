// Task_1


// function isMozartHere(str) {
//     let lowerCase = str.toLowerCase();
    
//     return lowerCase.includes("mozart");
// }

// Task_2

// function showUppercaseFirstLetter(str) {
//     if (!str) return str;

//     return str[0].toUpperCase() + str.slice(1);
// }

// Task_3

// let harryPotterTeam = ["Albus", "Hermione", "Ronald", "Draco", "Neville"];

// let teamA = harryPotterTeam.filter((item) => {
// return item.includes("a");

// })
// let teamH = harryPotterTeam.filter((item) => {
//     return item.includes("H");
// })
// console.log(harryPotterTeam);
// console.log(teamA);
// console.log(teamH);

// Task_4!!!!!!!

// let arr = [6, 3, "ten", 1, true, "4"];

// let sumArr = [];
// arr.forEach((item) => {
//     sumArr.push((item) => item + item);

// })
// console.log(sumArr);
// let squareSumArr = arr.map {
//     return item ** 2;
// })

// console.log(multiplicationArr);

// Task_5

// let numArr = [1, 3, 5, 7, 9, 11];

// let squareArr = [];
// numArr.forEach((item) => {
// squareArr.push(item ** 2);
// });

// let numArr = [1, 3, 5, 7, 9, 11];

// let squareArr = numArr.map(item => {
//     return item ** 2;
// })

// Task_6

// let lorem = ("Роман «1984» наряду с такими произведениями, как «Мы» Евгения Замятина (1920), «О дивный новый мир» Олдоса Хаксли (1932) и «451 градус по Фаренгейту» Рэя Брэдбери (1953) считается одним из образцов антиутопии.");

// let subLorem = lorem.includes("451 градус по Фаренгейту"); {
//     if (subLorem === true);
//     subLorem =  ("451 градус по Фаренгейту");
// }

// console.log(lorem);
// console.log(subLorem);

// Task_7

// let students = [ 
// {name: 'Alexey', id: 123, marks : 9 }, 
// {name: 'Vitalik', id: 101, marks : 5 }, 
// {name: 'Tanya', id: 200, marks : 7 }, 
// {name: 'Sasha', id: 115, marks : 10 }
// ]
// let result = students.find((item) => {
//       return item.id === 101;
// });
// console.log(students);
// console.log(result);

// Task_8

// let students = [ {name: 'Alexey', id: 123, marks : 9 }, 
// {name: ' Vitalik', id: 101, marks : 5 }, 
// {name: 'Tanya ', id: 200, marks : 7 }, 
// {name: 'Sasha', id: 115, marks : 10 }
// ]
// let goodStudents = students.filter ((item) => {
//     return item.marks >= 7;
// });
// let upperCaseStudents = [];
// students.forEach((item) => {
//     upperCaseStudents.push(item.name.toLowerCase().trim());
// });
// console.log(goodStudents);
// console.log(upperCaseStudents);

// Task_9

// let javaScriptTypes = ["number", "null", "undefined", "string"];
// console.log(javaScriptTypes);
// // javaScriptTypes.splice(0, 0, "bigint", "boolean","object","symbol");
// // console.log(javaScriptTypes);
// // javaScriptTypes.concat(["bigint", "boolean","object","symbol"]);
// // console.log(javaScriptTypes);
// javaScriptTypes.push("bigint", "boolean","object","symbol");
// console.log(javaScriptTypes);

// Task_10

// let salary = [1000, 500, 1200, 230];
// salary.sort( (a, b) => a - b );

// console.log(salary);
// salary.reverse();
// console.log(salary);

// console.log(Array.isArray(salary));

// Task_11

// let serials = ["How i met your mom", "Friends", "Big bang theory"];
// let str = serials.join( );
// console.log(serials);
// console.log(str);


