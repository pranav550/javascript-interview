let userInfo = {
  fname: "Code",
  lname: "Improve",
  uid: 123,
  "Email id": "test@gmail.com",
  fullname: function () {
    return this.fname + " " + this.lname;
  },
};

console.log(userInfo["Email id"]);
console.log(userInfo.fullname());

let empDetail = {
  id: 101,
  name: "test",
  age: 12,
};

for (let data in empDetail) {
  console.log(data);
  console.log(empDetail[data]);
}

// convert object to array
console.log(Object.keys(empDetail));
console.log(Object.values(empDetail));

// call Apply Bind  start

let userInfo1 = {
  fname: "Code",
  lname: "Improve",
  uid: 123,
  "Email id": "test@gmail.com",
  fullname: function () {
    return this.fname + " " + this.lname;
  },
  info: function (id, text) {
    return "addresss XYZ " + this.fname + " id is " + id + " text is " + text;
  },
};

//call take two argument(object, values)
console.log(userInfo1.fullname());
console.log(userInfo1.fullname.call());
console.log(userInfo1.info());
console.log(userInfo1.info.call({ fname: "test" }, 12, "subject"));

//apply take two argument(object, array)
console.log(userInfo1.fullname());
console.log(userInfo1.fullname.apply());
console.log(userInfo1.info());
console.log(userInfo1.info.apply({ fname: "test" }, [12, "subject"]));

//bind take one argument(object)()and call this

function username() {
  return this.fname + " " + this.lname;
}

let nameObj = {
  fname: "ram",
  lname: "verma",
};

let nameCheck = username.bind(nameObj);
console.log(nameCheck());
