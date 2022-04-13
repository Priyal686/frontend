import React, { useState } from "react";
import "./Educationaldetails.css";

var Achievement = () => {
    const [noOfRows, setNoOfRows] = useState(1);



  return (
    <div className="jumbotroneducationaldetails">
      <h1>Achievement </h1>
      {/* add button to genrate table row to get Achievement details like
             Achievement,AchievementDescription,AchievementDate in table */}
     
          <div className="container p-5">
     
      <table className="table table-hover table-bordered p-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Achievement</th>
            <th scope="col">AchievementDescription</th>
            <th scope="col">AchievementDate</th>
          </tr>
        </thead>
        <tbody>
        {[...Array(noOfRows)].map((elementInArray, index) => {
         
              return (
                <tr>
                <th scope="row">{index+1}</th>
                <td>
              {" "}
              <input
                type="text"
                className="form-control"
                aria-label="Achievement"
              />{" "}
            </td>
            <td>
              {" "}
              <textarea
                className="form-control"
                placeholder="Add description here"
                id="AchievementDescription"
              ></textarea>{" "}
            </td>
            <td>
              {" "}
              <input
                type="date"
                className="form-control"
                aria-label="AchievementDate"
              />{" "}
            </td>
              </tr>
                );
            })}
            
            </tbody>
            </table>
            <button type="button" className="btn btn-primary me-3" onClick={() => setNoOfRows(noOfRows + 1)}>Add</button>
            <button type="button" className="btn btn-danger" onClick={() => setNoOfRows(noOfRows - 1)}>Delete</button>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto mt-4">
        <button className="btn btn-primary" type="button">
          Submit
        </button>
      </div>
    </div>
  );
};
export default Achievement;
