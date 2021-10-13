let type = "test";
let obj = {
  name: "code",
  last: "improve",
  [type]: "this is computed value",
  first_name: "Codes",
  first_email: "test@gmai.com",
};

console.log(obj.name);
console.log(obj[type]);
console.log(obj["first_name"]);
console.log(obj["first_email"]);
