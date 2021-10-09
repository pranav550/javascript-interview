// call by value use primitive data type

var x = 10;
var y = x;

y = 12;

console.log(x);
console.log(y);

// call by refrnce using non primitive data type

//case for object
let obj1 = {
  name: "test1",
  uid: 101,
  salary: 10000,
};

let obj2 = obj1;
obj2.name = "abhay";
obj2.uid = 100;

console.log(obj2);
console.log(obj1);

//case for array

let arr1 = [10, 20, 30];
arr2 = arr1;

arr2.push(55);
console.log(arr1);
console.log(arr2);
