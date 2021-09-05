import React from "react"
import * as FontAwesome from "react-icons/fa"
import "./style.css"

const GenreCard = ({ name, icon }) => {

    return (
        <section className="genre-card">
            <FontAwesome.FaCanadianMapleLeaf className="arrow-icon" />
            <p>{name}</p>
            <div className="space"></div>
            <FontAwesome.FaArrowRight className="arrow-icon" />
        </section>
    )
}

export default GenreCard