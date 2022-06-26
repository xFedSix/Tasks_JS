// Task1_1

class Developer {
  constructor(options) {
    this.name = options.name,
    this.language = options.language;
  }
  message() {
    console.log(this.name, "Работает с ", this.language);
  }
}
const user = new Developer({name: "Ivan", language: "JS"});

class Student extends Developer {
  constructor(options) {
    super(options),
    this.group = options.group
  }
}
const userStudent = new Student({name: "Petia", language: "Java", group: 5});

// Task_2
String.prototype.addDot = function() {
  return `${this}.`;
}
console.log("Zxccvv".addDot());