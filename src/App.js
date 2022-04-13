import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Component/homePage/HomePage";
import Login from "./Component/login/Login";
import Student from "./Component/studentProfile/StudentDashboard";
import Header from "./Component/homePage/Header";
import TeacherDashBoard from "./Component/teacherProfile/TeacherDashBoard";
import AdminDashBoard from "./Component/adminProfile/AdminDashBoard";
import AddTimeTable from "./Component/adminProfile/AddTimeTable";
import AddNewNotice from "./Component/adminProfile/AddNewNotice";
import ResultEntry from "./Component/adminProfile/ResultEntry";
import contactUs from "./Component/homePage/contactUs";
import aboutUs from "./Component/homePage/aboutUs";
import "./App.css";
import AddResult from "./Component/adminProfile/AddResult";
import StudentResult from "./Component/adminProfile/StudentResult";



import Signup from "./Component/registration/Signup";

import NavbarComponent from "./Component/homePage/Navbar";
function App() {
  return (
    <div >
      <Header />
      <NavbarComponent />

      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/Login" exact component={Login} />
          <Route path="/AboutUs" exact component={aboutUs} />
          <Route path="/ContactUs" exact component={contactUs} />
          <Route path="/Registration" exact component={Signup} />
          <Route path="/Student" exact component={Student} />
          <Route path="/Admin" exact component={AdminDashBoard} />
          <Route path="/timetable/add" exact component={AddTimeTable} />
          <Route path="/timetable/edit/:id" exact component={AddTimeTable} />
          <Route path="/notice/add" exact component={AddNewNotice} />
          <Route path="/notice/edit/:id" exact component={AddNewNotice} />
          <Route path="/resultEntry" exact component={ResultEntry} />
          <Route path="/studentResultEntry" exact component={AddResult} />
          <Route path="/studentResult" exact component={StudentResult} />

          <Route path="/teacher" exact component={TeacherDashBoard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
