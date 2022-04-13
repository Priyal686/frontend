import React, { useState, useEffect } from "react";
import AuthService from "../../Services/Authentication/AuthService";
import { PersonCircle, Trash, PenFill } from "react-bootstrap-icons";
import AdminService from "../../Services/AdminService";
import { Link } from "react-router-dom";
//import "./Educationaldetails.css";
var TimeTable = () => {
  const [ttable, setTtable] = useState([]);

  const rdata = [];

  useEffect(() => {
    LoadTimeTable();
  }, []);

  const LoadTimeTable = () => {
    AuthService.getTimeTable()
      .then((result) => {
        console.log("result.data", result.data);
        //const mapdata = result.data;
        //console.log(mapdata);
        // ttable.push(result.data);
       
        setTtable(result.data);

        console.log(ttable);
      })
      .catch((err) => {
        console.log("err occured", err);
      });
  };

   const handleDelete = (id) => {
    console.log("Printing id", id);
    AdminService.removetimetable(id)
      .then((response) => {
        console.log("shedule deleted successfully", response.data);
        LoadTimeTable();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div className="jumbotroneducationaldetails">
      <div>
        <h2 className="text-center">Time Table</h2>

        <div className="row">
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>id</th>
                <th>DayandDate</th>
                <th>Module</th>
                <th>Faculty</th>
                <th>Venue</th>
                <th>Timing</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {ttable.map((day) => (
                <tr key={day.id}>
                  <td>{day.id}</td>
                  <td>{day.dayAndDate}</td>
                  <td>{day.module}</td>
                  <td>{day.faculty}</td>
                  <td>{day.venue}</td>
                  <td>{day.timing}</td>
                  <td>{day.description}</td>
                  <td>
                    <Link
                      to={{
                        pathname: `/timetable/edit/${day.id}`,
                        // state: { empolyee: props.empolyee },
                      }}
                    >
                      <PenFill />
                    </Link>
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => handleDelete(day.id)}
                     
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/timetable/add">
            <div className="text-right">
              <button type="button" name="btn" className="btn btn-primary">
                {" "}
                Add New day
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default TimeTable;
