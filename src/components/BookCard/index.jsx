import React from "react"
import "./style.css"

const BookCard = ({ img, name, author, key }) => {
    return (
        <article className="book-card">
            <figure key={key}>
                <img src={img} alt="" className="reactangle" /> <br />
                <figcaption >
                    <p className="book-name">{name}</p>
                    <p className="author-name">{author}</p>
                </figcaption>
            </figure>
        </article >
    )
}

export default BookCard