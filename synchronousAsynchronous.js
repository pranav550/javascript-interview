// synchronous

console.log("a1");
console.log("a2");
console.log("a3");
console.log("a4");

// asynchrouous

console.log("a4");
setTimeout(() => {
  console.log("a5");
});
console.log("a7");
console.log("a9");
