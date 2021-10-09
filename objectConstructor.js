function Car(brand, model, color) {
  this.brand = brand;
  this.model = model;
  this.color = color;
  this.brandModel = function () {
    return this.brand + "" + this.model;
  };
}

var carDetail = new Car("Maruti", "Swift", "White");
var carDetail2 = new Car("Maruti", "Swift", "White");
carDetail.fuelType = "Petrol";
carDetail.newColor = function () {
  return "orrrrrkkcjjkjcjkc";
};
console.log(carDetail);
console.log(carDetail2);
console.log(carDetail.brandModel());
console.log(carDetail.newColor());
