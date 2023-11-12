import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListItems from './ListItems';
import Contacts from './components/Contacts';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import HouseListingForm from './components/HouseListing';
import About from './components/About';
import Picture from './Picture.png';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listings" element={<ListItems />} />
          <Route path="/about" element={<About />} />
          <Route path="/sell" element={<HouseListingForm />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
