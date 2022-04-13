import React, { useState, useEffect } from "react";
import StudentPageService from "../../Services/StudentPageService";

var Attendence = () => {
  //write the code for attendance which will come from server
  //and then display the attendance
  //server will send the attendance data in the form of array of objects

  const [attendance, setAttendance] = useState([]);
  const adata = [
    {
      Date: "",
      Attendance: "",
    },
  ];
  const rdata = [];

  useEffect(() => {
    LoadAttendance();
  }, []);

  const LoadAttendance = () => {
    StudentPageService.getAttendance()
      .then((result) => {
        console.log("result.data", result.data);
        //const mapdata = result.data;
        //console.log(mapdata);
        // ttable.push(result.data);
        setAttendance(result.data);
      })
      .catch((err) => {
        console.log("err occured", err);
      });
  };

  return (
    <div>
      <h1>Attendence</h1>
      {/* write a code to display the attendance of student which come from server */}
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Date</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((day) => (
            <tr key={day.date}>
              <td>{day.date}</td>
              <td>{day.attendance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Attendence;
