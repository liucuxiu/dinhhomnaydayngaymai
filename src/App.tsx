import './App.css'
import GoldPriceYear from './pages/GoldPriceYear'

function App() {

  return (
    <>
      <h1>Giá vàng</h1>
      {/*<div style={{margin: 100}}>*/}
      {/*  <ChartByHour/>*/}
      {/*</div>*/}
      {/*<div style={{margin: 100}}>*/}
      {/*    <GoldPriceDay />*/}
      {/*</div>*/}

      {/*<div style={{margin: 100}}>*/}
      {/*  <GoldPriceMonth />*/}
      {/*</div>*/}
      
      <div>
        <GoldPriceYear />
      </div>
      
    </>
  )
}

export default App
