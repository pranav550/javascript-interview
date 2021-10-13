// in normal function find arguments
// in arrow function can't find arguments

//in normal function can create a constructor
//in arrow function can't create a constructor

// in normal function access this
// in arrow function not access this

// if arrow function is 1 liner it is implicitly return

//case 1
// function add(x, y) {
//   console.log(arguments);
//   return x + y;
// }

// add(10, 15);

// const add1 = (x, y) => {
//   console.log(arguments);
//   return x + y;
// };

// add1(10, 15);

// case 2

// function Car(name) {
//   this.brand = name;
// }

// let carData = new Car("MAruti");
// console.log(carData);

// const Car1 = (name) => {
//   this.brand = name;
// };

// let carData1 = new Car1("MAruti");
// console.log(carData1);

// case 3

// let userInfo = {
//   name: "Code improve",
//   fullname() {
//     console.log(this.name);
//   },
// };

// userInfo.fullname();

// let userInfo1 = {
//   name: "Code improve",
//   fullname1: () => {
//     console.log("vvvvvvvv", this.name);
//   },
// };

// userInfo1.fullname1();

// case 4

function demo() {
  100;
}
console.log(demo());

const mask = () => {
  100;
};
console.log(mask());

const mask1 = () => 100;

console.log(mask1());
