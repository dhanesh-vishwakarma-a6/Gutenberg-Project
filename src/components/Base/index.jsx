import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { filterCoverBooks, formatName } from "../../helper"
// components
import TextBar from "components/TextBar"
import BookCard from "components/BookCard"
import Loader from "components/Loader"
// icons
import { FaArrowLeft } from "react-icons/fa"
import { getBooksByGenre, search } from "API"
// style
import "./style.css"

const Base = ({ genreName }) => {
    // page state
    const [value, setValue] = useState("")
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)

    // fetch books from api
    const getGenreBooks = async () => {
        setLoading(true)
        await getBooksByGenre(genreName)
            .then(response => {
                const filteredBooks = filterCoverBooks(response.results)
                setBooks(filteredBooks)
            })
            .catch(err => console.log(err))
        setLoading(false)
    }

    // preload books on page
    useEffect(() => {
        getGenreBooks()
    }, [])

    // display books
    const displayBooks = () => {
        return books.map((book) => {
            const { id, formats, title, authors } = book
            return (
                <BookCard
                    id={id}
                    img={formats["image/jpeg"]}
                    name={title.split(":")[0]}
                    author={formatName(authors[0].name)}
                    viewBook={formats["text/html; charset=utf-8"]}
                />
            )
        })
    }

    // search keyword
    const searchString = async (event) => {
        if (event.key === "Enter") {
            setLoading(true)
            await search(value)
                .then(response => {
                    const filteredBooks = filterCoverBooks(response.results)
                    setBooks(filteredBooks)
                })
                .catch(err => console.log(err))
            setLoading(false)
        }
    }

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
                <TextBar value={value} handleChange={handleChange} searchString={searchString} />
            </header>
            {/* page content section */}
            <section className="books-container">
                <div className="books">
                    {loading ? (
                        <Loader />
                    ) : (
                        books.length !== 0) ? displayBooks() : "Books Not Available"}
                </div>
            </section>
        </main>
    )
}

export default Base