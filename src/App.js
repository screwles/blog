import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [selectedTrip, setSelectedTrip] = useState('home');
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const handleTripSelect = (trip) => {
    setSelectedTrip(trip);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const contentHeight = document.querySelector('.App-main').offsetHeight;

    if (scrollPosition >= contentHeight + 100) {
      setIsFooterVisible(true);
    } else {
      setIsFooterVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <Sidebar setSelectedTrip={handleTripSelect} />
        <Content selectedTrip={selectedTrip} />
      </main>
      <Footer isVisible={isFooterVisible} />
    </div>
  );
}

export default App;
