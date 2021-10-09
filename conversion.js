// conversion

// number to string
String();
toString();

//string to number

parseInt();
Number();

//string to object

JSON.parse();

// string to array

split();
Array.from();
Object.assign([], string);

//object to string
JSON.stringify();
String();

// object to array
Object.keys();
Object.values();
Object.entries();

//array to string
toString();
join();

// array to object
const data = [
    { key: 1, name: "A", condition: true },
    { key: 4, name: "B", condition: false },
    { key: 7, name: "C", condition: true },
    { key: 11, name: "D", condition: true },
    { key: 12, name: "E", condition: false }
  ]
 
  const arrayToObject1 = (arr, key) => {
      return arr.reduce((obj, item) => {
          obj[item[key]] = item
          return obj
      }, {})}
 
  const arrayToObject2 = (array, key) =>
      array.reduce(
      (obj, item) => ({
        …obj, [item[key]]: item
      }),{});
 
  const arrayToObject3 = (arr, key) => 
 Object.assign({}, …arr.map(item => ({[item[key]]: item})))
 
  const arrayToObject4 = (arr, key) => 
 arr.reduce((obj, item) => ((obj[[item[key]]] = item), obj), {});
 
  const arrayToObject5 = (arr, key) => {
      const res = {};
      arr.forEach(obj => {
          res[obj[key]] = obj;
      })
      return res
  }
 
  console.log("----------key------------")
 
  console.log(arrayToObject5(data, 'key'))