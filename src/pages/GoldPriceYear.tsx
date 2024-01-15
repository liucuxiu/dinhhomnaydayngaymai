import { useState } from 'react';
import ChartByYear from '../components/ChartByYear';

const GoldPriceYear = () => {
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());

    const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setStartDate(new Date(event.target.value));
    };

    const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEndDate(new Date(event.target.value));
    };

    return (
      <div>
        <h1>Gold Price by Date Range</h1>
          <label>Start Date: </label>
          <input type="date" value={startDate.toISOString().split('T')[0]} onChange={handleStartDateChange} />
          <span> </span>
          <label>End Date: </label>
          <input type="date" value={startDate.toISOString().split('T')[0]} onChange={handleEndDateChange} />
        <div>
          <ChartByYear startDate={startDate} endDate={endDate} />
        </div>
      </div>
    );
};

export default GoldPriceYear;
