// callback hell

// setTimeout(() => {
//   console.log("called to hr");
//   setTimeout(() => {
//     console.log("called to director");
//     setTimeout(() => {
//       console.log("information update");
//     }, 1000);
//   }, 2000);
// }, 2000);

// basic promise example

let promise1 = new Promise((resolve, reject) => {
  console.log("yes promise called");
  //   let obj = {
  //     uid: 1234,
  //     uname: "test",
  //   };
  //   resolve(obj);
  reject("something went wrong");
});

promise1
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

// hr example

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("called to hr");
    resolve("called to hr");
  }, 2000);
  //reject("something went wrong");
});
let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("yes hr to director");
    resolve("hr to director");
  }, 4000);
  //reject("something went wrong");
});

promise2
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
promise3
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

//promise all

let promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let result = {
      marks: "90%",
    };
    resolve(result);
  }, 2000);
});
let promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let account = {
      cash: 65,
    };
    resolve(account);
  }, 2000);
});

let promise6 = new Promise((resolve, reject) => {
  resolve("done");
});

Promise.all([promise4, promise5, promise6])
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  });
