import React from "react"
import "./style.css"

const BookCard = ({ id, img, name, author, }) => {
    return (
        <article className="book-card">
            <figure key={id}>
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