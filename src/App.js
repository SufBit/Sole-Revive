import React from 'react';
import NavigationBar from './components/NavigationBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UncontrolledExample from './components/Carousel';
import ShoeCardContainer from './components/shoeCardContainer';



function App() {
  return (
    <div className="App">
      <NavigationBar />
      <UncontrolledExample />
      <ShoeCardContainer />
    </div>
  );
}

export default App;
