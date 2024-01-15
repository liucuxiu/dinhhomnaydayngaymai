import useGoldPriceByDay from '../hooks/useGoldPriceByDay';
import PriceChart from './PriceChart.tsx';

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
      <PriceChart data={data} />
    </div>
  );
};

export default ChartByDay;
