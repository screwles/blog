import React from 'react';
import './App.css';
import keralaImage from './images/kerala.jpg';
import agraImage from './images/agra.jpg';
import jaipurImage from './images/jaipur.jpg';
import varanasiImage from './images/varanasi.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Alwins Blog</h1>
      </header>
      <main className="App-main">
        <div className="sidebar">
          <ul>
            <li><a href="https://youtu.be/yLE5bDX7M3Y?si=k4GybndjCQ-4nemC" target="_blank" rel="noopener noreferrer">Trip 1</a></li>
            <li><a href="https://youtu.be/ZChnh9Z3r48?si=Plb5_c59_xRC6aHb" target="_blank" rel="noopener noreferrer">Trip 2</a></li>
            <li><a href="https://youtu.be/kRZLUCWswlw?si=o-DE26LnT5k91dNz" target="_blank" rel="noopener noreferrer">Trip 3</a></li>
            <li><a href="https://youtu.be/2lUkBy4UgLQ?si=KCmwLqv67dOC1NuZ" target="_blank" rel="noopener noreferrer">Trip 4</a></li>
          </ul>
        </div>
        <div className="content">
          <h2>Trip Descriptions</h2>
          <div className="trips">
            <div className="trip">
              <div className="trip-image">
                <img src={keralaImage} alt="Kerala" />
              </div>
              <div className="trip-description">
                <strong>Kerala:</strong> Often referred to as "God’s Own Country," Kerala is a tropical paradise. Cruise the tranquil backwaters in Alleppey, wander through the lush tea plantations of Munnar, and soak up the natural beauty of its pristine beaches and serene landscapes.
              </div>
            </div>
            <div className="trip">
              <div className="trip-image">
                <img src={agraImage} alt="Agra" />
              </div>
              <div className="trip-description">
                <strong>Agra:</strong> Home to the world-famous Taj Mahal, Agra is a city steeped in Mughal history and architecture. Visitors can marvel at the majestic Agra Fort and explore the ancient city of Fatehpur Sikri, both UNESCO World Heritage sites.
              </div>
            </div>
            <div className="trip">
              <div className="trip-image">
                <img src={jaipurImage} alt="Jaipur" />
              </div>
              <div className="trip-description">
                <strong>Jaipur:</strong> Known as the Pink City, Jaipur dazzles with its stunning palaces and forts. Explore the regal Amber Fort, the intricate Hawa Mahal, and the sprawling City Palace, which offers a glimpse into the lives of the former royals.
              </div>
            </div>
            <div className="trip">
              <div className="trip-image">
                <img src={varanasiImage} alt="Varanasi" />
              </div>
              <div className="trip-description">
                <strong>Varanasi:</strong> As one of the oldest cities in the world, Varanasi is a spiritual epicenter. The ghats along the Ganges River buzz with life and rituals, while the nearby Kashi Vishwanath Temple and the Buddhist site of Sarnath add to the city’s profound religious significance.
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="App-footer">
        Footer
      </footer>
    </div>
  );
}

export default App;
