// Task_1!!!!!!!!!!!!!!!


// function howManyDays(month) {
// let days;
//     switch (month){
//     case 1: case 3: case 5: case 7: case 8: case 10: case 12: days = 31;
//     break;
//     case 4: case 6: case 9: case 11 : days = 30;
//     break;
//     case 2 : days = 28;
//     break;
//     }
//     return days;
//   }
//   let result = howManyDays(5);
//   console.log(result);


// Task_2

// function checkNumber(a, b){
//     let c = +prompt("Введите число A");
//     let d = +prompt("Введите число B");
//     let result = ((a*b) % 2 == 0) ? c: d;
//     console.log(result);
// }
// checkNumber();

// Task_3

// let student ={
//     name: "Ivan",
//     surName: "Pupkin",
//     age: 19,
//     course: "English class",
//     levelOfLanguage: "B1",
// }
// delete student.levelOfLanguage;

// console.log(student);

// Task_4

// let book = {
//     numberOfPages : 545,
//     cover  : true,
//     isTheAuthorAlive  : false, 
//     isBestseller  : true,
//     booksEditions  : 20000000,
// }
// for (let result in book){
//     if (typeof book[result] == "boolean"){
//         console.log(result);
// }
// }


// Task_5

// let train = {
//     locomotiveLength : 25,
//     totalCoachCars: 4,
//     coachLength : 15,
// };
// lengthOfTrain();
// function lengthOfTrain(a, b, c){
// a = train.locomotiveLength;
// b = train.totalCoachCars;
// c = train.coachLength;
// let result = (a+(b*c));
// return result;

// }
// console.log(lengthOfTrain);

// Task_6

// let myCar = {
//     model : "Mitsubishi",
//     carColor : "White",
//     quontityOfDoors : 5,
//     horsePower : 146,
//     engineСapacity : 2.0,
//     еransmission : "Automatic",
// }
// let cloneMyCar = {};
// for (let keys in myCar){
//     cloneMyCar[keys] = myCar[keys];
// }
// let cloneMyCar2 = Object.assign({}, myCar);

// console.log(myCar);
// console.log(cloneMyCar);
// console.log(cloneMyCar2);

// Task_7

// let animalObj = {
//     name: "cat",
//     legs: 4,
//     color: "black"
// }
// function animal(obj) { 
//     console.log (`This ${animalObj.color} ${animalObj.name} has ${animalObj.legs} legs`);
    

// }
// animal();

// Task_8

// multiplication();
// function multiplication(){
//     let a = +prompt("Введите первое число");
//     let b = +prompt("Введите второе число");
//     let c = (a*b);
//     // console.log(c)
//     callbackEven(c)
//     function callbackEven(c){
//         if (c === 0){
//             console.log("0");
//         }  else if
//         (c % 2 === 0 ){
//         console.log("Четное число:" + c);
//         }else 
//         callbackOdd(c)
//         function callbackOdd(c){
//               if (c % 1 === 0){
//                 console.log("Нечетное число:" + c); 
//             }
                
//         }
//     }
// } 


// Task_9

// let student = {
//     name : "Ivan",
//     surName : "Pupkin",
//     numberOfGroup : 5,
//     representation (){
//         console.log(`Это студент ${this.name} ${this.surName} из группы ${this.numberOfGroup}`)
//     }

// }
// student.representation();

// Task_10

let animal = new Animal();

function Animal(){
    this.animal = prompt ("Какое у вас животное");
    this.name = prompt ("Имя животного");
    this.howManyPaws = prompt ("Сколько лап?");
    this.isPredator = prompt ("Это хищник?");

}

console.log(animal);


