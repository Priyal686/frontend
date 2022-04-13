import React from "react";
import Attendance from "./Attendance";
import Profile from "./Profile";
import ProfessionalCertification from "./ProfessionalCertification";
import Result from "./Result";
//import TimeTable from "./TimeTable";
import Feedback from "./Feedback";
import TimeTable from "./TimeTable";
import Figure from "react-bootstrap/Figure";
import NoticeCard from "./Notice";
import { useEffect } from "react/cjs/react.development";
import AuthService from "../../Services/Authentication/AuthService";

import {
  Nav,
  Row,
  Col,
  TabContent,
  TabPane,
  TabContainer,
} from "react-bootstrap";

function AdminDashBoard() {
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
                <Figure.Image width={171} height={150} src="./akasht.jpg" />
                <Figure.Caption>
                  <h3> Welcome {user.name}</h3>
                </Figure.Caption>
              </Figure>
            </div>
            <Nav variant="tabs" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="Profile"> Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="ProfessionalCertification">
                  ProfessionalCertification
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Result">Student Result</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                <Nav.Link eventKey="NoticeCard">NoticeCard</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Attendance">Attendance</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="TimeTable">TimeTable</Nav.Link>
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
              <TabPane eventKey="ProfessionalCertification">
                <ProfessionalCertification />
              </TabPane>
              <TabPane eventKey="Result">
                <Result />
                          </TabPane>
                          <TabPane eventKey="NoticeCard">
                <NoticeCard />
              </TabPane>
              <TabPane eventKey="Attendance">
                <Attendance />
              </TabPane>

              <TabPane eventKey="TimeTable">
                <TimeTable />
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

export default AdminDashBoard;
