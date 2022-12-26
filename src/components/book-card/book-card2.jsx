import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

export const BookCard2 = ({ book, onBookClick }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={book.Img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.author}</Card.Text>
        <Button
          onClick={() => {
            onBookClick(book);
          }}
          variant="link"
        >
          Open
        </Button>
      </Card.Body>
    </Card>
  );
};

BookCard.PropTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
  onBookClick: PropTypes.func.isRequired,
};
