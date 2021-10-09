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

// sara data de do with error
Promise.allSettled([p1, p2, p3])
  .then((data) => {
    console.log(data);
    console.log(data[0].value);
    console.log(data[1]);
    console.log(data[2].value);
  })
  .catch((err) => {
    console.log(err);
  });

// sabse pphele wala data de do
Promise.race([p1, p2, p3]).then((data) => {
  console.log(data);
});
