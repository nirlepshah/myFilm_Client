import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
export const MovieView = ({ movie, onBackButton }) => {
  return (
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
      <button
        onClick={() => {
          onBackButton();
        }}
      >
        Go Back
      </button>
    </div>
  );
};

MovieView.PropTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string,
    description: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
  }).isRequired,
  onBackButton: PropTypes.func.isRequired,
};
