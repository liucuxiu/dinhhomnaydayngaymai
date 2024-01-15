import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

interface ChartProps {
  data: [] | undefined;
}

const PriceChart: React.FC<ChartProps> = ({ data }) => (
  <LineChart width={1000} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="updatedAt"
           tickFormatter={(date) => new Date(date).toLocaleDateString()}/>
    <YAxis />
    <Tooltip labelFormatter={(date) => new Date(date).toLocaleDateString()} />
    <Legend />
    <Line type="monotone" dataKey="nhanTronVRTL.sell" stroke="#82ca9d" activeDot={{ r: 8 }} />
    <Line type="monotone" dataKey="vangMiengVRTL.sell" stroke="#8884d8" activeDot={{ r: 8 }} />
    <Line type="monotone" dataKey="vangMiengSJC.sell" stroke="#c22b2b" activeDot={{ r: 8 }} />
    <Line type="monotone" dataKey="nhanTronVRTL.buy" stroke="#70ad11" activeDot={{ r: 8 }} />
    <Line type="monotone" dataKey="vangMiengVRTL.buy" stroke="#1136ad" activeDot={{ r: 8 }} />
    <Line type="monotone" dataKey="vangMiengSJC.buy" stroke="#fdbb18" activeDot={{ r: 8 }} />
  </LineChart>
);

export default PriceChart;