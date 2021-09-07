import React from "react"
import "./style.css"

const BookCard = ({ id, img, name, author, }) => {
    return (
        <article key={id} className="book-card">
            <figure >
                <img src={img} alt={name} className="reactangle" /> <br />
                <figcaption >
                    <p className="book-name">{name}</p>
                    <p className="author-name">{author}</p>
                </figcaption>
            </figure>
        </article >
    )
}

export default BookCard