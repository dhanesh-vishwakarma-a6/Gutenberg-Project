import React, { useState } from "react"
import Base from "components/Base/index"
import BookCard from "components/BookCard"

import { books as booksData } from "../data"

const Fiction = () => {
    const [books, setBooks] = useState(booksData)
    return (
        <Base genreName="fiction">
            {books.map((book, index) => (
                <BookCard img={book.img} name={book.name} author={book.author} key={index} />
            ))}
        </Base>
    )
}

export default Fiction