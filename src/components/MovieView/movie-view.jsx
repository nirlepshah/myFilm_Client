import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import "./movie-view.scss";
export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((m) => m.id === movieId);
  // console.log(movie);
  return (
    <Card className="mt-3">
      <div>
        <div>
          <img src={movie.image} alt="image" />
        </div>{" "}
        <div>
          <span>
            {" "}
            <b>Title: </b>
          </span>

          <span>{movie.title}</span>
        </div>{" "}
        <br />
        <div>
          <span>
            <b>Description: </b>{" "}
          </span>
          <span>{movie.description}</span>
        </div>{" "}
        <br />
        <div>
          <span>
            {" "}
            <b>Director: </b>{" "}
          </span>

          <span>{movie.director.Name}</span>
        </div>{" "}
        <br />
        <div>
          <span>
            {" "}
            <b>Genre: </b>{" "}
          </span>
          <span>{movie.genre.Name}</span>
        </div>
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
