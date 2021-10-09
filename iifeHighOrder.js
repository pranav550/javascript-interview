//IIFE="immediately invoked function expression"
// Higher Order Function = that  operate  on other function

//iife
(function getData(id, name) {
  console.log("get data called", id, name);
  return 1;
})(12, "test");

// higer order function

function getStudentInformation(batch) {
  if (batch == 2015) {
    return (name) => {
      return "School Topper name is " + name;
    };
  }
  if (batch == 2020) {
    return (name) => {
      return "University Topper name is " + name;
    };
  }
  if (batch == 2022) {
    return (name) => {
      return "Upsc Topper name is " + name;
    };
  }
}

let information = getStudentInformation(2022)("manoj");
console.log(information);
