// Task_1

// function calcSum(a, b, ...other) {
//     console.log(other);
//     return a + b;
// }
// console.log(calcSum(1, 2, 5, 8, 5, 4));

// Task_2

// let drivers = ["Dominic", "Brian", "Letty", "Roman"];
// let antagonists = ["Deckard", "Luke"];
// let family = [];
// let family = [...drivers, ...antagonists];

// let family = [drivers.slice(), antagonists.slice()];

// family.concat = [drivers, antagonists];

// family.push.apply(family, [...drivers, ...antagonists]);

// family.splice(0, 0, ...drivers, ...antagonists);

// drivers.forEach((item) => {
//     family.push(item);
// });
// antagonists.forEach((item) => {
//     family.push(item);
// });
    
// console.log(family);

// Task_3

// let cars = ["Jeep", "Jeep", "Kia", "BMW", "BMW", "BMW", "Renault"];
// let unique = [...new Set(cars)];
// console.log(unique);

// Task_4

// let arr = myCountry("Belarus");
// let arr2 = [];
// function myCountry(country) {
//     return function myCity(city) {
//         return arr2.push(country, city)
//     }
// };
// arr("minsk");
// console.log (arr2);

// Task_5!!!!!!!


// function printNumbers(from, to) {
//     let timer = from;
//     setTimeout(function number() {
//     if (timer <= to) {
//     setTimeout(number, 1000);
//     console.log(timer);
// }timer++
// })};

// function printNumbers(from, to) {
//     let timer = from;
//     let timerID = setInterval(function() {
//     if (timer <= to) {
//     setInterval(timerID);
//     console.log(timer);
// }timer++
// },1000)};
// printNumbers(1,10);

// Task_6

// let timer = setInterval(() => console.log("message"), 3000);
// setTimeout(() => { clearInterval(timer);}, 10000);

// Task_7

// 1, 6, 4, 5, 3.

// Сам правильно не ответил, но потом разобрался


// Task_8

// let jordan = {
//     name: "Michael",
//     age: 59,
//     info: function() {
//         console.log(`${this.name}`);
//     }
//     }
    
// let messi = {
//     name: "Lionel",
//     age: 34,
//     }


// jordan.info();
// jordan.info.call(messi);