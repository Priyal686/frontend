import React from "react";
import { Card, ListGroup } from "react-bootstrap";

var Footer = () => {
  return (
    <>
      <div className="row mt-4">
        <div className="col-md-12">
          <Card>
            <div className="row">
            <div className="col-md-3">
                <Card.Header>Mission</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <p>Our mission is to create high skilled IT resources which are recognized by major corporates in India. We strive to inculcate strong technical and interpersonal skills that help the students excel in the corporate world.</p>
                    
                  </ListGroup.Item>
                </ListGroup>
              </div>
              <div className="col-md-3">
                <Card.Header>CollegeName</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <p>Information</p>
                    <p>Address:Pune</p>
                    <p>Phone:123456789</p>
                  </ListGroup.Item>
                </ListGroup>
              </div>
             
              <div className="col-md-3">
                <Card.Header>Contact Us</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <p>Email:akash.thosar29@gmail.com</p>
                    <p>Facebook:AkashThosar</p>
                    <p>Twitter</p>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </Card>
              </div>
              <div className="footer-copyright text-center py-3 " >
                <Card.Header className="mt-4">
                  &copy; {new Date().getFullYear()} Copyright:{" "}
                  <a href="#"> Akash And Priyal </a>
                </Card.Header>
              </div>
      </div>
    </>
  );
};
export default Footer;
