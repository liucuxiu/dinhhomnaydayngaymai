import { ChangeEvent, useState } from 'react';
import ChartByYear from '../components/ChartByYear';
import { getStartOfWeek, getEndOfWeek } from '../utils/formatDate';

const GoldPriceYear = () => {
  const [startDate, setStartDate] = useState<Date>(getStartOfWeek());
  const now = new Date();
  const endOfWeek = getEndOfWeek();
  const [endDate, setEndDate] = useState<Date>(endOfWeek > now ? now : endOfWeek);

  const handleStartDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStartDate(new Date(event.target.value));
  };

  const handleEndDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEndDate(new Date(event.target.value));
  };

  return (
    <div>
      <label>Start Date: </label>
      <input type="date" value={startDate.toISOString().split('T')[0]} onChange={handleStartDateChange}/>
      <span> </span>
      <label>End Date: </label>
      <input type="date" value={endDate.toISOString().split('T')[0]} onChange={handleEndDateChange}/>
      <div>
        <ChartByYear startDate={startDate} endDate={endDate}/>
      </div>
    </div>
  );
};

export default GoldPriceYear;
