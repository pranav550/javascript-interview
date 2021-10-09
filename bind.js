function username() {
  return "Name is " + this.fname + " " + this.lname;
}
nameObj = {
  fname: "ram",
  lname: "verma",
};

let result = username.bind(nameObj);

console.log(result());

let userInfo1 = {
  fname: "Code",
  lname: "Improve",
  uid: 123,
  "Email id": "test@gmail.com",
  fullname: function () {
    return this.fname + " " + this.lname;
  },
};

let output = userInfo1.fullname.bind(userInfo1);
console.log(output());
