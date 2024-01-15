import { useQuery } from 'react-query';
import { BASE_URL } from '../constants/api.ts';

const useGoldPriceByYearRange = (startDate: Date, endDate: Date) => {
  const startDateString = startDate.toISOString();
  const endDateString = endDate.toISOString();
  const fetchGoldPriceByYearRange = async () => {
    const response = await fetch(`${BASE_URL}?from=${startDateString}&to=${endDateString}`);
    const data = await response.json();
    return data;
  };

  return useQuery(['goldPrice', startDate, endDate], fetchGoldPriceByYearRange);
};

export default useGoldPriceByYearRange;
