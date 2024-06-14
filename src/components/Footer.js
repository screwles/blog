import React from 'react';
import './Footer.css';

function Footer({ isVisible }) {
  return (
    <footer className={`App-footer ${isVisible ? 'visible' : 'hidden'}`}>
      <p>Thanks for visiting Alwin's Blog. Follow us on social media for more updates.</p>
      <div className="social-media">
        <a href="https://www.facebook.com" target="_blank" rel="https://www.facebook.com/alwin.saji.92">Facebook</a>
        <a href="https://www.twitter.com" target="_blank" rel="https://x.com/AlwinSaji35">Twitter</a>
        <a href="https://www.instagram.com" target="_blank" rel="https://www.instagram.com/its_alwinsaji/">Instagram</a>
      </div>
      <p>&copy; 2024 Alwin's Blog. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
