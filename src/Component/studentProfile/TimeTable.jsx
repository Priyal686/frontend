import React, { useState, useEffect } from "react";
import AuthService from "../../Services/Authentication/AuthService";
import "./Educationaldetails.css";
var TimeTable = () => {
  const [ttable, setTtable] = useState([]);
  const tdata = [
    {
      DayandDate: "Monday",
      Description: "DAC",
      Faculty: "Sagar",
      Module: "DAC",
      Timing: "10:00-11:00",
      Venue: "DAC",
    },
  ];
  const rdata = [];

  useEffect(() => {
    LoadTimeTable();
  }, []);

  const LoadTimeTable = () => {
    AuthService.getTimeTable()
      .then((result) => {
        console.log("result.data",result.data);
        //const mapdata = result.data;
        //console.log(mapdata);
         // ttable.push(result.data);
        setTtable(result.data);
      
      })
      .catch((err) => {
        console.log("err occured", err);
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
                  <tr key={day.DayandDate}>
                      
                  <td>{day.dayAndDate}</td>
                  <td>{day.module}</td>
                  <td>{day.faculty}</td>
                  <td>{day.venue}</td>
                  <td>{day.timing}</td>
                  <td>{day.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default TimeTable;
