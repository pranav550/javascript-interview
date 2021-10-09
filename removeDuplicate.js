let arr = [1, 4, 8, 2, 5, 2, 5];

// using set
// arr = [...new Set(arr)];
// console.log(arr);

// using indexOf
// arr = arr.filter((data, i) => {
//   if (arr.indexOf(data) == i) {
//     return data;
//   }
// });
//console.log(arr);

//using include
let arr1 = [];
arr.forEach((c) => {
  if (!arr1.includes(c)) {
    arr1.push(c);
  }
});

console.log(arr1);
