import { useQuery } from 'react-query';

const useGoldPriceByDay = (month = "1", year = "2023") => {
  const fetchGoldPriceByDay = async () => {
    // const response = await fetch(`/api/gold-price/${year}/${month}`);
    // if (!response.ok) {
    //   throw new Error('Failed to fetch gold price by day');
    // }
    // return response.json();
    return [
      { day: 1, nhanTronVRTL: 100, vangMiengVRTL: 100, vangMiengSJC: 100 },
      { day: 2, nhanTronVRTL: 1000, vangMiengVRTL: 200, vangMiengSJC: 300 },
      { day: 3, nhanTronVRTL: 1000, vangMiengVRTL: 200, vangMiengSJC: 300 },
      { day: 4, nhanTronVRTL: 1000, vangMiengVRTL: 200, vangMiengSJC: 300 },
      { day: 5, nhanTronVRTL: 1000, vangMiengVRTL: 200, vangMiengSJC: 300 },
      { day: 6, nhanTronVRTL: 1000, vangMiengVRTL: 200, vangMiengSJC: 300 },
      { day: 7, nhanTronVRTL: 1000, vangMiengVRTL: 200, vangMiengSJC: 300 },
      { day: 8, nhanTronVRTL: 1000, vangMiengVRTL: 200, vangMiengSJC: 300 },
      { day: 9, nhanTronVRTL: 1000, vangMiengVRTL: 200, vangMiengSJC: 300 },
      {
        day: 10,
        nhanTronVRTL: 1000,
        vangMiengVRTL: 200,
        vangMiengSJC: 300,
      },
      {
        day: 11,
        nhanTronVRTL: 1000,
        vangMiengVRTL: 200,
        vangMiengSJC: 300,
      },
      {
        day: 12,
        nhanTronVRTL: 1000,
        vangMiengVRTL: 200,
        vangMiengSJC: 300,
      },
      {
        day: 13,
        nhanTronVRTL: 1000,
        vangMiengVRTL: 200,
        vangMiengSJC: 300,
      },
      {
        day: 14,
        nhanTronVRTL: 1000,
        vangMiengVRTL: 200,
        vangMiengSJC: 300,
      },
      {
        day: 15,
        nhanTronVRTL: 1000,
        vangMiengVRTL: 200,
        vangMiengSJC: 300,
      },
      {
        day: 16,
        nhanTronVRTL: 1000,
        vangMiengVRTL: 200,
        vangMiengSJC: 300,
      }
    ];
  }

  return useQuery(`goldPriceByDay-${year}-${month}`, fetchGoldPriceByDay);
};

export default useGoldPriceByDay;
