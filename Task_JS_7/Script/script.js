// Task_1

// async function loadJson(url) {
//     try { 
//     const response = await fetch(url);
//     {if (response.status == 200) {
//         return response.json();
//     }}    
//   }catch (err) {
//    alert(err);
//   }} 
// loadJson('no-such-user.json')


// Task_2

// async function getUrl(url) {
//     let request = await fetch(url);
//     let data = await request.json();
//     console.log(data);
// }

// getUrl('https://jsonplaceholder.typicode.com/todos/1');

// Task_3

// function Person (name, id, age) {
//     this. name = name,
//     this. id = id,
//     this. age = age
// }
// let person = new Person( "Fed", "Si", 43);
// console.log(`Hello from ${person.name} ${person.id} Age ${person.age}`);


// Task_4

// let car = {
//     brand: "Mutsubishi",
//     model: "Lancer"
// }
// let engine = {
//     capacity: "1.8L",
//     HP: 146
// }

// let carColor = {
//     color: "Black",
//     isMetalic: true
// }
// carColor.__proto__ = engine;
// engine.__proto__ = car;

// console.log(carColor);