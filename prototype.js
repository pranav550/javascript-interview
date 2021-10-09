// inherit the properties and methods

function Car(brand, model, color) {
  this.brand = brand;
  this.model = model;
  this.color = color;
  this.brandModelColor = function () {
    return this.brand + " " + this.model + " " + this.color;
  };
}

Car.prototype.price = function (price) {
  return price.toLocaleString();
};
Car.prototype.modelNo = 120;
let carObj = new Car("Honda", "120", "black");
console.log(carObj);
console.log(carObj.price(750000));
console.log(carObj.modelNo);
