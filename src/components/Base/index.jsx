import React from "react"
import { FaArrowLeft } from "react-icons/fa"
import TextBar from "components/TextBar"
import "./style.css"

const Base = ({
    genreName,
    children
}) => {
    return (
        <main className="genre-page">
            <header>
                <h2>
                    <FaArrowLeft className="arrow-icon" />
                    {genreName}
                </h2>
                <TextBar />
            </header>
            <section className="books-container">
                <div className="books">{children}</div>
            </section>
        </main>
    )
}

export default Base