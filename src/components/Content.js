import React from 'react';
import keralaImage from '../images/kerala.jpg';
import agraImage from '../images/agra.jpg';
import jaipurImage from '../images/jaipur.jpg';
import varanasiImage from '../images/varanasi.jpg';
import youtubeIcon from '../images/youtube-icon.png';

const tripDetails = {
  kerala: {
    image: keralaImage,
    description: "Often referred to as 'God’s Own Country,' Kerala is a tropical paradise. Cruise the tranquil backwaters in Alleppey, wander through the lush tea plantations of Munnar, and soak up the natural beauty of its pristine beaches and serene landscapes.",
    videoLink: "https://youtu.be/eEiTRuIYmdI?si=0I9A87vz8s5AOvFC"
  },
  agra: {
    image: agraImage,
    description: "Home to the world-famous Taj Mahal, Agra is a city steeped in Mughal history and architecture. Visitors can marvel at the majestic Agra Fort and explore the ancient city of Fatehpur Sikri, both UNESCO World Heritage sites.",
    videoLink: "https://youtu.be/ZChnh9Z3r48?si=Zj3fyE9vfFQntz8t"
  },
  jaipur: {
    image: jaipurImage,
    description: "Known as the Pink City, Jaipur dazzles with its stunning palaces and forts. Explore the regal Amber Fort, the intricate Hawa Mahal, and the sprawling City Palace, which offers a glimpse into the lives of the former royals.",
    videoLink: "https://youtu.be/kRZLUCWswlw?si=RsV6DwDw6dcipama"
  },
  varanasi: {
    image: varanasiImage,
    description: "As one of the oldest cities in the world, Varanasi is a spiritual epicenter. The ghats along the Ganges River buzz with life and rituals, while the nearby Kashi Vishwanath Temple and the Buddhist site of Sarnath add to the city’s profound religious significance.",
    videoLink: "https://youtu.be/n0cV3HWjPhA?si=6XNHHvDZnxSgO_I6"
  }
};

function Content({ selectedTrip }) {
  const trip = tripDetails[selectedTrip];

  return (
    <div className="content">
      <h2>Trip Descriptions</h2>
      {trip ? (
        <div className="trip">
          <div className={`trip-image ${selectedTrip !== 'home' ? 'large' : ''}`}>
            <img src={trip.image} alt={selectedTrip} />
          </div>
          <div className="trip-description">
            <strong>{selectedTrip.charAt(0).toUpperCase() + selectedTrip.slice(1)}:</strong> {trip.description}
            <div className="watch-now">
              <a href={trip.videoLink} target="_blank" rel="noopener noreferrer">
                <img src={youtubeIcon} alt="YouTube Icon" className="youtube-icon" />
                Watch Now
              </a>
            </div>
          </div>
        </div>
      ) : (
        <p>Please select a trip from the sidebar.</p>
      )}
    </div>
  );
}

export default Content;
