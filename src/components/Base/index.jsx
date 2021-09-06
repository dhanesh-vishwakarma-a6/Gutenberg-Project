import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"
import TextBar from "components/TextBar"
import "./style.css"

const Base = ({
    genreName,
    children
}) => {

    const [value, setValue] = useState("")

    // handle text bar value
    const handleChange = (event) => {
        setValue(event.target.value)
    }
    return (
        <main className="genre-page">
            <header>
                <h2>
                    <Link to="/">
                        <FaArrowLeft className="arrow-icon" />
                    </Link>
                    {genreName}
                </h2>
                <TextBar value={value} handleChange={handleChange} />
            </header>
            <section className="books-container">
                <div className="books">{children}</div>
            </section>
        </main>
    )
}

export default Base