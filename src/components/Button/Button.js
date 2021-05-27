import React from "react";
import './Button.css'

function Button({type, onClick, title}) {
    return (
        <button type={type} onClick={onClick}>{title}</button>
    )
}

export default Button;