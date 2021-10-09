let str = "this is improve file for improve project";

let reg1 = /improve/g; // globally
let reg2 = /improve/i; // case insensitive

//--------- exec-----------
// exec() will return an array for match or null for no match

let response = reg1.exec(str);
console.log(response);

response = reg1.exec(str);
console.log(response);

response = reg1.exec(str);
console.log(response);

// test() return true or false

let response1 = reg1.test(str);
console.log(response1);

// match() it will return an array or null
let response2 = str.match(reg1);
console.log(response2);

// search() return index for first match else -1
let response3 = str.search(reg1);
console.log(response3);

// replace() return new replaced string with all the replacement
let result = str.replace(reg1, "code improve");
console.log(result);
