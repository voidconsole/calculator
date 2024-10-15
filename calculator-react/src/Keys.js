import React from "react"
import Button from "./Button"

function Keys({ onKeyClick }) {
    const buttons = [
        { content: "AC", type: "clear" },
        { content: "7", type: "number" },
        { content: "8", type: "number" },
        { content: "9", type: "number" },
        { content: "+", type: "operator" },
        { content: "4", type: "number" },
        { content: "5", type: "number" },
        { content: "6", type: "number" },
        { content: "-", type: "operator" },
        { content: "1", type: "number" },
        { content: "2", type: "number" },
        { content: "3", type: "number" },
        { content: "*", type: "operator" },
        { content: ".", type: "decimal" },
        { content: "0", type: "number" },
        { content: "/", type: "operator" },
        { content: "=", type: "calculate" },
    ]

    return (
        <div className="keys">
            {buttons.map((button, index) => (
                <Button
                    key={index}
                    content={button.content}
                    type={button.type}
                    onClick={() => onKeyClick(button.content, button.type)}
                />
            ))}
        </div>
    )
}

export default Keys
