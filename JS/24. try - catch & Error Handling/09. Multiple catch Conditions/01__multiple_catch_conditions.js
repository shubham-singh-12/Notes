function processInput(input) {
    try {
        if (typeof input !== "number") {
            throw new TypeError("Input must be a number");
        }
        if (input < 0) {
            throw new RangeError("Input must be positive");
        }
        console.log("Valid input:", input);
    } catch (error) {
        if (error instanceof TypeError) {
            console.log("Type Error:", error.message);
        } else if (error instanceof RangeError) {
            console.log("Range Error:", error.message);
        } else {
            console.log("Unknown Error:", error.message);
        }
    }
}

processInput("hello");          // Type Error: Input must be a number
processInput(-5);               // Range Error: Input must be positive
processInput(10);               // Valid input: 10
