import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import useGoldPriceByYearRange from '../hooks/useGoldPriceByYearRange';


interface Props {
  startYear: string;
  endYear: string;
}


const ChartByYear = ({ startYear, endYear}: Props) => {
  const { data } = useGoldPriceByYearRange(startYear, endYear); // Input year range here

  return (
    <div>
      <h1>Gold Price by Years from {startYear} to {endYear}</h1>
      <LineChart width={1000} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
};

export default ChartByYear;
