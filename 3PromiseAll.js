// response is coming even after error

let p1 = new Promise((resolve, reject) => {
  let sqldata = {
    id: 123,
    name: "test",
  };
  resolve(sqldata);
});
let p2 = new Promise((resolve, reject) => {
  let textmsg = "Hello";
  //resolve(textmsg);
  reject(new Error("Sms template"));
});
let p3 = new Promise((resolve, reject) => {
  let apidata = {
    statuscode: 200,
    data: 9090,
  };
  resolve(apidata);
});

Promise.all([
  p1.catch((err) => {
    return err;
  }),
  p2.catch((err) => {
    return err;
  }),
  p3.catch((err) => {
    return err;
  }),
])
  .then((data) => {
    console.log(data[0]);
    console.log(data[1]);
    console.log(data[2]);
  })
  .catch((err) => {
    console.log(err);
  });
