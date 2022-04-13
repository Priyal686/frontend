import React, { useState, useEffect } from "react";
import AuthService from "../../Services/Authentication/AuthService";

import { PieChart, Pie, Label } from "recharts";


import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

var StudentResult = () => {
  const [data, setData] = useState([]);
    const [data01, setData01] = useState([]);
    ////examId,rollNo,cls
    const [examId, setExamId] = useState();
    const [rollNo, setRollNo] = useState();
    const [cls, setCls] = useState();


    
const getResult=() => {
    LodeMyAllResults();
    }

    

    const LodeMyAllResults = () => {
        console.log("examId", examId);
        console.log("rollNo", rollNo);
        console.log("cls", cls);
    AuthService.getMyAllResults(cls,examId,rollNo).then((res) => {
      console.log(res.data);
      setData(res.data);
      console.log(data);
    });

    AuthService.getMyAllSubjects().then((res) => {
      console.log(res.data);
      setData01(res.data);
    });
  };

  return (
    <div className="jumbotroneResults">
          <h1>result</h1>
          {/* create to to take examId,rollNo,cls and on click of submit button call getResult() */}
          <form onSubmit={getResult}>
              <div className="form-group">
                  <label>Exam Id</label>
                  <input
                      type="text"
                      className="form-control"
                      placeholder="Exam Id"
                      name="examId"
                      value={examId}
                      onChange={(e) => setExamId(e.target.value)}
                  />
              </div>
              <div className="form-group">    
                  <label>Roll No</label>
                  <input
                      type="text"
                      className="form-control"
                      placeholder="Roll No"
                      name="rollNo"
                      value={rollNo}
                      onChange={(e) => setRollNo(e.target.value)}
                  />
              </div>
              <div className="form-group">    
                  <label>Cls</label>
                  <input
                      type="text"
                      className="form-control"
                      placeholder="Cls"
                      name="cls"
                      value={cls}
                      onChange={(e) => setCls(e.target.value)}
                  />
              </div>
              <button
            className="btn btn-primary"
            type="button"
            onClick={getResult}
          >
            Submit
          </button>
            </form>

                  
          
          <h3>EXAM ID : {examId}{ "     "}
              Roll No :{rollNo}{ "     "}
              Class: {cls}</h3>
      <h3>Subject Performance</h3>
      <div>
        <PieChart width={730} height={250}>
          <Label
            value="Pages of my website"
            offset={0}
            position="insideBottom"
          />
          <Pie
            data={data}
            dataKey="obt_marks"
            nameKey="subject"
            cx="50%"
            cy="50%"
            outerRadius={90}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </div>

      
      <hr />
      <h3>Your performance in all exams </h3>
      <BarChart width={730} height={500} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="obt_marks" fill="#8884d8" />
        <Bar dataKey="totalMarks" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};
export default StudentResult;
