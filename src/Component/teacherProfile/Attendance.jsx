import React, { useState, useEffect } from "react";
import AuthService from "../../Services/Authentication/AuthService";

var Attendance = () => {
  const [student, setStudent] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [course, setCourse] = useState();
  const [batch, setBatch] = useState();

  const getStudentAsperCourseAndBatch = () => {
    console.log(course, batch);
    AuthService.getStudentAsperCourseAndBatch()
      .then((result) => {
        console.log("result.data", result.data);

        setStudent(result.data);
      })
      .catch((err) => {
        console.log("err occured", err);
      });
  };

  return (
    <div className="jumbotron">
      <h1>Attendence</h1>
      <div className="row">
        <div className="col-md-4">
          <select className="form-select" aria-label="select course ">
            <option defaultValue>select course</option>
            <option value="1">PG-DAC</option>
            <option value="2">PG-DBDA</option>
            <option value="3">PG-AI</option>
          </select>
        </div>
        <div className="col-md-4">
          <select className="form-select" aria-label="select course ">
            <option defaultValue>select batch</option>
            <option value="1">sep-2021</option>
            <option value="2">may-2021</option>
            <option value="3">feb-2022</option>
          </select>
        </div>
        <div className="col-md-4">
          <button
            className="btn btn-primary"
            type="button"
            onClick={getStudentAsperCourseAndBatch}
          >
            Submit
          </button>
        </div>
      </div>

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Student Roll no</th>
            <th scope="col">Student Name</th>
            <th scope="col">Attendence</th>
          </tr>
        </thead>
        <tbody>
          {student.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td scope="row">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center">
        <input type="button" className="btn btn-primary" aria-label="Submit" />
        </div>

    </div>
  );
};
export default Attendance;
