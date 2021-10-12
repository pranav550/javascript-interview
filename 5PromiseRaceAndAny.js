// promise race is settled as soon as any of the promises you feed it settle, whether they are fullfilled and rejected
// promise any is settle as soon as any of the promises you feed it is full filled or they are all rejected

// race : jo sabse phele call hoga vo show karega and if error phele aa raha hoga use bhi show karega

// any : jo sabse phele call hoga vo show karega and if error phele aa raha hoga use show nahi karega seccond wal show karega. if all are rejected then all promise are rejected

//case 1

// var promises1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Data called 1");
//   }, 2000);
// });
// var promises2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Data called 2");
//   }, 1000);
// });
// var promises3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Data called 3");
//   }, 3000);
// });

// const promises = [promises1, promises2, promises3];

// Promise.race(promises)
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//  case 2

// var promises1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Data called 1");
//   }, 2000);
// });
// var promises2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //resolve("Data called 2");
//     reject(new Error("any error"));
//   }, 1000);
// });
// var promises3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Data called 3");
//   }, 3000);
// });

// const promises = [promises1, promises2, promises3];

// Promise.race(promises)
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// Promise.any(promises)
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//  case 3

var promises1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //  resolve("Data called 1");
    reject(new Error("any error2"));
  }, 2000);
});
var promises2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve("Data called 2");
    reject(new Error("any error1"));
  }, 1000);
});
var promises3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //  resolve("Data called 3");
    reject(new Error("any error3"));
  }, 3000);
});

const promises = [promises1, promises2, promises3];

Promise.race(promises)
  .then((values) => {
    console.log(values);
  })
  .catch((e) => {
    console.log(e);
  });

Promise.any(promises)
  .then((values) => {
    console.log(values);
  })
  .catch((e) => {
    console.log(e);
  });
