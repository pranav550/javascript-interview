arr = [10, 20, 30, 40, 50];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i], i);
}

// for of

for (let [i, a] of arr.entries()) {
  console.log(i, a);
}

let obj = {
  name: "code",
  lname: "improve",
  uid: "111",
};

for (let x in obj) {
  console.log(x, obj[x]);
}

for (let x in arr) {
  console.log(x, arr[x]);
}
