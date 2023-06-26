import React from 'react';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from './pages/Home';
import { BuyPage }from './pages/BuyPage';
import Sell from './pages/sell';
import {Cart} from './pages/cart'
import SignUp from './pages/account/signup'
import LogIn from './pages/account/login'




function App() {
  return (
    <div className = "App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path ='/' element = {<Home />}/>
          <Route path ='/BuyPage' element = {<BuyPage />}/>
          <Route path = '/sell' element = {<Sell />} />
          <Route path = '/cart' element = {<Cart />} />
          <Route path = '/signup' element = {<SignUp />} />
          <Route path = '/login' element = {<LogIn />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
