console.log(document);

let ele = document.getElementById("heading");
console.log(ele.classList);
console.log(ele.className);
console.log(ele.innerHTML);
console.log(ele.innerText);
// modify text
ele.innerText = "new data";
console.log(ele.innerText);

let eleCls = document.getElementsByClassName("domclr");
console.log(eleCls[0]);
console.log(eleCls[0].innerHTML);

let elmTag = document.getElementsByTagName("h1");
console.log(elmTag[0].innerText);
elmTag[0].innerHTML = "<h1>Hello</h1>";
elmTag[0].style.color = "red";

let doc2 = document.querySelector("#test");
console.log(doc2.innerText);

let data = document.getElementsByTagName("li");
console.log(data);

let newData = Array.from(data);
console.log(newData);

newData.forEach((result, index) => {
  let mycolor = index % 2 == 0 ? "red" : "green";
  result.style.color = mycolor;
});

let names = document.querySelector("#firstname");
console.log(names.value);
