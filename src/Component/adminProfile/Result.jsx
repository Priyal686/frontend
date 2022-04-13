import React, { useState, useEffect } from "react";
import AuthService from "../../Services/Authentication/AuthService";
//import ResultPiaChart from "./ResultPiaChart";
import { PieChart, Pie, Label } from "recharts";
//import "./Educationaldetails.css";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";



var Result = () => {
  //get student details for selected course from server and store in state
  const [student, setStudent] = useState([]);
 
  const [course, setCourse] = useState();
 
  const [data, setData] = useState([]);
  //create state for cls ,examid and subject
  const [cls, setCls] = useState();
  const [examid, setExamid] = useState();
  const [subject, setSubject] = useState();
 

  const getStudentAsperCourse = () => {
    console.log(course);
    AuthService.getMyAllResultsadmin(course)
      .then((result) => {
        console.log("result.data", result.data);

        setStudent(result.data);
      })
      .catch((err) => {
        console.log("err occured", err);
      });
    LodeMyAllResults();
  };

  const LodeMyAllResults = () => {
    console.log("in load all result")
    AuthService.getMyAllResults().then((res) => {
      console.log(res.data);
      setData(res.data);
    });

    
  };


 


 
 

  return (
    <div className="jumbotron">
      <h1>Result</h1>
      <Link to="/resultEntry">
            <div className="text-right">
              <button type="button" name="btn" className="btn btn-primary">
                {" "}
                Add New Exam{" "}
              </button>
            </div>
      </Link>
      <br />
      <br />
      <Link to="/studentResultEntry">
            <div className="text-right">
              <button type="button" name="btn" className="btn btn-primary">
                {" "}
                Add New Student Result{" "}
              </button>
            </div>
      </Link>
      <br />
      <br />
      <Link to="/studentResult">
            <div className="text-right">
              <button type="button" name="btn" className="btn btn-primary">
                {" "}
               Perticular Student Performance{" "}
              </button>
            </div>
      </Link>
      <hr/>
      <br/>
      
      <div className="row">
<h2> select a course to show result summary</h2>
        <div className="col-md-4">
          <select className="form-select" aria-label="select course "
            onChange={(e) => {
              setCls(e.target.value);
            }
          
            }
          >
            <option defaultValue>select course</option>
            <option value="DAC">PG-DAC</option>
            <option value="DBDA">PG-DBDA</option>
            <option value="AI">PG-AI</option>
          </select>
        </div>
        
        
        <div className="col-md-4">
          <button
            className="btn btn-primary"
            type="button"
            onClick={getStudentAsperCourse}
          >
            Submit
          </button>
        </div>
      </div>
      <h3>Subject Performance</h3>
      <div>
        <PieChart width={730} height={250}>
          <div>hi</div>
          <Label
            value="Pages of my website"
            offset={0}
            position="insideBottom"
          />
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={90}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </div>

     

    </div>
  );
};
    
 
export default Result;
