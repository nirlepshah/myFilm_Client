import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import "./movie-view.scss";
export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((m) => m.id === movieId);
  console.log(movie);
  return (
    <Card className="mt-5">
      <div>
        <div>
          <img src={movie.image} alt="image" />
        </div>
        <div>
          <span>Title</span>
          <span>: </span>
          <span>{movie.title}</span>
        </div>
        <div>
          <span>Description</span>
          <span>: </span>
          <span>{movie.description}</span>
        </div>
        <div>
          <span>Director</span>
          <span>: </span>
          <span>{movie.director}</span>
        </div>
        <div>
          <span>Genre</span>
          <span>: </span>
          <span>{movie.genre}</span>
        </div>
        <br />
        <br />
        <Link to={`/`}>
          <button className="back-button">Back</button>
        </Link>
      </div>
    </Card>
  );
};

MovieView.PropTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string,
    description: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
  }).isRequired,
};
