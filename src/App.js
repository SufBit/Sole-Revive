import React, { useEffect, useState } from 'react';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import { Home } from './pages/Home';
import BuyPage  from './pages/BuyPage';
import Sell from './pages/sell';
import Cart  from './pages/cart'
import SignUp from './pages/account/signup'
import LogIn from './pages/account/login'
import {ShoeDisplay} from './pages/ShoeDisplay'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import {WishList}  from './pages/WishList'
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    // Make a request to check if the user is logged in
    fetch('/authenticated')
      .then((response) => response.json())
      .then((data) => {
        setIsLoggedIn(data.authenticated);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <NavigationBar isLoggedIn={isLoggedIn}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/WishList' element={<WishList />} />
          <Route path='/login' element={<LogIn />} />
          <Route path="/shoes/:id" element={<ShoeDisplay />} />
          {/* <Route path='/ShoeDisplay' element={<ShoeDisplay />} /> */}
          <Route path='/BuyPage' element={<BuyPage />} />
          {isLoggedIn ? (
            <>
              
              <Route path='/sell' element={<Sell />} />
              <Route path='/cart' element={<Cart />} />
            </>
          ) : (
            <Route path='/*' element={<Navigate to="/login" replace={isLoggedIn} />} />
          )}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;