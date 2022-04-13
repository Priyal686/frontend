import React from "react";
import AuthService from "../../Services/Authentication/AuthService";

//write class for Profile component and export it
class Profile extends React.Component {
  //write constructor for Profile component  fname,mname, lname,gender,dOB,mobile, address,
  constructor(props) {
    //write super for Profile component
    super(props);
    //write state for Profile component
    this.state = {
      fname: "",
      mname: "",
      lname: "",
      gender: "",
      dOB: "",
      mobile: "",
      address: "",
      country: "",
      State: "",
      district: "",
      city: "",
      pincode: "",
      email: ""
     
    };
  }
  //componemtDidMount for Profile component
  componentDidMount() {
    //to send get request to webservice and get the object which matches with id
    AuthService.getProfileByID("1").then((result) => {
      //write setState for Profile component
      this.setState({
        fname: result.data.fname,
        mname: result.data.mname,
        lname: result.data.lname,
        gender: result.data.gender,
        dOB: result.data.dOB,
        mobile: result.data.mobile,
        address: result.data.address,
        country: result.data.country,
        State: result.data.State,
        district: result.data.district,
        city: result.data.city,
        pincode: result.data.pincode,
        email: result.data.email
      
      });
    });
  }
  //write a fuction to create object and send it to the service
  onSubmit = (e) => {
    e.preventDefault();
    //add validation rule to check if user enter details are empty or not and if not then call submit function
    //if empty then show error message
    if (
      this.state.fname === "" ||
      this.state.mname === "" ||
      this.state.lname === "" ||
      this.state.dOB === "" ||
      this.state.mobile === "" ||
      this.state.address === "" ||
      this.state.country === "" ||
      this.state.State === "" ||
      this.state.district === "" ||
      this.state.city === "" ||
      this.state.pincode === "" ||
      this.state.email === "" 
     
    ) {
      alert("Please enter all the details");
    } else {
      const std = {
        fname: this.state.fname,
        mname: this.state.mname,
        lname: this.state.lname,
        gender: this.state.gender,
        dOB: this.state.dOB,
        mobile: this.state.mobile,
        address: this.state.address,
        country: this.state.country,
        State: this.state.State,
        district: this.state.district,
        city: this.state.city,
        pincode: this.state.pincode,
        email: this.state.email,
       
      };
      console.log(std);
      //call the service to send the object
      AuthService.updateProfileTeacher(std).then((result) => {
        //write alert for success
        alert("Profile Updated Successfully");
      });
    }
  };
  //write a function to set the state of all form elements
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  //write a function to render the form
  render() {
    return (
      <div className="jumbotronprofile mt-3">
        <h1 className="text-center">Teacher profile</h1>
        {/* write form for taking inputs from student like fname,mname, lname,gender,dOB,mobile, address, country , State, district, city, pincode, email, course ,batch
         */}
        <div className="row">
          <div className="col-md-4">
            <label htmlFor="fname" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fname"
              aria-describedby="fname"
              value={this.state.fname}
              onChange={(event) => this.setState({ fname: event.target.value })}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="mname" className="form-label">
              Middle Name
            </label>
            <input
              type="text"
              className="form-control"
              id="mname"
              aria-describedby="mname"
              value={this.state.mname}
              onChange={(event) => this.setState({ mname: event.target.value })}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="lname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lname"
              aria-describedby="lname"
              value={this.state.lname}
              onChange={(event) => this.setState({ lname: event.target.value })}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            <label htmlFor="Gender" className="form-label">
              Gender
            </label>
            <select
              className="form-select"
              aria-label="select Gender"
              value={this.state.gender}
              onChange={(event) =>
                this.setState({ gender: event.target.value })
              }
            >
              <option defaultValue>select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="col-md-4">
            <label htmlFor="dOB" className="form-label">
              Date of birth
            </label>
            <input
              type="date"
              className="form-control"
              id="dOB"
              aria-describedby="dOB"
              value={this.state.dOB}
              onChange={(event) => this.setState({ dOB: event.target.value })}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="mobile" className="form-label">
              mobile
            </label>
            <input
              type="text"
              className="form-control"
              id="mobile"
              aria-describedby="mobile"
              value={this.state.mobile}
              onChange={(event) =>
                this.setState({ mobile: event.target.value })
              }
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            <label htmlFor="address" className="form-label">
              address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              aria-describedby="address"
              value={this.state.address}
              onChange={(event) =>
                this.setState({ address: event.target.value })
              }
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="country" className="form-label">
              country
            </label>
            <input
              type="text"
              className="form-control"
              id="country"
              aria-describedby="country"
              value={this.state.country}
              onChange={(event) =>
                this.setState({ country: event.target.value })
              }
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="State" className="form-label">
              State
            </label>
            <input
              type="text"
              className="form-control"
              id="State"
              aria-describedby="State"
              value={this.state.State}
              onChange={(event) => this.setState({ State: event.target.value })}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            <label htmlFor="district" className="form-label">
              district
            </label>
            <input
              type="text"
              className="form-control"
              id="district"
              aria-describedby="district"
              value={this.state.district}
              onChange={(event) =>
                this.setState({ district: event.target.value })
              }
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="city" className="form-label">
              city
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              aria-describedby="city"
              value={this.state.city}
              onChange={(event) => this.setState({ city: event.target.value })}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="pincode" className="form-label">
              pincode
            </label>
            <input
              type="text"
              className="form-control"
              id="pincode"
              aria-describedby="pincode"
              value={this.state.pincode}
              onChange={(event) =>
                this.setState({ pincode: event.target.value })
              }
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            <label htmlFor="email" className="form-label">
              email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              aria-describedby="email"
              value={this.state.email}
              onChange={(event) => this.setState({ email: event.target.value })}
            />
          </div>
          
          
        </div>
        <div className="d-grid gap-2 col-6 mx-auto mt-4">
          <button
            className="btn btn-primary"
            type="button"
            onClick={this.onSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}
export default Profile;
