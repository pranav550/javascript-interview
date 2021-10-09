try {
  x = 10;
  getList();
  console.log(x);
} catch (err) {
  console.log(err);
}

try {
  x = 10;
  if (x == 10) throw "Not Valid";
  console.log(x);
} catch (err) {
  console.log(err);
} finally {
  console.log("always called");
}
