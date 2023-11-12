import React from 'react';
import ListItems from './ListItems';
import Contacts from './components/Contacts';
import './App.css'
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import HouseListingForm from './components/HouseListing';
import About from './components/About';
import Picture from './Picture.png'
function App() {
  return (
    <div className="App">
      {/* Other components or content can be added here */}
      <Navbar/>
      <HomePage/>
      <img src={Picture} alt="My Picture" />
      <ListItems />
      <About/>
      <HouseListingForm/>
      <Contacts/>



    </div>
  );
}

export default App;
