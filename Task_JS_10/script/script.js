const header = document.querySelector("header");
window.addEventListener("scroll", function (e) {
  const scrollFromTop = document.querySelector("html").scrollTop;
  header.style.background =
    scrollFromTop > 0
      ? "red"
      : "";
      header.style.transition  ="all 2s";
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
  if (checked.checked != false) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
}
const url = "https://jsonplaceholder.typicode.com/";

submit.addEventListener("click", (e) => {
  insertAdjacentHTML();
});
function insertAdjacentHTML() {
  document.body.insertAdjacentHTML(
    "beforeend",
    `<form id="form2" name="some" class="form2" action="document.innerHtml = "getDate()""></form>`
  );
}
async function getData() {
  try {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    return data;
  } catch (error) {}
}

