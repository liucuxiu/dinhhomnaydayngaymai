import { useQuery } from 'react-query';
import { BASE_URL } from '../constants/api.ts';

const useGoldPriceByHour = () => {
  const fetchGoldPriceByHour = async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  };

  return useQuery('goldPriceByHour', fetchGoldPriceByHour);
};

export default useGoldPriceByHour;
