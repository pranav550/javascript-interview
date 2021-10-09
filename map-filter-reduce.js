x = [10, 20, 30, 40, 50];

//map
let newx = x.map((data, i, arr) => {
  return data + 100;
});

console.log(newx);

// filter

let newFilter = x.filter((data, i, arr) => {
  return data > 20;
});

console.log(newFilter);

//reduce--- it also return value

let newz = x.reduce((total, data, i, arr) => {
  console.log(total, data, i, arr);
  return total + data;
});

console.log(newz);
