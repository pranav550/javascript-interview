// bubbling : child to parent
// capturing: parent to child
// stop propgation stop unneassy calls
// prevent default button, anchor href, submit to stop

let mainDiv = document.querySelector("div");
let ul = document.querySelector("ul");
let li = document.querySelector("#node");

// bubbling

// mainDiv.addEventListener("click", () => {
//   console.log("main div called");
// });
// ul.addEventListener("click", () => {
//   console.log("ul called");
// });
// li.addEventListener("click", () => {
//   console.log("li called");
// });

// capturing

// mainDiv.addEventListener(
//   "click",
//   () => {
//     console.log("main div called");
//   },
//   true
// );
// ul.addEventListener(
//   "click",
//   () => {
//     console.log("ul called");
//   },
//   true
// );
// li.addEventListener(
//   "click",
//   () => {
//     console.log("li called");
//   },
//   true
// );

// stop propogation

// mainDiv.addEventListener(
//   "click",
//   () => {
//     console.log("main div called");
//   },
//   false
// );
// ul.addEventListener(
//   "click",
//   () => {
//     console.log("ul called");
//   },
//   false
// );
// li.addEventListener(
//   "click",
//   (event) => {
//     event.stopPropagation();
//     console.log("li called");
//   },
//   false
// );

// stopImmediatePropogation

li.addEventListener(
  "click",
  (event) => {
    event.stopImmediatePropagation();
    console.log("li called 1");
  },
  false
);
li.addEventListener(
  "click",
  (event) => {
    //event.stopPropagation();
    console.log("li called 2");
  },
  false
);
li.addEventListener(
  "click",
  (event) => {
    //event.stopPropagation();
    console.log("li called 3");
  },
  false
);
