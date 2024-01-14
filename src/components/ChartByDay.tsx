import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useGoldPriceByDay from '../hooks/useGoldPriceByDay';

interface Props {
  month: string;
  year: string;
}

const ChartByDay = ({ month, year}: Props) => {
  const { data, isLoading, isError } = useGoldPriceByDay(month, year);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div>
      <h1>Gold Price by Days in {month}/{year}</h1>
      <LineChart width={1000} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="updatedAt" tickFormatter={(date) => new Date(date).getHours().toLocaleString()}/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="nhanTronVRTL.sell" stroke="#82ca9d" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="vangMiengVRTL.sell" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="vangMiengSJC.sell" stroke="#c22b2b" activeDot={{ r: 8 }} />
       
        <Line type="monotone" dataKey="nhanTronVRTL.buy" stroke="#70ad11" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="vangMiengVRTL.buy" stroke="#1136ad" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="vangMiengSJC.buy" stroke="#fdbb18" activeDot={{ r: 8 }} />

      </LineChart>
    </div>
  );
};

export default ChartByDay;
