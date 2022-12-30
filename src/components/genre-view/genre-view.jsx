import React from "react";
import { Container, Card } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
export const GenreView = ({ movies }) => {
  const { genreName } = useParams();
  const movie = movies.find((m) => (m.genre.Name = genreName));
  return (
    <>
      <Container className="mt-5">
        <Card>
          <div>
            <b> Genre Name: </b> {movie.genre.Name}
          </div>
          <br />
          <div>
            {" "}
            <b>Genre Description: </b> {movie.genre.Description}
          </div>
          <br />
          <Link to={`/`}>
            <button className="back-button">Back</button>
          </Link>
        </Card>
      </Container>
    </>
  );
};
