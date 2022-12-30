import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
export const MovieCard = ({ movie }) => {
  let storedUser = JSON.parse(localStorage.getItem("user"));
  let storedToken = localStorage.getItem("token");

  const AddFavMovie = (id) => {
    fetch(
      `https://myfilm-api.onrender.com/users/${storedUser.Username}/movies/${id}`,
      {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${storedToken}`,
        },
      }
    )
      .then((res) => {
        console.log(res);
        alert("Movie was Added");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Link to={`/movie/${encodeURIComponent(movie.id)}`}>
          <Button variant="link">Movie View</Button>
        </Link>{" "}
        <br />
        <Link to={`/movie/director/${encodeURIComponent(movie.director.Name)}`}>
          <Button variant="link">Director</Button>
        </Link>{" "}
        <br />
        <Link to={`/movie/genre/${encodeURIComponent(movie.genre.Name)}`}>
          <Button variant="link">Genre</Button>
        </Link>
        <br />
        <button
          onClick={() => {
            AddFavMovie(movie.id);
          }}
        >
          Add Movie to Favorite
        </button>
      </Card.Body>
    </Card>
  );
};
MovieCard.PropTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
