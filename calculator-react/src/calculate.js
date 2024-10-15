function calculate(firstValue, operator, secondValue) {
    const a = parseFloat(firstValue)
    const b = parseFloat(secondValue)

    switch (operator) {
        case "+":
            return a + b
        case "-":
            return a - b
        case "*":
            return a * b
        case "/":
            return a / b
        default:
            return secondValue
    }
}

export default calculate
