class Calculator {
    constructor(initialValue = 0) {
        this.value = initialValue;
    }

    add(num) {
        this.value += num;
        return this;
    }

    subtract(num) {
        this.value -= num;
        return this;
    }

    getResult() {
        return this.value;
    }
}

let calc = new Calculator(10);
calc.add(5);
calc.subtract(3);

console.log(calc.getResult());                  // 12