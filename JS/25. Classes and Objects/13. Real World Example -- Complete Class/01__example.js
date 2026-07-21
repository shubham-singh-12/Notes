class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.price * this.quantity;
    }

    applyDiscount(percent) {
        let discount = (this.price * percent) / 100;
        this.price -= discount;
        console.log(`Discount applied! New price: ₹${this.price}`);
    }

    showDetails() {
        console.log(
            `${this.name} — ₹${this.price} x ${this.quantity} = ₹${this.getTotalPrice()}`,
        );
    }
}

let item1 = new Product("Laptop", 50000, 2);
let item2 = new Product("Mouse", 500, 5);

item1.showDetails();                // Laptop — ₹50000 x 2 = ₹100000
item2.showDetails();                // Mouse — ₹500 x 5 = ₹2500

item1.applyDiscount(10);            // Discount applied! New price: ₹45000
item1.showDetails();                // Laptop — ₹45000 x 2 = ₹90000