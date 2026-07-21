class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
        console.log(`A new car was created: ${brand} ${model}`);
    }
}

let car1 = new Car("Toyota", "Camry");
// "A new car was created: Toyota Camry"  ← printed automatically

let car2 = new Car("Honda", "Civic");
// "A new car was created: Honda Civic"