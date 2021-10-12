let arr = [12, 12, 13, 14, 18, 14];
console.log(arr);
//using includes

// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (!newArr.includes(arr[i])) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);

// using indexOf

// let newArray = arr.filter((item, index) => {
//   return arr.indexOf(item) === index;
// });
// console.log(newArray);

// using SET

let newArr = new Set(arr);

console.log(Array.from(newArr));
