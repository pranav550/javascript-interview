// iterators

function listData(data) {
  let index = 0;
  return {
    next: function () {
      if (index < data.length) {
        return {
          value: data[index++],
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
}

let arr = [12, 14, 16, 17, 20];
const list = listData(arr);

console.log(list.next());
console.log(list.next());
console.log(list.next());
console.log(list.next());
console.log(list.next());
console.log(list.next());

// generators

function* generate(i) {
  yield i;
  yield i + 10;
  yield i + 20;
}

const gen = generate(10);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
