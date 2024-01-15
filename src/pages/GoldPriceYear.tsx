import { useState } from 'react';
import ChartByYear from '../components/ChartByYear';

const GoldPriceYear = () => {
    const [startDate, setStartDate] = useState<string>("2021-01-01");
    const [endDate, setEndDate] = useState<string>("2021-12-31");

    const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setStartDate(event.target.value);
    };

    const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEndDate(event.target.value);
    };

    return (
      <div>
        <h1>Gold Price by Date Range</h1>
          <label>Start Date: </label>
          <input type="date" value={startDate} onChange={handleStartDateChange} />
          <span> </span>
          <label>End Date: </label>
          <input type="date" value={endDate} onChange={handleEndDateChange} />
        <div>
          <ChartByYear startDate={startDate} endDate={endDate} />
        </div>
      </div>
    );
};

export default GoldPriceYear;
