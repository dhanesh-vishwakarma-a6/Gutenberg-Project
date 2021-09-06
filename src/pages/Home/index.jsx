import React from "react"
import GenreCard from "components/GenreCard"
import "./style.css"

const Home = () => {
    const genres = [
        { name: "fiction", icon: "" },
        { name: "philosophy", icon: "" },
        { name: "drama", icon: "FaTheaterMasks" },
        { name: "history", icon: "" },
        { name: "humour", icon: "FaLaugh" },
        { name: "adventure", icon: "" },
        { name: "politics", icon: "" },
    ]
    return (
        <main>
            <header className="title-container">
                <section className="title">
                    <h1>gutenberg project</h1>
                    <p>A social cataloging website that allows you to freely search its database of books, annotations, and reviews.</p>
                </section>
            </header>
            <section className="genre-container">
                {genres.map(genre => (
                    <GenreCard name={genre.name} icon={genre.icon} />
                ))}
            </section>
        </main>
    )
}

export default Home