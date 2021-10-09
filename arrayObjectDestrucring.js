let arr = [10, 20, 30, 40];

let [a1, ...endarr] = arr;
console.log(a1);
console.log(endarr);

let userInfo = {
  userName: "test",
  userId: 123,
  userSalary: 100000,
  address: {
    street: 4,
    city: "agra",
  },
};

let { userName: name, userId: id, address } = userInfo;
console.log(name, id, address.city);
