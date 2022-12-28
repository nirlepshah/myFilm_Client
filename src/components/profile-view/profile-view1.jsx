import React, { useEffect, useState } from "react";
import { Card, Form, Button, Container, Col } from "react-bootstrap";

import { MovieCard } from "../MovieCard/movie-card";
// import { MovieCard } from "../MovieCard/movie-card";
// import { MovieView } from "../MovieView/movie-view";

export const ProfileView1 = ({ movies, onBackClick }) => {
  let storedUser = JSON.parse(localStorage.getItem("user"));
  let storedToken = localStorage.getItem("token");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [movieList, setMovieList] = useState([]);

  // console.log(storedUser);
  //   useEffect(() => {
  //     if (!token) return;

  //     fetch("https://myfilm-api.onrender.com/users", {
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //         const userData = data.find((u) => storedUser.Username === u.Username);
  //         console.log(storedUser);
  //         console.log(userData);
  //         setUserData(userData);
  //       });
  //   }, [token]);

  const handleUpdate = (e) => {
    e.preventDefault();

    // console.log(storedUser.Username);
    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday,
    };
    if (storedToken !== null && storedUser !== null) {
      fetch(`https://myfilm-api.onrender.com/users/${storedUser.Username}`, {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${storedToken}`,
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          const updatedData = res.json();
          console.log(updatedData);
          alert("Update successful! Please log in with your new credentials");
          localStorage.clear();
          window.open("/", "_self");
        })
        .catch((e) => {
          console.error(e);
          alert("Unable to update user infos");
        });
    }
  };
  const removeFavMovie = (id) => {
    fetch(
      `https://myfilm-api.onrender.com/users/${storedUser.Username}/movies/${id}`,
      {
        method: "DELETE",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${storedToken}`,
        },
      }
    )
      .then((res) => {
        console.log(res);
        alert("Movie was removed");
        console.log(movies);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleDelete = (e) => {
    e.preventDefault();
    if (confirm("Are you sure? This cannot be undone!")) {
      fetch(`https://myfilm-api.onrender.com/users/${storedUser.Username}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${storedToken}`,
        },
      })
        .then((res) => {
          alert(`Your account has been deleted. We're sorry to see you go!`);
          localStorage.clear();
          window.open("/", "_self");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  // console.log(movies);
  // console.log(storedUser.FavoriteMovies);

  // let favMovies = movies.filter((m) =>
  //   storedUser.FavoriteMovies.includes(m.id)
  // );
  // setMovieList(favMovies);
  // console.log(favMovies);
  return (
    <>
      <Container>
        <Card className="mt-5">
          <Card.Body>
            <Card.Title>User Details</Card.Title>
            <Card.Text>Username: {storedUser.Username}</Card.Text>
            <Card.Text>Email: {storedUser.Email}</Card.Text>

            <Card.Text>
              {storedUser.Birthday
                ? `Birthday: ${storedUser.Birthday}`
                : `Birthday: You did not provide your Birthday.`}
            </Card.Text>
            <Card.Text>
              {storedUser.FavoriteMovies.length === 0
                ? `Favorite Movies: You don't have any Favorite Movies.`
                : `Favorite Movies: ${storedUser.FavoriteMovies}`}
            </Card.Text>

            <div>
              <h2>Favorite movies</h2>
              {movies.map((m) => {
                return (
                  <>
                    <Col>
                      <div>Movie name: {m.title}</div>
                      <div>Movie Description: {m.description}</div> <br />
                      <button
                        onClick={() => {
                          removeFavMovie(m.id);
                        }}
                      >
                        Remove Favorite Movie
                      </button>
                      <br />
                      <br />
                    </Col>
                  </>
                );
              })}
            </div>
            <h2>Please enter information below to update the profile </h2>
            <Form onSubmit={handleUpdate}>
              <Form.Group controlId="formUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                  type="text"
                  required
                  minlength="3"
                  placeholder="Enter Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  required
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBirthday">
                <Form.Label>Birthday:</Form.Label>
                <Form.Control
                  type="date"
                  required
                  minlength="3"
                  placeholder="Enter Birthday"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="text"
                  required
                  minlength="3"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <br />
              <Button type="submit">Submit</Button>
            </Form>
            <br />
            <br />
            <Card>
              <h2>Click the button below to Delete Your Account </h2>
              <Card.Body>
                <Button variant="danger" type="submit" onClick={handleDelete}>
                  DELETE ACCOUNT PERMANENTLY
                </Button>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>
        <Button onClick={() => onBackClick()}>Go Back </Button>
      </Container>
    </>
  );
};
