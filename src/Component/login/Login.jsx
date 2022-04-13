import React from "react";
import AuthService from "../../Services/Authentication/AuthService";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: "",
      email: "",
      password: "",
      userarr: [],
    };
  }

  validate = (event) => {
    event.preventDefault(); // to stop the refreshing the page

    //add validation rule to check if user enter details are empty or not and if not then call the login function
    //if empty then show error message

    if (
      this.state.userType === "" ||
      this.state.email === "" ||
      this.state.password === "" ||
      this.state.userType === undefined ||
      this.state.email === undefined ||
      this.state.password === undefined // ||
      //email validation
      // !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)// ||
      // //password validation
      // !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(
      //   this.state.password
      // )


    ) {
      alert("Please enter all the details");
    } else {
     

      //create a objevct using form data to send it nodejs sertvice to add in the databse
      let user = {
        userType: this.state.userType,
        email: this.state.email,
        password: this.state.password,
      };
      //call the service
      console.log(user);
      localStorage.setItem("User_info1", user.email);
      AuthService.login(user)
        .then((result) => {
          console.log("login successfully", result.data);
          this.setState({ userarr: result.data });
          console.log(this.state.userarr);
          console.log(this.state.userarr.userType);

          localStorage.setItem("User_info", JSON.stringify(result.data));
          console.log(this.state.userarr);
          console.log(localStorage.getItem("User_info").jwt);

          this.props.history.push(`/${this.state.userarr.userType}`);
        })
        .catch((err) => {
          alert("login failed");
          console.log("err occured", err);
        });
    }
  };

  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <div>
            <h3>login form</h3>{" "}
          </div>

          <form className="col-md-6">
            <div className="row mb-3">
              <select
                className="form-select"
                aria-label="userType"
                onChange={(event) =>
                  this.setState({ userType: event.target.value })
                }
              >
                <option defaultValue>select userType</option>
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-5">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                  value={this.state.email}
                  onChange={(event) =>
                    this.setState({ email: event.target.value })
                  }
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="inputpassword3"
                className="col-sm-2 col-form-label"
              >
                password
              </label>
              <div className="col-sm-5">
                <input
                  type="password"
                  className="form-control"
                  id="inputpassword3"
                  value={this.state.password}
                  onChange={(event) =>
                    this.setState({ password: event.target.value })
                  }
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.validate}
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
