import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { formatEpochDate } from '../utils/formatDate.ts';

interface ChartProps {
  data: [];
}

const PriceChart: React.FC<ChartProps> = ({ data }) => (
  <LineChart width={1000} height={500} data={data}>
    <CartesianGrid strokeDasharray="3 3"/>
    <XAxis dataKey="updatedAt"
           tickFormatter={(date) => formatEpochDate(date)}/>
    <YAxis type="number"
           domain={['dataMin', 'dataMax']}
           tickCount={8}
           tickFormatter={(value) => `${value.toLocaleString()}`}
    />
    <Tooltip labelFormatter={(date) => formatEpochDate(date)}
             formatter={(value) => `${value.toLocaleString()}`}
    />
    <Legend/>

    <Line type="monotone"
          dataKey="vangMiengSJC.sell"
          name="Vàng miếng SJC (bán)"
          stroke="#cd1b1b"
          activeDot={{ r: 8 }}
          strokeWidth={3}/>
    <Line type="monotone"
          dataKey="vangMiengSJC.buy"
          name="Vàng miếng SJC (mua)"
          stroke="#f1a6a6"
          activeDot={{ r: 8 }}
          strokeWidth={3}/>
    <Line type="monotone"
          dataKey="nhanTronVRTL.sell"
          name="Nhẫn tròn trơn VRTL (bán)"
          stroke="#fdbb18"
          activeDot={{ r: 8 }} strokeWidth={3}/>
    <Line type="monotone"
          dataKey="nhanTronVRTL.buy"
          name="Nhẫn tròn trơn VRTL (mua)"
          stroke="#ecd089"
          activeDot={{ r: 8 }} strokeWidth={3}/>

  </LineChart>
);

export default PriceChart;
