//Very Easy

function excersise(activity) {
  return function () {
    return "Todays exercise:" + activity;
  };
}

var run = excersise("running");
console.log(run());

var swim = excersise("swimming");
console.log(swim());

//Easy
function sharePizza(numOfPeople) {
  const numOfSlices = 8;
  return numOfSlices / numOfPeople;
}

console.log(sharePizza(2));

// Hard
function createPerson(name, age) {
  let pii = {
    name: "John Doe",
    ssn: 123 - 45 - 6789,
  };

  return {
    getName: function () {
      return pii.name;
    },
  };
}

let person = createPerson("John Doe", "123-45-6789");
console.log(person.getName());
console.log(person.ssn);

// Very Hard

class Person {
  // busy =;
  constructor(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
  }
  exercise() {
    console.log("Running is Fun! ---- said noone ever");
  }
  fetchJob() {
    console.log(this.name + " is a " + this.job);
  }
}
class Programmer extends Person {
  busy = true;

  constructor(name, job, age) {
    super(name, job, age);
    this.languages = this.languages;
  }
  completeTask() {
    if (this.busy) {
      console.log("The Programmer is Busy ");
    } else {
      console.log("The Programmer is free");
    }
  }

  offerNewTask() {
    if (this.busy) {
      console.log("The Programmer cant take new task ");
    } else {
      console.log("The Programmer is free");
    }
  }
}

let john = new Person("John Doe", "student", 23);
let ben = new Programmer("Ben Sheppard", "Developer", 42);

console.log(john);
console.log(ben);

john.exercise();
john.fetchJob();
ben.completeTask();
ben.offerNewTask();
