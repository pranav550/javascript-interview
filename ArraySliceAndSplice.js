// slice() method return the selected item in a new array
// splice()

//          0   1   2   3
let arr = [12, 14, 16, 18];
//         -4  -3  -2  -1

let newArray = arr.slice(0, 4);
console.log(newArray);

// splice
//arr.splice(1, 2);
//console.log(arr);

//arr.splice(-3, 2);
//console.log(arr);

arr.splice(-3, 2, 100, 200);
console.log(arr);
