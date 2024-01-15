import { useQuery } from 'react-query';
import { BASE_URL } from '../constants/api.ts';

const useGoldPriceByYearRange = (startDate: string, endDate: string) => {
  const fetchGoldPriceByYearRange = async () => {
    const response = await fetch(`${BASE_URL}?from=${startDate}&to=${endDate}`);
    const data = await response.json();
    return data;
  };

  return useQuery(['goldPrice', startDate, endDate], fetchGoldPriceByYearRange);
};

export default useGoldPriceByYearRange;
