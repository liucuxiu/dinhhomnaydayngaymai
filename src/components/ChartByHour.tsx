import useGoldPriceByHour from '../hooks/useGoldPriceByHour';
import PriceChart from './PriceChart.tsx';

const ChartByHour = () => {
  const { data, isLoading, isError } = useGoldPriceByHour();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div>
      <h1>Gold Price by Hour Today</h1>
      <PriceChart data={data} />
    </div>
  );
};

export default ChartByHour;
