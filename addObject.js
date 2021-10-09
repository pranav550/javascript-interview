// first way
let originalObj = { A: "1", B: "2" };
let originalObj1 = { ...originalObj, C: "3" };
originalObj = { ...originalObj1, D: "4" };

console.log(originalObj);

// second way
var data = {
  A: 1,
  B: 2,
  C: 3,
};

data["D"] = 4;

console.log(data);
