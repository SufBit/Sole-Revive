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
import {SubscribePage} from './pages/SubscribePage'





function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(() => {
  //   const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
  //   return storedIsLoggedIn ? JSON.parse(storedIsLoggedIn) : false;
  // });
  // const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  // }, [isLoggedIn]);

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedAuthToken = localStorage.getItem('authToken');
    return storedAuthToken ? true : false;
  });
  const [cartItems] = useState([]);
  const [isSubscribed, setIsSubscribed] = useState(false); 
  

  useEffect(() => {
    const storedAuthToken = localStorage.getItem('authToken');
    setIsLoggedIn(storedAuthToken ? true : false);
  }, []);

  const handleLogin = (authToken) => {
    console.log('Received Token:', authToken);
    setIsLoggedIn(authToken);
    if (authToken) {
      localStorage.setItem('authToken', authToken);
    } else {
      localStorage.removeItem('authToken');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
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
          <Route path='/login' element={<LogIn handleLogin={handleLogin} handleLogout={handleLogout}/>} />
          <Route path="/shoes/:id/:isSubscribed" element={<ShoeDisplay setIsSubscribed={isSubscribed}/>} />
          {/* <Route path='/ShoeDisplay' element={<ShoeDisplay />} /> */}
          <Route path="/sellData" element={<SellDataPage authToken={isLoggedIn}/>} />
          <Route path='/BuyPage' element={<BuyPage setIsSubscribed={setIsSubscribed} />} />
          <Route path='SubscribePage' element={<SubscribePage authToken={isLoggedIn ? localStorage.getItem('authToken') : ''} />} />
          <Route path='/Review' element={<Reviews />} />
          <Route path="/sellData" element={<SellDataPage />} />
          <Route path ="/sellThankYou" element={<SellThanks />} />
          <Route path='/cart' element={<Cart cartItems={cartItems} isSubscribed={setIsSubscribed}/>} />
          {isLoggedIn ? (
            <>
              
              <Route path='/sell' element={<Sell />} />
              
              
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