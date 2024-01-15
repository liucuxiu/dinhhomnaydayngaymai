import { useQuery } from 'react-query';
import { BASE_URL } from '../constants/api.ts';

const useGoldPriceByMonth = (year = "2023") => {
  const fetchGoldPriceByMonth = async () => {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch gold price by month');
    }
    return response.json();
  };

  return useQuery(`goldPriceByMonth-${year}`, fetchGoldPriceByMonth);
};

export default useGoldPriceByMonth;
