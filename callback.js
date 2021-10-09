// callback is a function pass as an argument as another function

function hrcall(dept, cb) {
  console.log(dept + " hr called");
  setTimeout(() => {
    cb();
  }, 2000);
}

function hrToDirector() {
  console.log("hr to director");
}

hrcall("Tech", hrToDirector);
