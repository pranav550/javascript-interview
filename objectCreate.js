let obj = Object.create({
  id: "123",
  name: "test",
  email: "test@gmail.com",
});

// value come in prototype
console.log(obj); // not come
console.log(obj.name); // value come
