// Task_1

// let student = {
//     name: "Fiodar",
//     age: "43",
//     id: 1,
// }
// const arrStudent = Object.entries(student)
// console.log(arrStudent);
// const arrStudentMap = new Map (arrStudent);
// console.log(arrStudentMap);

// arrStudentMap
//     .set("isDriver", true)
//     .set("isMaried", true)

// console.log(arrStudentMap.has("name"));

// // Task_2


// for (let keys of arrStudentMap.keys()) {
//       console.log(keys);
// }
    
// for (let value of arrStudentMap.values()) {
//         console.log(value);
// }
// for (let entry of arrStudentMap.entries()) {
//       console.log(entry);
//     }    

// Task_3

// let amount= {
//     apple: 440,
//     burger: 316,
//     juice: 1120,
// }
// const arrAmount = 
// Object.fromEntries(
//     Object.entries(amount).map(([key,value]) => {
//     return [key, value / 2];
//     })
// )
// console.log(arrAmount);

// Task_4


// function sumAmount(obj) {
//     return Object.values(obj).reduce((acc, val) => acc + val, 0)
        
//     }
// console.log(sumAmount(arrAmount));

// Task_5
// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O", "маре"
// ];
// const set = new Set ();
// function newArr (...arr) {
//     strings.forEach(item => {
//         if (!arr.includes(item)) {
//           set.add(item);
//     }

// let arr = [... new Set(stringArr)];
   
// })}
// console.log(set);
// console.log(newArr(strings));

// Task_6

// const weather = 

// {
// "coord": {
// "lon": -122.08,
// "lat": 37.39
// },
// "weather": [
// {
// "id": 800,
// "main": "Clear",
// "description": "clear sky",
// "icon": "01d"
// }
// ],
// "base": "stations",
// "main": {
// "temp": 282.55,
// "feels_like": 281.86,
// "temp_min": 280.37,
// "temp_max": 284.26,
// "pressure": 1023,
// "humidity": 100
// },
// "visibility": 10000,
// "wind": {
// "speed": 1.5,
// "deg": 350
// },
// "clouds": {
// "all": 1
// },
// "dt": 1560350645,
// "sys": {
// "type": 1,
// "id": 5122,
// "message": 0.0139,
// "country": "US",
// "sunrise": 1560343627,
// "sunset": 1560396563
// },
// "timezone": -25200,
// "id": 420006353,
// "name": "Mountain View",
// "cod": 200
// }
// let jsonObj = JSON.stringify(weather);

// let cloneWeather = JSON.parse(jsonObj);

// Task_7

const time = 1654420481877;

const date = new Date (time);


function formatDate(date) {
    let d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear(),
        minutes = "" + d.getMinutes(),
        seconds = "" + d.getSeconds();

    if (month.length < 2) 
        month = "0" + month;
    if (day.length < 2) 
        day = "0" + day;

        return `${year}/${month}/${day} (${minutes}:${seconds})`
}
 
console.log(formatDate(time));




