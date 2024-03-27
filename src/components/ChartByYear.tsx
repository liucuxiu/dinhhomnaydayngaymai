import useGoldPriceByYearRange from '../hooks/useGoldPriceByYearRange';
import PriceChart from './PriceChart';

interface Props {
  startDate: Date;
  endDate: Date;
}

const ChartByYear = ({ startDate, endDate}: Props) => {
  const { data } = useGoldPriceByYearRange(startDate, endDate);

  if (!data) return null;

  return (
    <div>
      <PriceChart data={data} />
    </div>
  );
};

export default ChartByYear;
