class Person {
    constructor(name, age) {
        this.name = name; // "this" = the object being created
        this.age = age;
    }

    introduce() {
        // "this" refers to whichever object calls introduce()
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

let p1 = new Person("Shubham", 25);
let p2 = new Person("Rohan", 22);

p1.introduce();         // "Hi, I'm Shubham and I'm 25 years old."
p2.introduce();         // "Hi, I'm Rohan and I'm 22 years old."