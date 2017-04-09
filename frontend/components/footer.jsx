import React from 'react';
import Icons from './icons';

const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        <li className="small-footer">© 2017 Greatreads</li>
        <li className="small-footer">Avital Drucker</li>
        <li className="small-footer">avitaldrucker@gmail.com</li>
        <li><a href="http://www.avitaldrucker.com"><i className="fa fa-globe" aria-hidden="true"></i></a></li>
        <li><a href="https://www.github.com/avitaldrucker"><i className="fa fa-github" aria-hidden="true"></i></a></li>
        <li><a href="https://www.linkedin.com/in/avitaldrucker"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
      </ul>
    </footer>
  );
};

export default Footer;
