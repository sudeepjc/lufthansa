import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from './component/landingPage/landingPage'
import { LiveChart } from './component/livechart/livechart';
import { ICO } from './component/wallets/ico';

function App() {
  const Routing = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/livechart" element={<LiveChart />} />
          <Route path="/ico" element={<ICO />} />

        </Routes>
      </BrowserRouter>
    )
  }
  return (
    <div className="App bg_1c2636 vp-height">
      <Routing></Routing>

    </div >
  );
}

export default App;
