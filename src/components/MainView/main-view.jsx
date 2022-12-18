import React, { useEffect } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BookCard } from "../book-card/book-card";
import { BookView } from "../BookView/book-view";

export const MainView = () => {
  // const [books, setBooks] = useState([
  //   {
  //     id: 1,
  //     title: "Eloquent JavaScript",
  //     image:
  //       "https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg",
  //     author: "Marijn Haverbeke",
  //   },
  //   {
  //     id: 2,
  //     title: "Mastering JavaScript Functional Programming",
  //     image:
  //       "https://images-na.ssl-images-amazon.com/images/I/51WAikRq37L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  //     author: "Federico Kereki",
  //   },
  //   {
  //     id: 3,
  //     title: "JavaScript: The Good Parts",
  //     image:
  //       "https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg",
  //     author: "Douglas Crockford",
  //   },
  //   {
  //     id: 4,
  //     title: "JavaScript: The Definitive Guide",
  //     image:
  //       "https://images-na.ssl-images-amazon.com/images/I/51HbNW6RzhL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  //     author: "David Flanagan",
  //   },
  //   {
  //     id: 5,
  //     title: "The Road to React",
  //     image:
  //       "https://images-na.ssl-images-amazon.com/images/I/41MBLi5a4jL._SX384_BO1,204,203,200_.jpg",
  //     author: "Robin Wieruch",
  //   },
  // ]);

  const [books, setBooks] = useState([]);

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

  if (selectedBook) {
    return (
      <BookView
        book={selectedBook}
        onBackButton={() => {
          setSelectedBook(null);
        }}
      />
    );
  }
  if (books.length === 0) {
    return <div>The list is empty</div>;
  }
  return (
    <div>
      {books.map((book) => {
        return (
          <>
            <BookCard
              key={book.id}
              book={book}
              onBookClick={(newBook) => {
                setSelectedBook(newBook);
              }}
            />
          </>
        );
      })}
    </div>
  );
};
