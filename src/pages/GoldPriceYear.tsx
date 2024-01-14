import { useState } from 'react';
import ChartByYear from '../components/ChartByYear';

const GoldPriceYear = () => {
  const [startYear, setStartYear] = useState<string>("2010");
  const [endYear, setEndYear] = useState<string>("2023");

  const handleStartYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartYear(String(event.target.value));
  };

  const handleEndYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndYear(String(event.target.value));
  };

  return (
    <div>
      <h1>Gold Price by Year Range</h1>
        <label>Start Year: </label>
        <input type="text" value={startYear} onChange={handleStartYearChange} />
        <span> </span>
        <label>End Year: </label>
        <input type="text" value={endYear} onChange={handleEndYearChange} />
      <div>
        <ChartByYear startYear={startYear} endYear={endYear} />
      </div>
    </div>
  );
};

export default GoldPriceYear;
