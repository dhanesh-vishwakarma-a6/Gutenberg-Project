import React from "react"
import { FaArrowLeft } from "react-icons/fa"
import TextBar from "components/TextBar"
import BookCard from "components/BookCard"
import "./style.css"

const Genre = ({ genreName, books }) => {
    return (
        <div className="page">
            <header>
                <h2>
                    <FaArrowLeft className="arrow-icon" />
                    {genreName}
                </h2>
                <TextBar />
            </header>
            <section className="books-container">
                <div className="books">
                    {books.map((book, index) => (
                        <BookCard img={book.img} name={book.name} author={book.author} key={index} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Genre