import React, { PureComponent } from "react";
import { PieChart, Pie, Tooltip,Label } from "recharts";

var ResultPiaChart = () => {
  const data01 = [
    {
      name: "Physics",
      value: 400,
    },
    {
      name: "Chemistry",
      value: 300,
    },
    {
      name: "Maths",
      value: 300,
    },
    {
      name: "Biology",
      value: 250,
    },
  ];

  return (
    <div>
          <PieChart width={730} height={250}>
          <Label value="Pages of my website" offset={0} position="insideBottom" />
        <Pie
          data={data01}
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
  );
};
export default ResultPiaChart;
