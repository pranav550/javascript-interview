// when a function instead of taking all argument at one time, take the first one and return a new function and take the second one return a new function

// function sum(x, y, z) {
//   return x + y + z;
// }
// console.log(sum(5, 10, 15));

function sum(x) {
  return (y) => {
    return (z) => {
      return x + y + z;
    };
  };
}

let data = sum(5)(10)(15);
console.log(data);
