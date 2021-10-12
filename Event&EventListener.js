// event & event listener

function getAlert() {
  alert("hello");
}

function inputfn(obj) {
  console.log(obj.value);
}

function input1fn(obj) {
  console.log(obj.value);
}

// function homeAlert() {
//   alert("yes");
// }

// document.addEventListener("click", homeAlert);

document
  .getElementById("heading")
  .addEventListener("click", function headingFn() {
    alert("heading alert");
  });

document
  .getElementById("submit")
  .addEventListener("click", function headingFn(event) {
    alert("submit alert");
    event.preventDefault();
  });
