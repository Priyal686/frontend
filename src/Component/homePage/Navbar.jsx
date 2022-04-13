import React from "react";
import { useEffect } from "react";


/* eslint-disable jsx-a11y/anchor-is-valid */
const NavbarComponent = () => {

  const [uname, setUname] = React.useState("Account");
  useEffect(() => {
    const user = localStorage.getItem("User_info1");
    if (user) {
     // const userInfo = JSON.parse(user);
      console.log(user);
      setUname(user);
      console.log(uname);
    }
  }, []);

//write function to get user info from local storage
const getUserInfo = () => {
//if user not logged in redirect to login page
  if (localStorage.getItem("User_info") === null) {
    window.location.href = "/Login";
  }       
  
  //if user logged in show navbar
  if (localStorage.getItem("User_info") !== null) {
    const loggedInUser = localStorage.getItem("User_info");
    const loggedInUser1 = localStorage.getItem("User_info1");
    const user = JSON.parse(loggedInUser);
    console.log(loggedInUser1);
    console.log(user);
    setUname(loggedInUser1);

    //if user is admin show admin navbar
    if (user.userType === "Admin") {
      console.log("admin got");
      window.location.href = "/admin";
     
    }
    //if user is student show student navbar
    if (user.userType === "Student") {
      
          window.location.href = "/student";
      
    
    }
    //if user is teacher show teacher navbar
    if (user.userType === "teacher") {
      window.location.href = "/teacher";
    }
  }
};


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Login">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Registration">
                  Registration
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/AboutUs">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ContactUs">
                 Contact us
                </a>
              </li>
            </ul>

            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success btn-lg float-right"
                type="submit"
              >
                Search
              </button>
            </form>
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" onClick={getUserInfo}>
                 {uname}
                </a>
              </li>
              </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavbarComponent;
