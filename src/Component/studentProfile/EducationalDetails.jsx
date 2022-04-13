import React from "react";
import "./Educationaldetails.css";
// var Educationaldettails = () => {
class Educationaldettails extends React.Component {
  //write constructor for initializing state
  constructor(props) {
    super(props);
    this.state = {
      //like Class, Stream,Board,StartYear,EndYear,ObtainMarks,OutOfMark,Percentage for ssc,hsc,grd,pg,og
      sscStream: "",
      sscBoard: "",
      sscStartYear: "",
      sscEndYear: "",
      sscObtainMarks: "",
      sscOutOfMark: "",
      sscPercentage: "",
      hscStream: "",
      hscBoard: "",
      hscStartYear: "",
      hscEndYear: "",
      hscObtainMarks: "",
      hscOutOfMark: "",
      hscPercentage: "",
      grdStream: "",
      grdBoard: "",
      grdStartYear: "",
      grdEndYear: "",
      grdObtainMarks: "",
      grdOutOfMark: "",
      grdPercentage: "",
      pgStream: "",
      pgBoard: "",
      pgStartYear: "",
      pgEndYear: "",
      pgObtainMarks: "",
      pgOutOfMark: "",
      pgPercentage: "",
      ogStream: "",
      ogBoard: "",
      ogStartYear: "",
      ogEndYear: "",
      ogObtainMarks: "",
      ogOutOfMark: "",
      ogPercentage: "",
    };
  }

  //write a fuction to create object and send it to the service
  onSubmit = (e) => {
    e.preventDefault();
    //add validation rule to check if user enter details are empty or not and if not then call submit function
    //if empty then show error message
    if (
      this.state.sscStream === "" //||
      //  this.state.sscBoard === "" ||
      //  this.state.sscStartYear === "" ||
      //  this.state.sscEndYear === "" ||
      //  this.state.sscObtainMarks === "" ||
      //  this.state.sscOutOfMark === "" ||
      //  this.state.sscPercentage === "" ||
      //  this.state.hscStream === "" ||
      //  this.state.hscBoard === "" ||
      //  this.state.hscStartYear === "" ||
      //  this.state.hscEndYear === "" ||
      //  this.state.hscObtainMarks === "" ||
      //  this.state.hscOutOfMark === "" ||
      //  this.state.hscPercentage === "" ||
      //  this.state.grdStream === "" ||
      //  this.state.grdBoard === "" ||
      //  this.state.grdStartYear === "" ||
      //  this.state.grdEndYear === "" ||
      //  this.state.grdObtainMarks === "" ||
      //  this.state.grdOutOfMark === "" ||
      //  this.state.grdPercentage === "" ||
      //  this.state.pgStream === "" ||
      //  this.state.pgBoard === "" ||
      //  this.state.pgStartYear === "" ||
      //  this.state.pgEndYear === "" ||
      //  this.state.pgObtainMarks === "" ||
      //  this.state.pgOutOfMark === "" ||
      //  this.state.pgPercentage === ""
    ) {
      alert("Please fill all the details");
    } else {
      //create object
      const educationalDetails = {
        sscStream: this.state.sscStream,
        sscBoard: this.state.sscBoard,
        sscStartYear: this.state.sscStartYear,
        sscEndYear: this.state.sscEndYear,
        sscObtainMarks: this.state.sscObtainMarks,
        sscOutOfMark: this.state.sscOutOfMark,
        sscPercentage: this.state.sscPercentage,
        hscStream: this.state.hscStream,
        hscBoard: this.state.hscBoard,
        hscStartYear: this.state.hscStartYear,
        hscEndYear: this.state.hscEndYear,
        hscObtainMarks: this.state.hscObtainMarks,
        hscOutOfMark: this.state.hscOutOfMark,
        hscPercentage: this.state.hscPercentage,
        grdStream: this.state.grdStream,
        grdBoard: this.state.grdBoard,
        grdStartYear: this.state.grdStartYear,
        grdEndYear: this.state.grdEndYear,
        grdObtainMarks: this.state.grdObtainMarks,
        grdOutOfMark: this.state.grdOutOfMark,
        grdPercentage: this.state.grdPercentage,
        pgStream: this.state.pgStream,
        pgBoard: this.state.pgBoard,
        pgStartYear: this.state.pgStartYear,
        pgEndYear: this.state.pgEndYear,
        pgObtainMarks: this.state.pgObtainMarks,
        pgOutOfMark: this.state.pgOutOfMark,
        pgPercentage: this.state.pgPercentage,
        ogStream: this.state.ogStream,
        ogBoard: this.state.ogBoard,
        ogStartYear: this.state.ogStartYear,
        ogEndYear: this.state.ogEndYear,
        ogObtainMarks: this.state.ogObtainMarks,
        ogOutOfMark: this.state.ogOutOfMark,
        ogPercentage: this.state.ogPercentage,
      };
      //call the service
      console.log(educationalDetails);
      // this.props.submit(educationalDetails);
    }
  };

  render() {
    return (
      <div className="jumbotroneducationaldetails">
        <h1 className="text-center">Educational dettails</h1>

        {/* create a dynamic table to take Educationaldetails information like Class, Stream,Board,StartYear,EndYear,ObtainMarks,OutOfMark,Percentage for 
            SSC,HSC,Graduation,Postgraduation,otherGraduation,  */}
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Class</th>
              <th scope="col">Stream</th>
              <th scope="col">Board </th>
              <th scope="col">StartYear</th>
              <th scope="col">EndYear</th>
              <th scope="col">ObtainMarks</th>
              <th scope="col">OutOfMark</th>
              <th scope="col">Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SSC</td>

              <td>
                {" "}
                <input
                  type="text"
                  id="sscStream"
                  className="form-control"
                  aria-label="Stream"
                  value={this.state.sscStream}
                  onChange={(event) =>
                    this.setState({ sscStream: event.target.value })
                  }
                />{" "}
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  id="sscBoard"
                  className="form-control"
                  aria-label="Board"
                  value={this.state.sscBoard}
                  onChange={(event) =>
                    this.setState({ sscBoard: event.target.value })
                  }
                />{" "}
              </td>
              <td>
                {" "}
                <input
                  type="date"
                  id="sscStartYear"
                  className="form-control"
                  aria-label="StartYear"
                  value={this.state.sscStartYear}
                  onChange={(event) =>
                    this.setState({ sscStartYear: event.target.value })
                  }
                />{" "}
              </td>
              <td>
                {" "}
                <input
                  type="date"
                  id="sscEndYear"
                  className="form-control"
                  aria-label="EndYear"
                  value={this.state.sscEndYear}
                  onChange={(event) =>
                    this.setState({ sscEndYear: event.target.value })
                  }
                />{" "}
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  id="sscObtainMarks"
                  className="form-control"
                  aria-label="ObtainMarks"
                  value={this.state.sscObtainMarks}
                  onChange={(event) =>
                    this.setState({ sscObtainMarks: event.target.value })
                  }
                />{" "}
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  id="sscOutOfMark"
                  className="form-control"
                  aria-label="OutOfMark"
                  value={this.state.sscOutOfMark}
                  onChange={(event) =>
                    this.setState({ sscOutOfMark: event.target.value })
                  }
                />{" "}
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  id="sscPercentage"
                  className="form-control"
                  aria-label="Percentage"
                  value={this.state.sscPercentage}
                  onChange={(event) =>
                    this.setState({ sscPercentage: event.target.value })
                  }
                />{" "}
              </td>
            </tr>
            <tr>
              <td>HSC</td>
              <td>
                {" "}
                <input
                  type="text"
                  id="hscStream"
                  className="form-control"
                  aria-label="Stream"
                  value={this.state.hscStream}
                  onChange={(event) =>
                    this.setState({ hscStream: event.target.value })
                  }
                />{" "}
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  id="hscBoard"
                  className="form-control"
                  aria-label="Board"
                  value={this.state.hscBoard}
                  onChange={(event) =>
                    this.setState({ hscBoard: event.target.value })
                  }
                />{" "}
              </td>
              <td>
                {" "}
                <input
                  type="date"
                  id="hscStartYear"
                  className="form-control"
                  aria-label="StartYear"
                  value={this.state.hscStartYear}
                  onChange={(event) =>
                    this.setState({ hscStartYear: event.target.value })
                  }
                />{" "}
              </td>
              <td>
                {" "}
                <input
                  type="date"
                  id="hscEndYear"
                  className="form-control"
                  aria-label="EndYear"
                  value={this.state.hscEndYear}
                  onChange={(event) =>
                    this.setState({ hscEndYear: event.target.value })
                  }
                />{" "}
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  id="hscObtainMarks"
                  className="form-control"
                  aria-label="ObtainMarks"
                  value={this.state.hscObtainMarks}
                  onChange={(event) =>
                    this.setState({ hscObtainMarks: event.target.value })
                  }
                />{" "}
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  id="hscOutOfMark"
                  className="form-control"
                  aria-label="OutOfMark"
                  value={this.state.hscOutOfMark}
                  onChange={(event) =>
                    this.setState({ hscOutOfMark: event.target.value })
                  }
                />{" "}
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  id="hscPercentage"
                  className="form-control"
                  aria-label="Percentage"
                  value={this.state.hscPercentage}
                  onChange={(event) =>
                    this.setState({ hscPercentage: event.target.value })
                  }
                />{" "}
              </td>
            </tr>
            <tr>
              <td>Graduation</td>
              <td>
                {" "}
                <input
                  type="text"
                  id="grdStream"
                  className="form-control"
                  aria-label="Stream"
                  value={this.state.grdStream}
                  onChange={(event) =>
                    this.setState({ grdStream: event.target.value })
                  }
                />{" "}
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  id="grdBoard"
                  className="form-control"
                  aria-label="Board"
                  value={this.state.grdBoard}
                  onChange={(event) =>
                    this.setState({ grdBoard: event.target.value })
                  }
                />{" "}
              </td>
              <td>
                {" "}
                <input
                  type="date"
                  id="grdStartYear"
                  className="form-control"
                  aria-label="StartYear"
                  value={this.state.grdStartYear}
                  onChange={(event) =>
                    this.setState({ grdStartYear: event.target.value })
                  }
                />{" "}
              </td>
              <td>
                {" "}
                <input
                  type="date"
                  id="grdEndYear"
                  className="form-control"
                  aria-label="EndYear"
                  value={this.state.grdEndYear}
                  onChange={(event) =>
                    this.setState({ grdEndYear: event.target.value })
                  }
                />{" "}
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  id="grdObtainMarks"
                  className="form-control"
                  aria-label="ObtainMarks"
                  value={this.state.grdObtainMarks}
                  onChange={(event) =>
                    this.setState({ grdObtainMarks: event.target.value })
                  }
                />{" "}
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  id="grdOutOfMark"
                  className="form-control"
                  aria-label="OutOfMark"
                  value={this.state.grdOutOfMark}
                  onChange={(event) =>
                    this.setState({ grdOutOfMark: event.target.value })
                  }
                />{" "}
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  id="grdPercentage"
                  className="form-control"
                  aria-label="Percentage"
                  value={this.state.grdPercentage}
                  onChange={(event) =>
                    this.setState({ grdPercentage: event.target.value })
                  }
                />{" "}
              </td>
            </tr>
            <tr>
              <td>PostGraduation</td>
              <td>
                {" "}
                <input
                  type="text"
                  id="pgStream"
                  className="form-control"
                  aria-label="Stream"
                  value={this.state.pgStream}
                  onChange={(event) =>
                    this.setState({ pgStream: event.target.value })
                  }
                />{" "}
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  id="pgBoard"
                  className="form-control"
                  aria-label="Board"
                  value={this.state.pgBoard}
                  onChange={(event) =>
                    this.setState({ pgBoard: event.target.value })
                  }
                />{" "}
              </td>
              <td>
                {" "}
                <input
                  type="date"
                  id="pgStartYear"
                  className="form-control"
                  aria-label="StartYear"
                  value={this.state.pgStartYear}
                  onChange={(event) =>
                    this.setState({ pgStartYear: event.target.value })
                  }
                />{" "}
              </td>
              <td>
                {" "}
                <input
                  type="date"
                  id="pgEndYear"
                  className="form-control"
                  aria-label="EndYear"
                  value={this.state.pgEndYear}
                  onChange={(event) =>
                    this.setState({ pgEndYear: event.target.value })
                  }
                />{" "}
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  id="pgObtainMarks"
                  className="form-control"
                  aria-label="ObtainMarks"
                  value={this.state.pgObtainMarks}
                  onChange={(event) =>
                    this.setState({ pgObtainMarks: event.target.value })
                  }
                />{" "}
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  id="pgOutOfMark"
                  className="form-control"
                  aria-label="OutOfMark"
                  value={this.state.pgOutOfMark}
                  onChange={(event) =>
                    this.setState({ pgOutOfMark: event.target.value })
                  }
                />{" "}
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  id="pgPercentage"
                  className="form-control"
                  aria-label="Percentage"
                  value={this.state.pgPercentage}
                  onChange={(event) =>
                    this.setState({ pgPercentage: event.target.value })
                  }
                />{" "}
              </td>
            </tr>
            <tr>
              <td>Other Graduation</td>
              <td>
                {" "}
                <input
                  type="text"
                  id="ogStream"
                  className="form-control"
                  aria-label="Stream"
                  value={this.state.ogStream}
                  onChange={(event) =>
                    this.setState({ ogStream: event.target.value })
                  }
                />{" "}
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  id="ogBoard"
                  className="form-control"
                  aria-label="Board"
                  value={this.state.ogBoard}
                  onChange={(event) =>
                    this.setState({ ogBoard: event.target.value })
                  }
                />{" "}
              </td>
              <td>
                {" "}
                <input
                  type="date"
                  id="ogStartYear"
                  className="form-control"
                  aria-label="StartYear"
                  value={this.state.ogStartYear}
                  onChange={(event) =>
                    this.setState({ ogStartYear: event.target.value })
                  }
                />{" "}
              </td>
              <td>
                {" "}
                <input
                  type="date"
                  id="ogEndYear"
                  className="form-control"
                  aria-label="EndYear"
                  value={this.state.ogEndYear}
                  onChange={(event) =>
                    this.setState({ ogEndYear: event.target.value })
                  }
                />{" "}
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  id="ogObtainMarks"
                  className="form-control"
                  aria-label="ObtainMarks"
                  value={this.state.ogObtainMarks}
                  onChange={(event) =>
                    this.setState({ ogObtainMarks: event.target.value })
                  }
                />{" "}
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  id="ogOutOfMark"
                  className="form-control"
                  aria-label="OutOfMark"
                  value={this.state.ogOutOfMark}
                  onChange={(event) =>
                    this.setState({ ogOutOfMark: event.target.value })
                  }
                />{" "}
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  id="ogPercentage"
                  className="form-control"
                  aria-label="Percentage"
                  value={this.state.ogPercentage}
                  onChange={(event) =>
                    this.setState({ ogPercentage: event.target.value })
                  }
                />{" "}
              </td>
            </tr>
          </tbody>
        </table>
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
export default Educationaldettails;
