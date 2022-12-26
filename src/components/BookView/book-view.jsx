import React from "react";
import PropTypes from "prop-types";
import "./book-view.scss";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
export const BookView = ({ books }) => {
  const { bookId } = useParams();
  const book = books.find((b) => b.id === bookId);
  return (
    <Card>
      <div>
        <div>
          <img className="w-100" src={book.image} alt="image" />
        </div>
        <div>
          <span>Title</span>
          <span>{book.title}</span>
        </div>
        <span>Author</span>
        <span>{book.author}</span>
        <br />
        <br />
        <Link to={`/`}>
          <button className="back-button">Back</button>
        </Link>
      </div>
    </Card>
  );
};
BookView.PropTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

//username: 167OLdP5BUfLZGxP
//password: K39eKYhPMV9DDWhJ
