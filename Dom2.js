// children children nodes parent parent nodes

let data = document.getElementsByClassName("row");
console.log(data[0].children[1].children);
console.log(data[0].children[1].firstElementChild);
console.log(data[0].children[1].lastElementChild);
console.log(data[0].children[1].parentNode);
console.log(data[0].children[1].nextElementSibling);
console.log(data[0].children[1].previousElementSibling);
console.log(data[0].children[1].parentNode.nextElementSibling);
