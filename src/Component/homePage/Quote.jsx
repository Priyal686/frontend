import React from "react";
import { Card, ListGroup } from "react-bootstrap";

var Quote = () => {
  return (
    <>
      <Card bg="light" border="dark">
              <Card.Header>Quote</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {" "}
              Do it sincerely Not seriously{" "}
            </p>
            <footer className="blockquote-footer">
              Someone famous <cite title="Source Title">Akash Thosar</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </>
  );
};
export default Quote;
