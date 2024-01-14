import React, { useState } from 'react';
import ChartByDay from '../components/ChartByDay';

const GoldPriceDay: React.FC = () => {
  const [year, setYear] = useState("2023");
  const [month, setMonth] = useState("1");

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYear(event.target.value);
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.value);
  };

  return (
    <div>
      <label>Month: </label>
      <input type="text" value={month} onChange={handleMonthChange} placeholder="Enter month" />
      
      <label>Year: </label>
      <input type="text" value={year} onChange={handleYearChange} placeholder="Enter year" />
      <ChartByDay year={year} month={month} />
    </div>
  );
};

export default GoldPriceDay;
