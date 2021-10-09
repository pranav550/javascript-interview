let arr = [1, 4, 8, 2, 5, 2, 5];

arr = arr.filter((c, index) => {
  return arr.indexOf(c) !== index;
});

console.log(arr);
