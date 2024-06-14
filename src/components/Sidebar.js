import React from 'react';

function Sidebar({ setSelectedTrip }) {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="#kerala" onClick={() => setSelectedTrip('kerala')}>Kerala</a></li>
        <li><a href="#agra" onClick={() => setSelectedTrip('agra')}>Agra</a></li>
        <li><a href="#jaipur" onClick={() => setSelectedTrip('jaipur')}>Jaipur</a></li>
        <li><a href="#varanasi" onClick={() => setSelectedTrip('varanasi')}>Varanasi</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
