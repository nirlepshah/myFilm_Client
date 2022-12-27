import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export const ProfileView = () => {
  let storedUser = JSON.parse(localStorage.getItem("user"));
  let storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  let [token, setToken] = useState(storedToken ? storedToken : null);
  console.log(storedUser);
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

  return (
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
      </Card.Body>
    </Card>
  );
};
