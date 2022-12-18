import React, { useEffect } from "react";
import { useState } from "react";
import { MovieCard } from "../MovieCard/movie-card";
import { MovieView } from "../MovieView/movie-view";
import { Sample } from "../sample";

export const MainView = () => {
  // const [movies, setMovie] = useState([
  //   {
  //     id: 1,
  //     title: "The Shawshank Redemption",
  //     image:
  //       "https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg",
  //     director: "Frank Darabont",
  //     description:
  //       "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  //     genre: "Drama",
  //   },
  //   {
  //     id: 2,
  //     title: "The Godfather",
  //     image:
  //       "https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg",
  //     director: "Francis Ford Coppola",
  //     description:
  //       "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
  //     genre: "Crime",
  //   },
  //   {
  //     id: 3,
  //     title: "The Dark Knight",
  //     image:
  //       "https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg",
  //     director: "Christopher Nolan",
  //     description:
  //       "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  //     genre: "Action",
  //   },
  //   {
  //     id: 4,
  //     title: "12 Angry Men",
  //     image:
  //       "https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg",
  //     director: "Sidney Lumet",
  //     description:
  //       "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict",
  //     genre: "Drama",
  //   },
  //   {
  //     id: 5,
  //     title: "Schindler's List",
  //     image:
  //       "https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg",
  //     director: "Steven Spielberg",
  //     description:
  //       "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
  //     genre: "Biography",
  //   },
  // ]);

  const [movies, setMovie] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const url = "https://myfilm-api.onrender.com/movies";

    const fetchMovie = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        const movieFromApi = json.map((movie) => {
          return {
            id: movie._id,
            title: movie.Title,
            image: movie.ImagePath,
            director: movie.Director.Name,
            genre: movie.Genre.Name,
            description: movie.Description,
          };
        });
        setMovie(movieFromApi);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, []);

  if (movies.length === 0) {
    setTimeout(() => {
      return <div>The list is empty</div>;
    }, 2000);
  }
  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackButton={() => {
          setSelectedMovie(null);
        }}
      />
    );
  }

  return (
    <div>
      {movies.map((movie) => {
        return (
          <>
            <MovieCard
              key={movie.id}
              movie={movie}
              onMovieClick={(newMovie) => {
                setSelectedMovie(newMovie);
              }}
            />
          </>
        );
      })}
    </div>
  );
};
