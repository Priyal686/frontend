import React, { useState, useEffect } from "react";
import AuthService from "../../Services/Authentication/AuthService";
import ResultPiaChart from "./ResultPiaChart";
import { PieChart, Pie, Label } from "recharts";
import "./Educationaldetails.css";

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
  const [data, setData] = useState([]);
  const [data01, setData01] = useState([]);
  useEffect(() => {
    LodeMyAllResults();
  }, []);

  const LodeMyAllResults = () => {
    AuthService.getMyAllResults().then((res) => {
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
export default Result;
