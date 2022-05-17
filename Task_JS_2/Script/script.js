// Задание 1!!!
// Ответ: a=5, b=1, c=5, d=0


// Задание 2!!!
// Ответ: e=5, f=4, x=6, y=5


// Задание 3_1!!!

// let champions = prompt('Чемпиона за какой год вы хотите узнать?');
// if (champions < 2011){
//     console.log('Статистика еще не велась');
// }
// if (champions == 2022) {
//     console.log('Сезон еще идет');
// }
// if (champions > 2022) {
//     console.log ('Все лучшее впереди!');
// }
// if (champions == 2015) {
//     console.log('Челси');
// }
// else if (champions == 2017) {
//     console.log('Челси');
// }
// if (champions == 2012) {
//     console.log('Манчестер Сити');
// }else if (champions == 2014) {
//     console.log('Манчестер Сити');
// }else if (champions == 2018) {
//     console.log('Манчестер Сити');
// }else if (champions == 2019) {
//     console.log('Манчестер Сити');
// }else if (champions == 2021) {
//     console.log('Манчестер Сити');
// }
// if (champions == 2011) {
//     console.log('Манчестер Юнайтед');
// }else if (champions == 2013) {
//     console.log('Манчестер Юнайтед');
// }
// if (champions == 2020) {
//     console.log('Ливерпуль');
// }
// if (champions == 2016) {
//     console.log('Лестер Сити');
// }


// Задание 3_2!!!

// let champions = +prompt('Чемпиона за какой год вы хотите узнать?');

// let result = (champions < 2011) ? 'Статистика еще не велась' :
//     (champions == 2022) ? 'Сезон еще идет' :
//     (champions > 2022) ? 'Все лучшее впереди!' :
//     (champions == 2015) ? 'Челси' :
//         (champions == 2017 ) ? 'Челси' :
//     (champions == 2012) ? 'Манчестер Сити' :
//         (champions == 2014) ? 'Манчестер Сити' :
//             (champions == 2018) ? 'Манчестер Сити' :
//                 (champions == 2019) ? 'Манчестер Сити' :
//                     (champions ==2021) ? 'Манчестер Сити' : 
//     (champions == 2011) ? 'Манчестер Юнайтед' :
//         (champions == 2013) ? 'Манчестер Юнайтед' :
//     (champions == 2020) ? 'Ливерпуль' :
//     (champions == 2016) ? 'Лестер Сити' : '';

// console.log(result);

// Задание 3_3!!!

// let champions = +prompt('Чемпиона за какой год вы хотите узнать?');

// switch (true) {
//     case (champions < 2011):
//         console.log('Статистика еще не велась');
//         break;
//     case 2022:
//         console.log('Сезон еще идет');
//         break;
//     case (champions > 2022):
//         console.log('Все лучшее впереди!');
//         break;
//     case 2015: case 2017:
//         console.log('Челси');
//         break;
//     case 2012: case 2014: case 2018: case 2019: case 2021:
//         console.log('Манчестер Сити');
//         break;
//     case 2011: case 2013:
//         console.log('Манчестер Юнайтед');
//         break;
//     case 2020:
//         console.log('Ливерпуль');
//         break;
//     case 2016:
//         console.log('Лестер Сити');
//         break;
// }

// Задание 4!!!

// let login = prompt ('Введите Login');
// let password;

// if (login === null) {
//     alert('Отменено');
// }else if (login != 'Админ'){
//     alert(' Я вас не знаю');
// }else if (login == 'Админ'){
//     password = prompt ('Введите пароль');
// }
// if (password == null){
//     alert('Отменено');
// }else if (password === 'Я главный'){
//     alert('Здравствуйте');
// }else {
//     alert('Не верный пароль');
// }

// Задание 5!!!
// let x = 7
// for (x; x <= 15; x++) {
//     if (x === 12) break;
//     if (x % 2 == 0) continue;
//     console.log(x);
// }       
// console.log(x + '. Цикл прерван');

// Задание 6!!!

// let j = 0;
// while (j < 5){
//     console.log(`number ${j}!`);
//     j++;
// }

// Задание 7!!!
// let a = +prompt ('a=', '');
// let b = +prompt ('b=', '');
// function max (a, b){
//     return (a < b) ? b : a;
// }
// console.log (max (a, b));

// Задание 8!!!

let x = +prompt("x=", '');
let n = +prompt("n=", '');

function pow(x, n) {
    let result = x;

    for (let a = 1; a < n; a++) {
      result *= x;
}
    if (n > 0) {
         return result;
}
}
console.log( pow(x, n) );