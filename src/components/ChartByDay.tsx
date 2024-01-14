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
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
};

export default ChartByDay;
