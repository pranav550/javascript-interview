// map: map reeturn a new array
// foreach: it is iterating the array

let arr = [10, 20, 30, 40, 50];
console.log(arr);

arr.forEach((item, i) => {
  arr[i] = item + 2;
});

console.log(arr);

arr.map((item, i) => {
  arr[i] = item + 2;
  return arr[i];
});

console.log(arr);
