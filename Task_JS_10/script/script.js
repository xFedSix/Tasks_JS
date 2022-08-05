const header = document.querySelector("header");
window.addEventListener("scroll", function (e) {
  const scrollFromTop = document.querySelector("html").scrollTop;
<<<<<<< HEAD
  header.style.background =
    scrollFromTop > 0 ? "red" : "";
      header.style.transition  ="all 2s";
=======
  header.style.background = scrollFromTop > 0 ? "red" : "";
  header.style.transition = "all 2s";
>>>>>>> 613839d4fdd2bc307e1bb36dfa2af7bb26d6ff66
});
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const submit = document.getElementById("submit");
const checked = document.getElementById("checkbox");
const form = document.getElementsByClassName("form");

button1.addEventListener("click", (e) => {
  addClassBtn1();
});
button2.addEventListener("click", (e) => {
  addClassBtn2();
});
function addClassBtn1() {
  if (button1.classList != "active" || button2.classList == "active") {
    button1.classList.add("active");
    button1.style.backgroundColor = "greenyellow";
    button2.classList.remove("active");
    button2.style.backgroundColor = "";
  }
}
function addClassBtn2() {
  if (button2.classList != "active" || button1.classList == "active") {
    button2.classList.add("active");
    button2.style.backgroundColor = "greenyellow";
    button1.classList.remove("active");
    button1.style.backgroundColor = "";
  }
}
checked.addEventListener("click", (e) => {
  checkboxCheck();
});
function checkboxCheck(e) {
  if (checked.checked) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
}
const url = "https://jsonplaceholder.typicode.com/todos/1";

submit.addEventListener("click", (e) => {
  insertAdjacentHTML();
});
function insertAdjacentHTML() {
  document.body.insertAdjacentHTML("beforeend", `<form id="form2"></form>`);
  getData();
  async function getData() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const dataToStr = JSON.stringify(data);
      // form.innerHTML = dataStr;
      const insert = document.getElementById("form2");
      insert.insertAdjacentText("afterBegin", dataToStr);
      // return data;
    } catch (error) {}
  }
}
