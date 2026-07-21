class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
}

// creating an object (instance) from the class
let student1 = new Student("Shubham", 20, "A");

console.log(student1);
// Student { name: "Shubham", age: 20, grade: "A" }

console.log(student1.name);                 // "Shubham"
console.log(student1.age);                  // 20
console.log(student1.grade);                // "A"