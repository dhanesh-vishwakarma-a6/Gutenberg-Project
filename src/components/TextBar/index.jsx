import React from "react"
import "./style.css"

const TextBar = ({ value, handleChange, searchString }) => {
    return (
        <div>
            <input
                type="text"
                name="textBar"
                placeholder="Search"
                className="text-bar"
                value={value}
                onChange={handleChange}
                onKeyPress={searchString}
            />
        </div>
    )
}

export default TextBar