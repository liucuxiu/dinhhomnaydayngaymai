import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { formatEpochDateDMYHHMM } from '../utils/formatDate.ts';

interface ChartProps {
  data: [];
}

const PriceChart: React.FC<ChartProps> = ({ data }) => (
  <LineChart width={1000} height={500} data={data}>
    <CartesianGrid strokeDasharray="3 3"/>
    <XAxis dataKey="updatedAt"
           tickFormatter={(date) => formatEpochDateDMYHHMM(date)}/>
    <YAxis type="number"
           domain={['dataMin', 'dataMax']}
           tickCount={8}
           tickFormatter={(value) => `${value.toLocaleString()}`}
    />
    <Tooltip labelFormatter={(date) => formatEpochDateDMYHHMM(date)}
             formatter={(value) => `${value.toLocaleString()}`}
    />
    <Legend/>
      <Line type="monotone"
            dataKey="vangMiengSJC.buy"
            name="Vàng miếng SJC (mua)"
            stroke="#f1a6a6"
            dot={false}
            activeDot={{ r: 8 }}
            strokeWidth={2}/>
      <Line type="monotone"
          dataKey="vangMiengSJC.sell"
          name="Vàng miếng SJC (bán)"
          stroke="#cd1b1b"
          dot={false}
          activeDot={{ r: 8 }}
          strokeWidth={2}/>
    <Line type="monotone"
          dataKey="nhanTronVRTL.buy"
          name="Nhẫn tròn trơn VRTL (mua)"
          stroke="#ecd089"
          dot={false}
          activeDot={{ r: 8 }} strokeWidth={2}/>
    <Line type="monotone"
          dataKey="nhanTronVRTL.sell"
          name="Nhẫn tròn trơn VRTL (bán)"
          stroke="#fdbb18"
          dot={false}
          activeDot={{ r: 8 }}
          strokeWidth={2}/>
  </LineChart>
);

export default PriceChart;
