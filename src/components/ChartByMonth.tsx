import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import useGoldPriceByMonth from '../hooks/useGoldPriceByMonth';

interface Props {
  year: string;
}
const ChartByMonth = ({ year }: Props) => {
  const { data } = useGoldPriceByMonth(year);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Gold Price by Months in {year}</h1>
      <LineChart width={1000} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
};

export default ChartByMonth;
