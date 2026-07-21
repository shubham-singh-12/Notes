class Car {
    constructor(brand) {
        this.brand = brand;
    }
}

let myCar = new Car("Toyota");

console.log(typeof myCar);                      // "object"
console.log(myCar instanceof Car);              // true ✅ — confirms it was made from Car class