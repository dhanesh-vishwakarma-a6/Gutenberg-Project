import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { filterCoverBooks, formatName } from "../../helper"
// components
import TextBar from "components/TextBar"
import BookCard from "components/BookCard"
// icons
import { FaArrowLeft } from "react-icons/fa"
import { getBooksByGenre } from "API"
// style
import "./style.css"

const Base = ({ genreName }) => {

    // page state
    const [value, setValue] = useState("")
    const [books, setBooks] = useState([])

    // fetch books from api
    const loadGenreBooks = () => {
        getBooksByGenre(genreName)
            .then(data => {
                const filteredBooks = filterCoverBooks(data.results)
                setBooks(filteredBooks)
                console.log(filteredBooks)
            })
            .catch(err => console.log(err))
    }

    // preload books on page
    useEffect(() => {
        loadGenreBooks()
    }, [])

    // handle text bar value
    const handleChange = (event) => {
        setValue(event.target.value)
    }
    return (
        <main className="genre-page">
            {/* page header */}
            <header>
                <h2>
                    <Link to="/">
                        <FaArrowLeft className="arrow-icon" />
                    </Link>
                    {genreName}
                </h2>
                <TextBar value={value} handleChange={handleChange} />
            </header>
            {/* page content section */}
            <section className="books-container">
                <div className="books">
                    {/* books grid */}
                    {books.map((book) => {
                        const { id, formats, title, authors } = book
                        return (
                            <BookCard
                                id={id}
                                img={formats["image/jpeg"]}
                                name={title.split(":")[0]}
                                author={formatName(authors[0].name)}
                            />
                        )
                    })}
                </div>
            </section>
        </main>
    )
}

export default Base