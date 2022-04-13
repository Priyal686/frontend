import React from "react";
import { Card, CardGroup } from "react-bootstrap";

var FacultyInfoCard = () => {
  return (
    <>
      <div>
        <div className="text-center"><h2>Our faculty</h2> </div>
        <CardGroup>
         
        <Card>
          <Card.Img variant="top" src="./111.jpg" alt="Card image cap" />
          <Card.Body>
            <Card.Title>Akash</Card.Title>
            <Card.Text>
            having professional training experience of 20+ years in Java Technologies.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
           
        <Card>
          <Card.Img variant="top" src="./3.jpg" alt="Card image cap" />
          <Card.Body>
            <Card.Title>Sagar</Card.Title>
            <Card.Text>
            having 25+ yrs of experience in Information Security Training, Management,Ethical Hacking,Penetration Testing,System and Network Admin,Information Security Consulting,Cyber Forensic Investigations.Microsoft MVP.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="./22.jpg" alt="Card image cap" />
          <Card.Body>
            <Card.Title>Sai</Card.Title>
            <Card.Text>
            having 19+ years of experience in training field. This comprises of 11 years of experience in the field of “Corporate Training” domain. She is proficient in Java,Database Technologies,Security Concepts and Testing.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        </CardGroup>
        </div>
    </>
  );
};
export default FacultyInfoCard;
