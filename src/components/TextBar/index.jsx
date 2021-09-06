import React from "react"
import "./style.css"

const TextBar = ({ value, handleChange }) => {
    return (
        <div>
            <input
                type="text"
                name="textBar"
                placeholder="Search"
                className="text-bar"
                onChange={handleChange}
                value={value}
            />
        </div>
    )
}

export default TextBar