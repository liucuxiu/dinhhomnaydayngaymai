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
      <h3>From {startDate.toDateString()} To {endDate.toDateString()} </h3>
      <PriceChart data={data} />
    </div>
  );
};

export default ChartByYear;
