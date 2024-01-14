import React, { useState } from 'react';
import ChartByMonth from '../components/ChartByMonth';

const GoldPriceMonth: React.FC = () => {
  const [year, setYear] = useState<string>("2023");

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputYear = event.target.value;
    setYear(inputYear);
  };

  return (
    <div>
      <label>Year: </label>
      <input type="text" onChange={handleYearChange} />
      <ChartByMonth year={year} />
    </div>
  );
};

export default GoldPriceMonth;
