import useGoldPriceByYearRange from '../hooks/useGoldPriceByYearRange';
import PriceChart from './PriceChart';

interface Props {
  startDate: Date;
  endDate: Date;
}

const ChartByYear = ({ startDate, endDate}: Props) => {
  const { data } = useGoldPriceByYearRange(startDate, endDate);

  return (
    <div>
      <h1>Gold Price by Years from {startDate.toDateString()} to {endDate.toDateString()}</h1>
      <PriceChart data={data} />
    </div>
  );
};

export default ChartByYear;
