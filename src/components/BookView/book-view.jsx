import React from "react";
import PropTypes from "prop-types";
export const BookView = ({ book, onBackButton }) => {
  return (
    <div>
      <div>
        <img src={book.image} alt="image" />
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
        onClick={() => {
          onBackButton();
        }}
      >
        Go Back
      </button>
    </div>
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
