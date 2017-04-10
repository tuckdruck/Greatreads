import React from 'react';
import Icons from './icons';

const Footer = () => (
  <footer className="footer">
    <ul>
      <li className="small-footer">© 2017 Greatreads</li>
      <li className="small-footer">Avital Drucker</li>
      <li className="small-footer">avitaldrucker@gmail.com</li>
      {Icons()}
    </ul>
  </footer>
);

export default Footer;
