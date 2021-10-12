// insert append remove replace

// basic 1

// let element = document.createElement("h2");
// console.log(element);

// let element2 = document.createTextNode("my heading");
// console.log(element2);

// element.appendChild(element2);
// console.log(element);

// let phead = document.getElementById("test");
// phead.appendChild(element);

//basic 2

// let li = document.createElement("li");
// let txt = document.createTextNode("test language");
// li.appendChild(txt);

// let lang = document.getElementById("language");
// console.log(lang);
// //lang.appendChild(li);
// lang.insertBefore(li, lang.children[0]);

// short way syntax

//1)
// let lang = document.getElementById("language");
// let liHTML = "<li>Mongo + Node</li>";
//lang.insertAdjacentHTML("afterbegin", liHTML);

//2)
// let lang = document.getElementById("language");
// let li = document.createElement("li");
// let txt = document.createTextNode("JAVA + Angular");
// li.appendChild(txt);
// lang.insertAdjacentElement("afterbegin", li);

//3)
let lang = document.getElementById("language");
let liHTML = "<li>Mongo + Node</li>";
lang.insertAdjacentText("afterbegin", liHTML);

// replace

let li = document.createElement("li");
let txt = document.createTextNode("testdddddd language");
li.appendChild(txt);

lang.replaceChild(li, lang.childNodes[0]);

// remove

lang.removeChild(lang.childNodes[2]);
