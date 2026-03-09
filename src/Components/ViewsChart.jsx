import React from "react";
import { LineChart,Line,XAxis,YAxis,Tooltip,ResponsiveContainer } from "recharts";

export default function ViewsChart({ videos }) {

  const data = videos.map(v=>({
    name:v.title,
    views:v.views
  }));

  return (

    <div className="chart">

      <h2>Views Analytics</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip/>
          <Line type="monotone" dataKey="views" stroke="#8b5cf6"/>
        </LineChart>
      </ResponsiveContainer>

    </div>

  );

}