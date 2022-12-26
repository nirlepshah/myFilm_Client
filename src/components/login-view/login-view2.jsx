// import React from "react";
// import { useState } from "react";
// export const LoginView = ({ onLoggedIn }) => {
//   const [username, setUsername] = useState(null);
//   const [password, setPassword] = useState(null);
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const data = {
//       access: username,
//       secret: password,
//     };

//     // fetch("https://openlibrary.org/account/login.json", {
//     //   method: "POST",
//     //   body: JSON.stringify(data),
//     // });

//     const loginFunction = async () => {
//       try {
//         const response = await fetch(
//           "https://openlibrary.org/account/login.json",
//           {
//             method: "POST",
//             body: JSON.stringify(data),
//           }
//         );
//         if (response.ok) {
//           onLoggedIn(username);
//         } else {
//           alert("login failed");
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     loginFunction();
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:<span> </span>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => {
//               setUsername(e.target.value);
//             }}
//           />
//         </label>
//         <br />
//         <br />
//         <label>
//           Passowrd:
//           <span> </span>
//           <input
//             type="text"
//             value={password}
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//           />
//         </label>
//         <br />
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
//};
import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";
export const LoginView2 = ({ onLoggedIn }) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      access: username,
      secret: password,
    };

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://openlibrary.org/account/login.json",
          {
            method: "POST",
            body: JSON.stringify(data),
          }
        );
        if (response.ok) {
          onLoggedIn(username);
        } else {
          alert("Login failed");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          required
          minlength="3"
          maxlength="20"
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
          required
          minlength="3"
          maxlength="20"
        />
      </Form.Group>
      <br />
      <br />
      <Button type="submit">Submit</Button>
    </Form>
  );
};
