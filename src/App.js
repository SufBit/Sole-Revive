import React from 'react';
import NavigationBar from './components/NavigationBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UncontrolledExample from './components/Carousel';



function App() {
  return (
    <div className="App">
      <NavigationBar />
      <UncontrolledExample />
    </div>
  );
}

export default App;
