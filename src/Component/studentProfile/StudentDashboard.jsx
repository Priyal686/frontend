import React from "react";
import { useEffect } from "react";
import Figure from "react-bootstrap/Figure";

import {
  Nav,
  Row,
  Col,
  TabContent,
  TabPane,
  TabContainer,
} from "react-bootstrap";
import Profile from "./StudetnProfileInfo.jsx";
import Educationaldettails from "./EducationalDetails.jsx";
import Result from "./Result.jsx";
import Attendance from "./Attendance.jsx";
import Achivments from "./Achievement.jsx";
import Paymentdatails from "./Paymentdatails.jsx";
import Feedback from "./Feedback.jsx";
import TimeTable from "./TimeTable.jsx";

function Details() {
  const loggedInUser = localStorage.getItem("User_info");
  const user = JSON.parse(loggedInUser);
  console.log(user);

  //{UserType: 'Student', id: '1', name: 'Akash', course: 'PG-DAC'}
  const LogOut = () => {
    localStorage.removeItem("User_info");
    localStorage.removeItem("User_info1");
    window.location.href = "/";
  };

  return (
    <div>
    
      <TabContainer id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={2}>
            <div>
              <Figure>
                <Figure.Image width={171} height={180} src="./one.jpg" />
                <Figure.Caption><h3> {" "}
                  Welcome {" "}
                  {user.name}</h3>
                 
                </Figure.Caption>
              </Figure>
            </div>
            <Nav variant="tabs" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="Profile"> Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Educationaldettails">
                  Educationaldettails
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Result">Result</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="TimeTable">TimeTable</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Attendance">Attendance</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Achivments">Achivments</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Paymentdatails">Paymentdatails</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Feedback">Feedback</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={LogOut}>Logout</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <TabContent>
              <TabPane eventKey="Profile">
                <Profile />
              </TabPane>
              <TabPane eventKey="Educationaldettails">
                <Educationaldettails />
              </TabPane>
              <TabPane eventKey="Result">
                <Result />
              </TabPane>

              <TabPane eventKey="TimeTable">
                <TimeTable />
              </TabPane>
              <TabPane eventKey="Attendance">
                <Attendance />
              </TabPane>
              <TabPane eventKey="Achivments">
                <Achivments />
              </TabPane>
              <TabPane eventKey="Paymentdatails">
                <Paymentdatails />
              </TabPane>
              <TabPane eventKey="Feedback">
                <Feedback />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </TabContainer>
    </div>
  );
}

export default Details;
