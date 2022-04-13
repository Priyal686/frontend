import React from "react";
import { Card } from "react-bootstrap";

var CourseInfocard = () => {
  return (
    <>
     <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./awe.jpg" />
       
  <Card.Body>
    <Card.Title>Best College Award</Card.Title>
    <Card.Text>
    The Institute has been awarded “Best Professional College" by the Government of India.
    </Card.Text>
  </Card.Body>
  
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card> 
    
     
    </>
  );
};
export default CourseInfocard;
