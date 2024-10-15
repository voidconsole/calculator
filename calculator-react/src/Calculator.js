import React, { useState } from "react"
import Display from "./Display"
import Keys from "./Keys"
import calculate from "./calculate"

function Calculator() {
    const [displayValue, setDisplayValue] = useState("0")
    const [firstValue, setFirstValue] = useState(null)
    const [operator, setOperator] = useState(null)
    const [waitingForSecondValue, setWaitingForSecondValue] = useState(false)

    const handleKeyClick = (keyContent, keyType) => {
        switch (keyType) {
            case "number":
                if (waitingForSecondValue) {
                    setDisplayValue(keyContent)
                    setWaitingForSecondValue(false)
                } else {
                    setDisplayValue(
                        displayValue === "0"
                            ? keyContent
                            : displayValue + keyContent
                    )
                }
                break

            case "operator":
                if (firstValue === null) {
                    setFirstValue(displayValue)
                } else if (operator) {
                    const result = calculate(firstValue, operator, displayValue)
                    setDisplayValue(String(result))
                    setFirstValue(result)
                }
                setWaitingForSecondValue(true)
                setOperator(keyContent)
                break

            case "decimal":
                if (!displayValue.includes(".")) {
                    setDisplayValue(displayValue + ".")
                }
                break

            case "clear":
                setDisplayValue("0")
                setFirstValue(null)
                setOperator(null)
                setWaitingForSecondValue(false)
                break

            case "calculate":
                if (firstValue && operator) {
                    const result = calculate(firstValue, operator, displayValue)
                    setDisplayValue(String(result))
                    setFirstValue(null)
                    setOperator(null)
                    setWaitingForSecondValue(true)
                }
                break

            default:
                break
        }
    }

    return (
        <div className="calculator">
            <Display value={displayValue} />
            <Keys onKeyClick={handleKeyClick} />
        </div>
    )
}

export default Calculator
