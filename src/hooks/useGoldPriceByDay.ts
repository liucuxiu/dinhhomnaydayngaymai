import { useQuery } from 'react-query';
import { BASE_URL } from '../constants/api.ts';

const useGoldPriceByDay = (month = "1", year = "2023") => {
  const fetchGoldPriceByDay = async () => {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch gold price by day');
    }
    console.log(response.json());
    return response.json();
  }

  return useQuery(`goldPriceByDay-${year}-${month}`, fetchGoldPriceByDay);
};

export default useGoldPriceByDay;
