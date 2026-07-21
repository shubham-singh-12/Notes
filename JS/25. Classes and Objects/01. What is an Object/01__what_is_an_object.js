let user = {
    name: "Shubham",
    age: 25,
    greet: function () {
        console.log(`Hello, I am ${this.name}`);
    },
};

user.greet();                   // "Hello, I am Shubham"