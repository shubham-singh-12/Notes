class User {
    constructor(name = "Guest", role = "member") {
        this.name = name;
        this.role = role;
    }

    showInfo() {
        console.log(`${this.name} (${this.role})`);
    }
}

let u1 = new User("Shubham", "admin");
let u2 = new User();                    // no arguments passed

u1.showInfo();                          // Shubham (admin)
u2.showInfo();                          // Guest (member) ← defaults used ✅