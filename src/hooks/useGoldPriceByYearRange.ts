import { useQuery } from 'react-query';
import { BASE_URL } from '../constants/api.ts';
import { formatDate } from '../utils/formatDate.ts';


const useGoldPriceByYearRange = (startDate: Date, endDate: Date) => {
  const startDateString = formatDate(startDate);
  const endDateString = formatDate(endDate); 
  const fetchGoldPriceByYearRange = async () => {
    const response = await fetch(`${BASE_URL}?from=${startDateString}&to=${endDateString}`);
    const data = await response.json();
    // sort data by updatedAt in descending order
    data.sort((a: { updatedAt: number; }, b: { updatedAt: number; }) => b.updatedAt - a.updatedAt);
    return data;
  };

  return useQuery(['goldPrice', startDate, endDate], fetchGoldPriceByYearRange);
};

export default useGoldPriceByYearRange;
