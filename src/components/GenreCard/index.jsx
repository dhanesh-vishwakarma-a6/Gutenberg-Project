import React from "react"
import * as FontAwesome from "react-icons/fa"
import { Link } from "react-router-dom"
import "./style.css"

const GenreCard = ({ name, icon }) => {

    return (
        <section className="genre-card">
            <FontAwesome.FaCanadianMapleLeaf className="arrow-icon" />
            <p>{name}</p>
            <div className="space"></div>
            <Link to={`/${name}`}>
                <FontAwesome.FaArrowRight className="arrow-icon" />
            </Link>
        </section>
    )
}

export default GenreCard