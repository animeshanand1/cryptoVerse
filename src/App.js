import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import CryptoDetails from "./components/CryptoDetails/CryptoDetails";
import News from "./components/News/News";
import Exchanges from "./components/Exchanges/Exchanges";
import  Cryptocurriencies from "./components/Cryptocurriencies/Cryptocurriencies";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={[<Navbar />, <Home />,<Footer/>]} />
          <Route path="/crypto/:coinId" element={[<CryptoDetails />,<Footer/>]} />
          <Route path="/news" element={[<News />,<Footer/>]} />
          <Route path="/cryptocurriencies" element={[<Navbar />,<Cryptocurriencies />,<Footer/>]} />
          <Route path="/exchanges" element={[<Exchanges />,<Footer/>]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
