import React, { useState, useEffect } from "react";
import AuthService from "../../Services/Authentication/AuthService";
//import ResultPiaChart from "./ResultPiaChart";
import { PieChart, Pie, Label } from "recharts";
//import "./Educationaldetails.css";

//crate class

var Result = () => {
  //get student details for selected course from server and store in state
  const [student, setStudent] = useState([]);

  const [course, setCourse] = useState();
  //state for exam
  const [exam, setExam] = useState();
  //state for student

  const getStudentAsperCourse = () => {
    console.log(course);
    AuthService.getStudentAsperCourse(course)
      .then((result) => {
        console.log("result.data", result.data);

        setStudent(result.data);
      })
      .catch((err) => {
        console.log("err occured", err);
      });
  };

  useEffect(() => {
    //gel all exam
    AuthService.getAllExam().then((res) => {
      console.log(res.data);
      setExam(res.data);
    });
  }, []);

  return (
    <div className="jumbotron">
      {/* create table to show exam id and exam name */}

      {/* write a code genrate form to display student details and box to enter marks */}
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Exam ID</th>
            <th scope="col">Exam Name</th>
          </tr>
        </thead>
        <tbody>
          {exam.map((exam) => (
            <tr key={exam.id}>
              <td>{exam.id}</td>
              <td>{exam.examType}</td>
            </tr>
          ))} 
        </tbody>
      </table>
      
    </div>
  );
};

export default Result;
