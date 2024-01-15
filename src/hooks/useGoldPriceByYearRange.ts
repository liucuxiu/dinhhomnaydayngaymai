import { useQuery } from 'react-query';
import { BASE_URL } from '../constants/api.ts';

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed in JavaScript
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
};

const useGoldPriceByYearRange = (startDate: Date, endDate: Date) => {
  const startDateString = formatDate(startDate);
  const endDateString = formatDate(endDate); 
  const fetchGoldPriceByYearRange = async () => {
    const response = await fetch(`${BASE_URL}?from=${startDateString}&to=${endDateString}`);
    const data = await response.json();
    return data;
  };

  return useQuery(['goldPrice', startDate, endDate], fetchGoldPriceByYearRange);
};

export default useGoldPriceByYearRange;
