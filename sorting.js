//assending order number
const points = [40, 100, 1, 5, 25, 10];
// points.sort(function (a, b) {
//   return a - b;
// });

// console.log(points);
//desending order number
points.sort(function (a, b) {
  return b - a;
});

console.log(points);

const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

cars.sort(function (a, b) {
  return a.year - b.year;
});

console.log(cars);

//assending order string
// cars.sort(function (a, b) {
//   let x = a.type.toLowerCase();
//   let y = b.type.toLowerCase();
//   if (x < y) {
//     return -1;
//   }
//   if (x > y) {
//     return 1;
//   }
//   return 0;
// });

// console.log(cars);

//desending order string
// cars.sort(function (a, b) {
//   let x = a.type.toLowerCase();
//   let y = b.type.toLowerCase();
//   if (x > y) {
//     return -1;
//   }
//   if (x < y) {
//     return 1;
//   }
//   return 0;
// });

// console.log(cars);
