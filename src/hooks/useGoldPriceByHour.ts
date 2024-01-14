import { useQuery } from 'react-query';

const useGoldPriceByHour = () => {
  const fetchGoldPriceByHour = async () => {
    const response = await fetch(import.meta.env.API);
    const data = await response.json();
    return data;
  };

  return useQuery('goldPriceByHour', fetchGoldPriceByHour);
};

export default useGoldPriceByHour;
