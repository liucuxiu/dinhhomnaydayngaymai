import useGoldPriceByYearRange from '../hooks/useGoldPriceByYearRange.ts';
import { Table } from 'react-bootstrap';
import { formatEpochDate } from '../utils/formatDate.ts';
import { isSameDay } from 'date-fns';

interface Props {
  startDate: Date;
  endDate: Date;
}

const CurrentPriceTable = ({ startDate, endDate }: Props) => {
  const { data } = useGoldPriceByYearRange(startDate, endDate);

  if (!data) return null;

  const yesterdayRecord = data.findLast((item: { updatedAt: number; }) => isSameDay(formatEpochDate(item.updatedAt), startDate));


  const todayRecord = data.findLast((item: { updatedAt: number; }) => isSameDay(formatEpochDate(item.updatedAt), endDate));

  if (!todayRecord || !yesterdayRecord) return null;

  const isVangMiengSJCSellUpOrDown = todayRecord.vangMiengSJC.sell > yesterdayRecord.vangMiengSJC.sell ? 'green' : 'red';
  const isVangMiengSJCBuyUpOrDown = todayRecord.vangMiengSJC.buy > yesterdayRecord.vangMiengSJC.buy ? 'green' : 'red';
  const isNhanTronVRTLSellUpOrDown = todayRecord.nhanTronVRTL.sell > yesterdayRecord.nhanTronVRTL.sell ? 'green' : 'red';
  const isNhanTronVRTLBuyUpOrDown = todayRecord.nhanTronVRTL.buy > yesterdayRecord.nhanTronVRTL.buy ? 'green' : 'red';

  return (
    <div className="mb-3">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Date</th>
            <th>Vàng miếng SJC (bán)</th>
            <th>Vàng miếng SJC (mua)</th>
            <th>Nhẫn tròn trơn VRTL (bán)</th>
            <th>Nhẫn tròn trơn VRTL (mua)</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>{startDate.toDateString()}</td>
          <td>{yesterdayRecord.vangMiengSJC.sell}</td>
          <td>{yesterdayRecord.vangMiengSJC.buy}</td>
          <td>{yesterdayRecord.nhanTronVRTL.sell}</td>
          <td>{yesterdayRecord.nhanTronVRTL.buy}</td>
        </tr>
        <tr>
          <td>{endDate.toDateString()}</td>
          <td style={{ color: isVangMiengSJCSellUpOrDown }}>{todayRecord.vangMiengSJC.sell}</td>
          <td style={{ color: isVangMiengSJCBuyUpOrDown }}>{todayRecord.vangMiengSJC.buy}</td>
          <td style={{ color: isNhanTronVRTLSellUpOrDown }}>{todayRecord.nhanTronVRTL.sell}</td>
          <td style={{ color: isNhanTronVRTLBuyUpOrDown }}>{todayRecord.nhanTronVRTL.buy}</td>
        </tr>

        </tbody>
      </Table>
    </div>
  );
};

export default CurrentPriceTable;