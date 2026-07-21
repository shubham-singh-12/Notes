// OBJECT LITERAL ❌ repetitive when creating many similar objects
let student1 = {
    name: "Shubham",
    grade: "A",
    greet() {
        console.log(`Hi ${this.name}`);
    },
};
let student2 = {
    name: "Rohan",
    grade: "B",
    greet() {
        console.log(`Hi ${this.name}`);
    },
};
// same structure written again and again ❌

// CLASS ✅ define once, reuse many times
class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    greet() {
        console.log(`Hi ${this.name}`);
    }
}

let s1 = new Student("Shubham", "A");           // clean and short ✅
let s2 = new Student("Rohan", "B");             // clean and short ✅