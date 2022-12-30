import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
export const DirectorView = ({ movies }) => {
  const { directorName } = useParams();
  const movie = movies.find((m) => (m.director.Name = directorName));
  //   console.log(directorName);
  let date = new Date(movie.director.Birth);
  return (
    <>
      <Container className="mt-5">
        <Card>
          <div>
            <b>Name: </b>
            {movie.director.Name}
          </div>{" "}
          <br />
          <div>
            <b>Bio: </b>
            {movie.director.Bio}
          </div>{" "}
          <br />
          <div>
            <b>Birth Day:</b> {date.toISOString().split("T")[0]} (YYYY/MM/DD)
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
