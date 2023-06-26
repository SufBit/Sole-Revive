import React from 'react';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from './pages/Home';
import { BuyPage }from './pages/BuyPage';
import Sell from './pages/sell';
import { ShoeDisplay } from './pages/ShoeDisplay';





function App() {
  return (
    <div className = "App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/BuyPage' element = {<BuyPage />} />
          <Route path = '/sell' element = {<Sell />} />
          <Route path = '/ShoeDisplay' element = {<ShoeDisplay />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
