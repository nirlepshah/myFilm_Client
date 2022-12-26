import React, { useEffect } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BookCard } from "../book-card/book-card";
import { BookView } from "../BookView/book-view";
import { LoginView } from "../login-view/login-view";
import { SingUpView } from "../SignUpView/signup-view";
import { Row, Col, Card } from "react-bootstrap";
import { SingnUpView } from "../SignUpView/signup-view";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavigationBar } from "../navigation-bar/navigation-bar";
export const MainView = () => {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetch("https://openlibrary.org/search.json?q=star+wars")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const booksFromApi = data.docs.map((doc) => {
          return {
            id: doc.key,
            title: doc.title,
            image: `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`,
            author: doc.author_name?.[0],
          };
        });
        setBooks(booksFromApi);
      });
  }, []);

  return (
    <BrowserRouter>
      <NavigationBar
        user={user}
        onLoggedOut={() => {
          setUser(null);
        }}
      />
      <Row className="justify-content-md-center">
        <Routes>
          <Route
            path="/signup"
            element={
              <>
                {" "}
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <SingnUpView />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <LoginView onLoggedIn={(user) => setUser(user)} />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/books/:bookId"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : books.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <Col md={8}>
                    <BookView books={books} />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : (
                  <>
                    {books.map((book) => (
                      <Col className="mb-4" key={book.id} md={3}>
                        <BookCard book={book} />
                      </Col>
                    ))}
                  </>
                )}
              </>
            }
          />
        </Routes>
      </Row>
      ;
    </BrowserRouter>
  );
};
