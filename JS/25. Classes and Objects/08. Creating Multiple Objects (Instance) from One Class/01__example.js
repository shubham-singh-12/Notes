class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }

    showInfo() {
        console.log(`${this.name} — Grade: ${this.grade}`);
    }
}

let s1 = new Student("Shubham", "A");
let s2 = new Student("Rohan", "B");
let s3 = new Student("Manas", "A+");

s1.showInfo();                  // Shubham — Grade: A
s2.showInfo();                  // Rohan — Grade: B
s3.showInfo();                  // Manas — Grade: A+

// changing one doesn't affect the others
s1.grade = "A++";
s1.showInfo();                  // Shubham — Grade: A++
s2.showInfo();                  // Rohan — Grade: B (unaffected ✅)