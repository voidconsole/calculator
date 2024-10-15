import React from "react"

function Button({ content, type, onClick }) {
    let className = "key"
    if (type === "operator") className += " key--operator"
    if (type === "clear") className += " key--clear"
    if (type === "calculate") className += " key--equal"

    return (
        <button className={className} onClick={onClick}>
            {content}
        </button>
    )
}

export default Button
