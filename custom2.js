function getMarks() {
  let math = 80;
  return math;
}

let mymarks = getMarks();
console.log(mymarks);

const obj = {
  name: "ram",
  uid: 123,
  mathmarks: function score() {
    return 90;
  },
};

console.log(obj);
console.log(obj.mathmarks());
