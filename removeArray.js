arr = [10, 12, 8, 3, 13];

//  array.pop   --1
//arr.pop();
//console.log(arr);

// arr.shift  --2
//arr.shift();
//console.log(arr);

// arr.splice  ---3
//arr.splice(2, 2); // position , no of element delete
//console.log(arr);

// using loop ---4
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 8) {
//     arr.splice(i, 1);
//   }
// }
// console.log(arr);

// using filter----5
arr = arr.filter((data) => {
  if (data != 8) {
    return data;
  }
});
console.log(arr);
