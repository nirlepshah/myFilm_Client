import React from "react";
import PropTypes from "prop-types";
import "./book-view.scss";
import { Button, Card } from "react-bootstrap";
export const BookView = ({ book, onBackButton }) => {
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
        <button
          className="back-button"
          onClick={() => {
            onBackButton();
          }}
          style={{ cursor: "pointer" }}
        >
          Go Back
        </button>
      </div>
    </Card>
  );
};
BookView.PropTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.string,
  }).isRequired,
  onBackButton: PropTypes.func.isRequired,
};

//username: 167OLdP5BUfLZGxP
//password: K39eKYhPMV9DDWhJ