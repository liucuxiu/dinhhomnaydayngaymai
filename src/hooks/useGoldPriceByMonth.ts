import { useQuery } from 'react-query';

const useGoldPriceByMonth = (year = "2023") => {
  const fetchGoldPriceByMonth = async () => {
    // const response = await fetch(`/api/gold-price/${year}`);
    // if (!response.ok) {
    //   throw new Error('Failed to fetch gold price by month');
    // }
    // return response.json();
    return [
      { month: 'Jan', price: 1000 },
      { month: 'Feb', price: 1200 },
      { month: 'Mar', price: 1500 },
      { month: 'Apr', price: 1800 },
      { month: 'May', price: 2000 },
      { month: 'Jun', price: 2100 },
      { month: 'Jul', price: 2200 },
      { month: 'Aug', price: 2300 },
      { month: 'Sep', price: 2400 },
      { month: 'Oct', price: 2500 },
      { month: 'Nov', price: 2600 },
      { month: 'Dec', price: 2700 },
    ];
  };

  return useQuery(`goldPriceByMonth-${year}`, fetchGoldPriceByMonth);
};

export default useGoldPriceByMonth;
