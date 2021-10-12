// local storage and session Storage

// session store only one tab
// locastorage store all the tab

// set
// localStorage.setItem("name", "codeimprove");
// localStorage.setItem("email", "test@gmail.com");
// let obj = {
//   uid: 123,
//   name: "test1",
//   email: "test1@gmail.com",
// };
// localStorage.setItem("objData", JSON.stringify(obj));
// let arr = [10, 20, 30, 40];
// localStorage.setItem("arrData", JSON.stringify(arr));

// get

console.log(localStorage.getItem("name"));
console.log(JSON.parse(localStorage.getItem("objData")));
console.log(JSON.parse(localStorage.getItem("arrData")));

localStorage.removeItem("name");
localStorage.clear();
