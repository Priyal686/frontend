import React, { useState, useEffect } from "react";
import AuthService from "../../Services/Authentication/AuthService";

function Signup() {
  //write your code here to get from form and send to server by making USER object
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    //to select multiple roles
    roles:['ROLE_TEACHER']
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //send data to server by calling auth.signup
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    //add validation rule to check if user enter details are empty or not and if not then call the login function
    //if empty then show error message
    if (
      user.userName === "" ||
      user.email === "" ||
      user.password === "" ||
    //  user.roles === "" ||
      user.userName === undefined ||
      user.email === undefined ||
      user.password === undefined //||
      //user.roles === undefined
     // email validation
      // !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.email) ||
      // //password validation
      // !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(
      //   user.password
      //
      // )

    ) {
      alert("Please enter all the details");
    } else {
      //call the service
      

      console.log(user);
      console.log(JSON.stringify(user));
     // console.log(`${JSON.stringify(user)}+roles:{'ROLE_STUDENT'}`);


      AuthService.signup(user)
        .then((result) => {
          alert("signup successfully", result.data);
          this.setState({ userarr: result.data });
          console.log(this.state.userarr);
          console.log(this.state.userarr.userType);
          //retirect to login page
          this.props.history.push(`/login`);
        })
        .catch((err) => {
          console.log("err occured", err);
          alert("error occured");
        });
    }
  };

  return (
    <>
      {/* wrire a code for signup form for below details
      "userName" "email", "password","roles" having option [ "ROLE_ADMIN" ] or [ "ROLE_STUDENT" ] OR [ "ROLE_TEACHER" ] */}
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header">
                <h3>Signup</h3>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>User Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter User Name"
                      name="userName"
                      value={user.userName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Password"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
