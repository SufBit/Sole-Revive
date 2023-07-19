import React, {  useEffect, useState } from 'react';
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
import Reviews from './pages/Reviews'
import 'bootstrap/dist/css/bootstrap.min.css';
import SellDataPage from './pages/sellData';
import SellThanks from './pages/sellThankYou'





function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(() => {
  //   const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
  //   return storedIsLoggedIn ? JSON.parse(storedIsLoggedIn) : false;
  // });
  // const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  // }, [isLoggedIn]);

  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    setIsLoggedIn(authToken);
  }, []);

  const handleLogin = (authToken) => {
    setIsLoggedIn(authToken);
    localStorage.setItem('authToken', authToken);
  };

  const handleLogout = () => {
    setIsLoggedIn(null);
    localStorage.removeItem('authToken');
  };
  
  return (
    <div className="App">
      <Router>
        <NavigationBar isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/WishList' element={<WishList />} />
          <Route path='/login' element={<LogIn handleLogin={handleLogin}/>} />
          <Route path="/shoes/:id" element={<ShoeDisplay setCartItems={setCartItems}/>} />
          {/* <Route path='/ShoeDisplay' element={<ShoeDisplay />} /> */}
          <Route path='/BuyPage' element={<BuyPage />} />
          <Route path='/Review' element={<Reviews />} />
          <Route path="/sellData" element={<SellDataPage />} />
          <Route path ="/sellThankYou" element={<SellThanks />} />
          {isLoggedIn ? (
            <>
              
              <Route path='/sell' element={<Sell />} />
              <Route path='/cart' element={<Cart cartItems={cartItems}/>} />
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