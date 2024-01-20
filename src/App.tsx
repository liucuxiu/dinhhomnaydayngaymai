import './App.css';
import GoldPriceYear from './pages/GoldPriceYear';
import CurrentPriceTable from './components/CurrentPriceTable.tsx';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <CurrentPriceTable startDate={yesterday} endDate={today}/>
          </Col>
        </Row>

        <Row>
          <Col>
            <GoldPriceYear />
          </Col>
        </Row>

      </Container>

    </>
  );
}

export default App;
