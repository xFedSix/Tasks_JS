// Task_1
const button1 = document.querySelector(`.button1`);

// button1.onclick = function() {
//   console.log ("Задание 1 выполнено");
// };

// function showInConsole() {
//   console.log ("Задание 1 выполнено");
// };
// button1.onclick = showInConsole;

button1.addEventListener("click", function() {
  console.log ("Задание 1 выполнено");
})

// Task_2

const button2 = addEventListener("dblclick", function() {
  console.log ("Задание 2 выполнено");
})

// Task_3



const button3 = document.querySelector(`.button3`);
function showConsole(event) {
  console.log(event.clientX, event.clientY);
}
button3.addEventListener("mouseenter", showConsole);

// Task_4


const scroll = document.querySelector(".scroll")
scroll.addEventListener("scroll", function(event) {
  console.log(`${scrollX}px, ${scrollY}px`);
});
