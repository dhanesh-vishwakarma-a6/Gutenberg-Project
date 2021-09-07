import React from "react"
import "./style.css"


const BookCard = ({ id, img, name, author, viewBook }) => {
    return (
        <article key={id} className="book-card">
            <figure >
                <a href={viewBook} target="_blank" rel="noopener noreferrer">
                    <img src={img} alt={name} className="reactangle" /> <br />
                </a>
                <figcaption >
                    <p className="book-name">{name}</p>
                    <p className="author-name">{author}</p>
                </figcaption>
            </figure>
        </article >
    )
}

export default BookCard