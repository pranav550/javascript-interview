// class

class Car {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }
  getModel(model) {
    return `Car brand is ${this.brand} model is ${model}`;
  }
  getInfo() {
    return `Car brand is ${this.brand} price is ${this.price}`;
  }

  news() {
    return "next month car BMW";
  }

  static address() {
    return "india";
  }
}

let carobj = new Car("Maruti", "1000000");

console.log(carobj);
console.log(carobj.getModel(2010));
console.log(carobj.getModel(2020));
console.log(carobj.getInfo());
console.log(carobj.news());

class Vechicle extends Car {
  constructor(brand, price, color) {
    super(brand, price);
    this.color = color;
  }

  getBikeColor() {
    let infoDetail = super.getInfo();
    return this.color + " " + this.brand + infoDetail;
  }

  getVechicleType() {
    return 3;
  }

  news() {
    return "next month car oddi";
  }
}

let vechicleObj = new Vechicle("Honda", "1200000", "white");
console.log(vechicleObj.getInfo());
console.log(vechicleObj.getVechicleType());
console.log(vechicleObj.getBikeColor());
console.log(vechicleObj.news());
console.log(Vechicle.address());
