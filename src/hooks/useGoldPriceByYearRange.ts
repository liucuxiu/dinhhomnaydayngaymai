import { useQuery } from 'react-query';

const useGoldPriceByYearRange = (startYear = "2010", endYear = "2013") => {
  const fetchGoldPriceByYearRange = async () => {
    // const response = await fetch(`/api/gold-price?startYear=${startYear}&endYear=${endYear}`);
    // const data = await response.json();
    // return data;
    return  [
      { year: '2010', price: 1000 },
      { year: '2011', price: 1200 },
      { year: '2012', price: 1500 },
      { year: '2013', price: 1800 },
      { year: '2014', price: 2000 },
      { year: '2015', price: 2100 },
      { year: '2016', price: 2200 },
      { year: '2017', price: 2300 },
      { year: '2018', price: 2400 },
      { year: '2019', price: 2500 },
      { year: '2020', price: 2600 },
      { year: '2021', price: 2700 },
      { year: '2022', price: 2800 },
      { year: '2023', price: 2900 },
      { year: '2024', price: 3000 },
      { year: '2025', price: 3100 },
    ];

  };

  return useQuery(['goldPrice', startYear, endYear], fetchGoldPriceByYearRange);
};

export default useGoldPriceByYearRange;
