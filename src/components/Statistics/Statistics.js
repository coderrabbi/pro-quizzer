import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
const Statistics = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="flex flex-col justify-center items-center p-10 w-full">
      <h1 className="text-4xl font-semibold py-10">
        All Topics Total Quiz <span className="text-pink-500">Statistics</span>
      </h1>
      <div>
        <ResponsiveContainer width={300} height={300}>
          <LineChart width={600} height={300} data={data.data}>
            <Line type="monotone" dataKey="total" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <Tooltip />
            <YAxis dataKey="total" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
