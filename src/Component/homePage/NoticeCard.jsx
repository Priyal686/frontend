import React from "react";
import { Accordion, Card, ListGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import HomepageService from "../../Services/HomePageService";

var NoticeCard = () => {
  const [notice, setNotice] = useState([]);

useEffect(() => {
    HomepageService.getNotice()
      .then((result) => {
        console.log("result.data", result.data);
        setNotice(result.data);
      })
      .catch((err) => {
        console.log("err occured", err);
      });
  }, []);




  
  return (
    <>
      <div className="row mt-4">
        <div className="col-md-3">
          <Card style={{ width: "20rem" }}>
            <Card.Header>
              <h3>News/Notice</h3>{" "}
            </Card.Header>
            <Card.Body>
              {/* write a map function to generate accodion for field id,title,description,date,user*/}
              {notice.map((notice) => (
                     <Accordion defaultActiveKey="0">
                     <Accordion.Item eventKey="0">
                    <Accordion.Header>ID : {notice.id} {notice.title}</Accordion.Header>
                   
                    <Accordion.Body>
                      {notice.description}
                      {notice.date}
                       
                       </Accordion.Body>
                     </Accordion.Item>                
                </Accordion>  
              ))}




            </Card.Body>
          </Card>
        </div>
      </div>

          
    </>
  );
};
export default NoticeCard;
