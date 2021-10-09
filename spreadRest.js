//object
//case 1
let userInfo = {
  firstname: "codeImprove",
  batch: 2021,
};

let otherInfo = {
  department: "it",
};

//case 2
let finalObj = Object.assign(userInfo, otherInfo);
console.log(finalObj);

let finalObj2 = {
  ...userInfo,
  ...otherInfo,
};
console.log(finalObj2);

//  array
//case 1

let arr1 = [10, 12];

let arr2 = [20, 21];

let finalArray = arr1.concat(arr2);
console.log(finalArray);

// case 2

let arr3 = [10, 12];

let arr4 = [20, 21];

let finalArray2 = [...arr3, ...arr4];
console.log(finalArray2);

// Rest
let total = 0;
function Marks(m1, ...result) {
  console.log(result);
  console.log(m1);
  for (let i = 0; i < result.length; i++) {
    total += result[i];
  }
  console.log(total);
}

Marks(90, 97, 60, 96, 97);
