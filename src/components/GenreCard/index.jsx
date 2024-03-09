import React from "react";
import * as FontAwesome from "react-icons/fa";
import { Link } from "react-router-dom";
import "./style.css";

const GenreCard = ({ name, icon }) => {
  return (
    <Link to={`/${name}`}>
      <section className="genre-card">
        <FontAwesome.FaCanadianMapleLeaf className="arrow-icon" />
        <p>{name}</p>
        <div className="space"></div>
        <FontAwesome.FaArrowRight className="arrow-icon" />
      </section>
    </Link>
  );
};

export default GenreCard;
