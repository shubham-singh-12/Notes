const a = 10;
console.log(a);                 // 10

{
    const b = 20;
    console.log(b);                 // 20

    console.log(a);                 // 10
}

console.log(b);                 // Uncaught ReferenceError: b is not defined