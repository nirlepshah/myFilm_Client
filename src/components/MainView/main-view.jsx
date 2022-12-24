import React, { useEffect } from "react";
import { useState } from "react";
import { MovieCard } from "../MovieCard/movie-card";
import { MovieView } from "../MovieView/movie-view";
import { Sample } from "../sample";
import { LoginView } from "../login-view/login-view";
import { SignUpView } from "../signup-view/signup-view";
import { Row, Button, Col } from "react-bootstrap";
export const MainView = () => {
  let storedUser = JSON.parse(localStorage.getItem("user"));
  let storedToken = localStorage.getItem("token");
  const [movies, setMovie] = useState([]);
  const [user, setUser] = useState(storedUser ? storedUser : null);
  let [token, setToken] = useState(storedToken ? storedToken : null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (!token) return;

    const url = "https://myfilm-api.onrender.com/movies";

    fetch("https://myfilm-api.onrender.com/movies", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        return response.json();
      })
      .then((movies) => {
        const names = movies.map((movie) => {
          return {
            id: movie._id,
            title: movie.Title,
            image: movie.ImagePath,
            director: movie.Director.Name,
            genre: movie.Genre.Name,
            description: movie.Description,
          };
        });
        setMovie(names);
      })

      .catch((e) => {
        console.log(e);
      });
  }, [token]);

  return (
    <Row className="justify-content-md-center">
      {!user ? (
        <Col md={5}>
          <h2>LogIn</h2>
          <LoginView
            onLoggedIn={(user, token) => {
              setUser(user);
              setToken(token);
            }}
          />
          <br />
          <br />
          OR
          <br />
          <br />
          <h2>SignUp</h2>
          <SignUpView />
        </Col>
      ) : selectedMovie ? (
        <>
          <Col md={8} style={{ border: "1px solid black" }}>
            <MovieView
              movie={selectedMovie}
              onBackButton={() => {
                setSelectedMovie(null);
              }}
            />
          </Col>
        </>
      ) : movies.length === 0 ? (
        <>
          {setTimeout(() => {
            return <div>The list is empty</div>;
          }, 2000)}
          <Button
            onClick={() => {
              setUser(null);
              setToken(null);
              localStorage.clear();
            }}
          >
            LogOut
          </Button>
        </>
      ) : (
        <>
          <div>
            <Button
              className="mt-5"
              onClick={() => {
                setUser(null);
                setToken(null);
                localStorage.clear();
              }}
            >
              <b> Log Out </b>
            </Button>
          </div>
          {movies.map((movie) => (
            <>
              <Col className="mb-5 mt-5" key={movie.id} md={3}>
                <MovieCard
                  movie={movie}
                  onMovieClick={(newMovie) => {
                    setSelectedMovie(newMovie);
                  }}
                />
              </Col>
            </>
          ))}
        </>
      )}
    </Row>
  );
};
