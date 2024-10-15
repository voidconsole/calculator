// Get the elements from the DOM
const calculator = document.querySelector(".calculator")
const keys = calculator.querySelector(".keys")
const display = document.querySelector(".display")

// Add an event listener to the keys container
keys.addEventListener("click", e => {
    // If the clicked element was not a button, exit the function
    if (!e.target.matches("button")) return

    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent

    if (!action) {
        if (displayedNum === "0") {
            display.textContent = keyContent
        } else {
            display.textContent = displayedNum + keyContent
        }
        Array.from(key.parentNode.children).forEach(k =>
            k.classList.remove("is-depressed")
        )
    }

    if (
        action === "addition" ||
        action === "subtraction" ||
        action === "multiplication" ||
        action === "division"
    ) {
        key.classList.add("is-depressed")
        // Add custom attribute
        calculator.dataset.previousKeyType = "operator"
        calculator.dataset.firstValue = displayedNum
        calculator.dataset.operator = action
        display.textContent = " "
    }

    if (action === "clear") {
        display.textContent = "0"
        calculator.dataset.firstValue = ""
        calculator.dataset.operator = ""
        calculator.dataset.secondValue = ""
        calculator.dataset.previousKeyType = ""
    }
    if (action === "decimal") {
        display.textContent = displayedNum + "."
    }

    if (action === "calculate") {
        const firstValue = calculator.dataset.firstValue
        const operator = calculator.dataset.operator
        const secondValue = displayedNum

        if (!firstValue) return

        display.textContent = calculate(firstValue, operator, secondValue)
    }
})

function calculate(firstValue, operator, secondValue) {
    let result = ""

    if (operator === "addition") {
        result = parseFloat(firstValue) + parseFloat(secondValue)
    } else if (operator === "subtraction") {
        result = parseFloat(firstValue) - parseFloat(secondValue)
    } else if (operator === "multiplication") {
        result = parseFloat(firstValue) * parseFloat(secondValue)
    } else if (operator === "division") {
        result = parseFloat(firstValue) / parseFloat(secondValue)
    }
    return result
}