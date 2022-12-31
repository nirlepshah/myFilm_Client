import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  // console.log(password);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Username: username,
      Password: password,
    };

    fetch("https://myfilm-api.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          // console.log(data.token);
          onLoggedIn(data.user, data.token);
        } else {
          alert("No such user");
        }
      })
      .catch((e) => {
        alert("Something went wrong");
      });
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Enter Username"
          />
        </Form.Group>
        <br />
        <br />
        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="text"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter Password"
          />
        </Form.Group>
        <br />
        <br />
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
};
