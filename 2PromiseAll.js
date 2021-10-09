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

Promise.all([p1, p2, p3])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
