import React from "react";
import PropTypes from "prop-types";

export const BookCard1 = ({ book, onBookClick }) => {
  return (
    <div
      onClick={() => {
        onBookClick(book);
      }}
    >
      {book.title}
    </div>
  );
};

BookCard.PropTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
  onBookClick: PropTypes.func.isRequired,
};
