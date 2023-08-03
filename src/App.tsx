import { Chain, EthosConnectProvider } from 'ethos-connect';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import MySquad from './pages/MySquad';
import Header from './components/Header';

function App() {
  return (
    <>
      <ToastContainer position='bottom-center' />
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/my-squad" element={<MySquad />} />
            <Route path="/" element={<Home />} />
          </Routes>      </div>
      </Router>
    </>
  );
}

export default App;

const SquadDappIcon = () => {
  return (
    <img
      src="/mimi-card-stack.png"
      alt=""
      className="w-48 h-48"
    />
  )
}