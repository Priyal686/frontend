import React from "react";
import { useEffect } from "react/cjs/react.development";
import AdminService from "../../Services/AdminService";
import {useHistory} from "react-router-dom"

//write a class component for add time table and send data to backend using axios

class AddTimeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      dayAndDate: "",
      module: "",
      faculty: "",
      venue: "",
      timing: "",
      description: "",
    };
  }

  //handle change event for input fields
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  //handle submit event for form
  handleSubmit = (event) => {
    event.preventDefault();
    //add validation rule to check if user enter details are empty or not and if not then call submit function
    //if empty then show error message
    if (
      this.state.dayAndDate === "" ||
      this.state.module === "" ||
      this.state.faculty === "" ||
      this.state.venue === "" ||
      this.state.timing === "" ||
      this.state.description === ""
    ) {
      alert("Please enter all details");
    } else {
      //create object
      const timetable = {
        dayAndDate: this.state.dayAndDate,
        module: this.state.module,
        faculty: this.state.faculty,
        venue: this.state.venue,
        timing: this.state.timing,
        description: this.state.description,
      };
      console.log(timetable);

      //call service to send data to backend
      AdminService.addtimetable(timetable)
        .then((res) => {
          alert("timetable added successfully", res.data);
         this.props.history.push("/Admin");
          //history.push(`/${DEFAULT_ACTIVE_TAB}`);
        })
        .catch((err) => {
          console.log("err occured", err);
        });
      // history.push("/timetable");
    }
  };
  //load table data from backend if id present
  componentDidMount() {
    console.log("component did mount");
    console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
    if (id) {
      AdminService.gettimetable(id).then((res) => {
        console.log(res.data);
        this.setState({
          dayAndDate: res.data.dayAndDate,
          module: res.data.module,
          faculty: res.data.faculty,
          venue: res.data.venue,
          timing: res.data.timing,
          description: res.data.description,
        });
      });
    }
  }

  // useeffect to set state of form fields
  useeffect() {
    console.log("use effect");
    this.setState({
      dayAndDate: this.props.dayAndDate,
      module: this.props.module,
      faculty: this.props.faculty,
      venue: this.props.venue,
      timing: this.props.timing,
      description: this.props.description,
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>dayAndDate</label>
                  <input
                    type="text"
                    className="form-control"
                    name="dayAndDate"
                    value={this.state.dayAndDate}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>module</label>
                  <input
                    type="text"
                    className="form-control"
                    name="module"
                    value={this.state.module}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>faculty</label>
                  <input
                    type="text"
                    className="form-control"
                    name="faculty"
                    value={this.state.faculty}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>venue</label>
                  <input
                    type="text"
                    className="form-control"
                    name="venue"
                    value={this.state.venue}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>timing</label>
                  <input
                    type="time"
                    className="form-control"
                    name="timing"
                    value={this.state.timing}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>description</label>
                  <input
                    type="text"
                    className="form-control"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTimeTable;
