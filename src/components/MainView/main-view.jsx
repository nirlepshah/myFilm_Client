import React, { useEffect } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BookCard } from "../book-card/book-card";
import { BookView } from "../BookView/book-view";
import { LoginView } from "../login-view/login-view";
import { SingUpView } from "../SignUpView/signup-view";
import { Row, Col, Card } from "react-bootstrap";
import { SingUpView } from "../SignUpView/signup-view";
export const MainView = () => {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const url = "https://openlibrary.org/search.json?q=star+wars";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log("books from api:", json);
        const booksFromApi = json.docs.map((doc) => {
          return {
            id: doc.key,
            title: doc.title,
            image: `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`,
            author: doc.author_name?.[0],
          };
        });
        setBooks(booksFromApi);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Row className="justify-content-md-center">
      {!user ? (
        <>
          <Col md={5}>
            <LoginView
              onLoggedIn={(user) => {
                setUser(user);
              }}
            />
            Or
            <SingUpView />
          </Col>
        </>
      ) : selectedBook ? (
        <Col md={8}>
          <BookView
            book={selectedBook}
            onBackButton={() => {
              setSelectedBook(null);
            }}
          />
        </Col>
      ) : books.length === 0 ? (
        <>
          <button
            onClick={() => {
              setUser(null);
            }}
          >
            LogOut
          </button>
          <div>The list is empty</div>);
        </>
      ) : (
        <>
          <button
            onClick={() => {
              setUser(null);
            }}
          >
            LogOut
          </button>
          {books.map((book) => {
            return (
              <Col key={book.id} className="mb-4" md={4}>
                <BookCard
                  book={book}
                  onBookClick={(newBook) => {
                    setSelectedBook(newBook);
                  }}
                />
              </Col>
            );
          })}
        </>
      )}
    </Row>
  );
};
